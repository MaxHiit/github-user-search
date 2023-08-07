import { useContext, useEffect, useState } from 'react';
import useDebounceValue from '../hooks/useDebounceValue';
import { UsersContext } from '../context/userContext';

const SearchInput = () => {
	const [name, setName] = useState<string>('');
	const debounceName = useDebounceValue(name);
	const controller = new AbortController();

	const { addUsers, reset, errorMessage, setErrorMessage } = useContext(UsersContext);

	const fetchUsers = async (user: string, signal?: AbortSignal) => {
		reset();

		const res = await fetch(` https://api.github.com/search/users?q=${user}`, {
			signal
		});
		const data = await res.json();

		if (res.status === 403) {
			setErrorMessage(data.message);
			addUsers([]);
			return;
		}

		if (res.status === 200) {
			const usersList = data.items;
			addUsers(usersList);

			if (errorMessage) {
				setErrorMessage(null);
			}
		}
	};

	useEffect(() => {
		const signal = controller.signal;
		if (debounceName.length <= 0) {
			addUsers([]);
			return;
		}
		fetchUsers(debounceName, signal);

		return () => controller.abort('cancel request');
	}, [debounceName]);

	return (
		<div className='my-6'>
			<input
				type='text'
				className='rounded-md border-none p-2 min-w-[100px]'
				value={name}
				placeholder='Search for username'
				maxLength={256}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
