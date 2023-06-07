import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Image } from '@arco-design/web-react';
import styles from './index.module.scss';
import head_img from '../../assets/imgs/techny-shopping-basket-with-groceries.gif';

const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div className={styles.Header}>
				<NavLink
					to="/home"
					className={({ isActive }) => (isActive ? ' navActive' : styles.nav)}
					style={{ fontSize: '35px' }}
				>
					欢迎光临 HHU_HYJ 饮料小铺
					<Image src={head_img} height={180} style={{ marginLeft: '10px' }} />
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
