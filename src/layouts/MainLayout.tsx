import React from 'react';
import { MainLt } from '../types/interfaces';
import { Box } from '../UI/CalcUI';

const MainLayout = ({ children }: MainLt): React.ReactElement => {
	return (
		<Box direction='column' align='center' justify='center' className='main'>
			{children}
		</Box>
	);
};

export default MainLayout;
