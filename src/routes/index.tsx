import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import My from '../pages/My';
import Recent from '../pages/Recent';
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
		path: '/recently',
		element: <Recent />
	},
	{
		path: '/',
		element: <Navigate to="/home" />
	}
];
