import React from 'react';
import styles from './index.module.scss';

const Footer: React.FC = () => {
	return (
		<div className={styles.Footer}>
			<ul className="flexClmCenter" style={{ lineHeight: '25px' }}>
				<li>©2023 - 2024 By HHU_实践课_HYJ</li>
				<li>快来品尝一下我们的饮品吧！</li>
			</ul>
		</div>
	);
};

export default Footer;
