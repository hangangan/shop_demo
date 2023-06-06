import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import My from '../pages/My';
export default [
	{
		path: '/home',
		element: <Home />
	},
	{
		path: '/my',
		element: <My />
	},
	{
		path: '/',
		element: <Navigate to="/home" />
	}
];
