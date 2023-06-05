import { Navigate } from 'react-router-dom';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

export default [
	{
		path: '/page1',
		element: <Page1 />,
		children: [
			{
				path: 'msg',
				element: <Page3 />
			}
		]
	},
	{
		path: '/page2',
		element: <Page2 />
	},
	{
		path: '/',
		element: <Navigate to="/page1" />
	}
];
