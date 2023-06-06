import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = () => {
	return (
		<div className={styles.Header}>
			<div className="left">
				<NavLink
					to="/home"
					className={({ isActive }) => (isActive ? 'navActive' : '')}
				>
					电影推荐
				</NavLink>
			</div>
			<div className="right">
				<NavLink
					to="/my"
					className={({ isActive }) => (isActive ? 'navActive' : '')}
				>
					我的
				</NavLink>

				<span className={styles.Login}>Login</span>
			</div>
		</div>
	);
};

export default Header;
