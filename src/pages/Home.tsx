import { HeaderLayout, MainLayout, FooterLayout } from '../Layout';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { FC, memo } from 'react';


const Home: FC = memo(() => {
	return (
		<Box
			sx={{
				minHeight: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
			component={'div'}
			className="wrapper"
		>
			<HeaderLayout />
			<MainLayout>
				<Outlet />
			</MainLayout>
			<FooterLayout />
		</Box>
	);
});

export default Home;
