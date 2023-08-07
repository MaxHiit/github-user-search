import { useContext } from 'react';
import { UsersContext } from '../context/userContext';
import UserCard from './user-card';

const UsersList = () => {
	const { users, errorMessage } = useContext(UsersContext);

	return (
		<div className='h-[70vh] mt-auto overflow-y-scroll overflow-x-none border border-slate-200 py-4 px-2'>
			{errorMessage && (
				<p className='text-red-500 mb-5'>
					API rate limit exceeded for 91.172.246.136. (But here's the good news: Authenticated requests
					get a higher rate limit. Check out the documentation for more details.)
				</p>
			)}

			{users.length === 0 ? (
				<p>No users found</p>
			) : (
				<ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{users.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</ul>
			)}
		</div>
	);
};

export default UsersList;
