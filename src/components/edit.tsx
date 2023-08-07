import { useContext } from 'react';
import { UsersContext } from '../context/userContext';
import DeleteButton from './delete-button';
import DuplicateButton from './duplicate-button';

const Edit = () => {
	const { edit, selectedUsers, isSelectAll, selectAllUser, toogleEditMode } =
		useContext(UsersContext);

	return (
		<div className='p-2 mb-4 w-full'>
			{edit && (
				<div className='flex items-center justify-between gap-4'>
					<div className='flex items-center gap-2'>
						<label htmlFor='selectAll'>Select All</label>
						<input type='checkbox' name='selectAll' onChange={selectAllUser} checked={isSelectAll} />
					</div>

					<p>{`${selectedUsers.length} ${
						selectedUsers.length > 1 ? 'elements' : 'element'
					} selected`}</p>
				</div>
			)}

			<div className='flex items-center justify-between gap-2 w-full mt-4'>
				{edit && (
					<>
						<DuplicateButton />
						<DeleteButton />
					</>
				)}

				<button onClick={toogleEditMode} aria-label='edit mode button' className='ml-auto'>
					{!edit ? 'Edit Mode' : ' Close Edit Mode'}
				</button>
			</div>
		</div>
	);
};

export default Edit;
