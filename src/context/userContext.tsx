import {
	createContext,
	useEffect,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction
} from 'react';
import { UserType } from '../types';

interface UsersContextType {
	users: UserType[];
	selectedUsers: UserType['id'][];
	isSelectAll: boolean;
	edit: boolean;
	errorMessage: Error | null;
	setErrorMessage: Dispatch<SetStateAction<null>>;
	addUsers: (users: UserType[]) => void;
	selectAllUser: () => void;
	updateSelectedUser: (user: UserType['id'], checked: boolean) => void;
	deleteSelectedUsers: () => void;
	duplicateSelectedUser: () => void;
	reset: () => void;
	toogleEditMode: () => void;
}

interface UsersProviderProps {
	children: ReactNode;
}

export const UsersContext = createContext<UsersContextType>({
	users: [],
	selectedUsers: [],
	isSelectAll: false,
	edit: false,
	errorMessage: null,
	setErrorMessage: () => {},
	addUsers: () => {},
	selectAllUser: () => {},
	updateSelectedUser: () => {},
	deleteSelectedUsers: () => {},
	duplicateSelectedUser: () => {},
	reset: () => {},
	toogleEditMode: () => {}
});

export const UsersProvider = ({ children }: UsersProviderProps) => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [selectedUsers, setSelectedUsers] = useState<UserType['id'][]>([]);
	const [isSelectAll, setIsSelectAll] = useState(false);
	const [edit, setEdit] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const addUsers = (users: UserType[]) => {
		setUsers(users);
	};

	const selectAllUser = () => {
		setIsSelectAll(!isSelectAll);
		setSelectedUsers(users.map((user) => user.id));
		if (isSelectAll) {
			setSelectedUsers([]);
		}
	};

	const updateSelectedUser = (userId: UserType['id'], checked: boolean) => {
		if (isSelectAll) {
			setIsSelectAll(false);
		}

		setSelectedUsers([...selectedUsers, userId]);

		console.log('selected user click', userId);

		if (!checked) {
			console.log('checked', checked);
			console.log(
				'filter',
				selectedUsers.filter((user) => user !== userId)
			);

			setSelectedUsers(selectedUsers.filter((user) => user !== userId));
		}
	};

	const deleteSelectedUsers = () => {
		const remainingUsers = users.filter((user) => !selectedUsers.includes(user.id));
		setUsers(remainingUsers);
		setSelectedUsers([]);
		setIsSelectAll(false);
	};

	const duplicateSelectedUser = () => {
		const selectedUserIds = selectedUsers.slice(); // Clone the array
		const duplicatedUsers = users.filter((user) => selectedUserIds.includes(user.id));
		setUsers([...users, ...duplicatedUsers]);
		setSelectedUsers([]);
		setIsSelectAll(false);
	};

	const reset = () => {
		setSelectedUsers([]);
		setIsSelectAll(false);
		setEdit(false);
	};

	const toogleEditMode = () => {
		setEdit(!edit);
	};

	useEffect(() => {
		console.log(selectedUsers);
	}, [selectedUsers]);

	return (
		<UsersContext.Provider
			value={{
				users,
				selectedUsers,
				isSelectAll,
				edit,
				errorMessage,
				setErrorMessage,
				addUsers,
				selectAllUser,
				updateSelectedUser,
				deleteSelectedUsers,
				duplicateSelectedUser,
				reset,
				toogleEditMode
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};
