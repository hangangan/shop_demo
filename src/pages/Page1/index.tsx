import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const Page1: React.FC = () => {
	return (
		<div className={styles.page1}>
			Page1
			<NavLink to="msg">toMsg</NavLink>
			<Outlet />
		</div>
	);
};

export default Page1;
