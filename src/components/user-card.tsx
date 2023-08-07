import React, { useContext } from 'react';
import { UserType } from '../types';
import { UsersContext } from '../context/userContext';

interface UserCardProps {
	user: UserType;
}

const UserCard = ({ user }: UserCardProps) => {
	const { edit, selectedUsers, updateSelectedUser } = useContext(UsersContext);

	const handleSelectUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		updateSelectedUser(user.id, checked);
	};

	return (
		<li className='flex flex-col items-center justify-between min-w-[100px] bg-[#183644] p-4 rounded-md'>
			<div className='flex items-start w-full'>
				{edit && (
					<input
						type='checkbox'
						name={user.login}
						id={user.id.toString()}
						checked={selectedUsers.includes(user.id)}
						onChange={handleSelectUser}
					/>
				)}
				<div className='rounded-full h-20 w-20 overflow-hidden mx-auto'>
					<img src={user.avatar_url} alt={`avatar of ${user.login} github profil`} />
				</div>
			</div>

			<div className='my-4'>
				<p>ID: {user.id}</p>
				<p>Username: {user.login}</p>
			</div>

			<a href={user.url} target='_blank'>
				<button className=''>
					<span>View profile</span>
				</button>
			</a>
		</li>
	);
};

export default UserCard;
