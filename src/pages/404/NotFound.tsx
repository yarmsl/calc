import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const NotFound = (): ReactElement => {
	return (
		<>
			<h1 className="error__title">404</h1>
			<h2>
				Такой стрницы пока нет, вернитесь на 
				<Link to="/"><span className="error__link"> ту что есть</span></Link>
			</h2>
		</>
	);
};

export default NotFound;
