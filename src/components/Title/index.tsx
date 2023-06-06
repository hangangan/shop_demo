import React from 'react';
import styles from './index.module.scss';

export interface TitleProps {
	title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
	return <div className={styles.Title}>{title}</div>;
};

export default Title;
