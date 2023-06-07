import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';

export default [
	{
		path: '/home',
		element: <Home />
	},
	{
		path: '/',
		element: <Navigate to="/home" />
	}
];
