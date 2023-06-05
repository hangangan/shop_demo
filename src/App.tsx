import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment, decrement } from './store/features/counterSlice';
import './App.css';

const App: React.FC = () => {
	const element = useRoutes(routes);
	const { value } = useAppSelector((store) => store.counter);
	const dispatch = useAppDispatch();
	return (
		<div className="App">
			<div className="nav">
				<NavLink
					to="/page1"
					className={({ isActive }) => (isActive ? 'nav-active' : void 0)}
				>
					Page1
				</NavLink>
				<NavLink
					to="/page2"
					className={({ isActive }) => (isActive ? 'nav-active' : void 0)}
				>
					Page2
				</NavLink>
			</div>
			{element}

			<h3>计数器DEMO</h3>
			<p>{value}</p>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				-
			</button>
		</div>
	);
};

export default App;
