import { useContext } from 'react';
import Edit from './components/edit';
import Navbar from './components/navbar';
import SearchInput from './components/search-input';
import UsersList from './components/users-list';
import { UsersContext } from './context/userContext';

function App() {
	const { users } = useContext(UsersContext);

	return (
		<>
			<Navbar />
			<main className='h-[calc(100vh-64px-1.5rem)]'>
				<SearchInput />
				{users.length > 0 && <Edit />}
				<UsersList />
			</main>
		</>
	);
}

export default App;
