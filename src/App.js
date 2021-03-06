import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import PostNewsFeedPage from 'pages/PostNewsFeed';
import RegisterPage from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/post' element={<PostNewsFeedPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	);
}

export default App;
