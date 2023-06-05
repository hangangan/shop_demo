import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2: React.FC = () => {
	const navigate = useNavigate();
	return (
		<>
			Page2
			<a
				onClick={() => {
					navigate('/page1');
				}}
			>
				toPage1
			</a>
		</>
	);
};

export default Page2;
