import { Box, Typography } from '@mui/material';
import { FC, memo } from 'react';

const Header: FC = memo(() => (
	<Box
		sx={{
			height: '100px',
			display: 'flex',
			maxWidth: '100%',
			padding: '0 15px',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#eeeff1',
		}}
		component="header"
		className="header"
	>
		<Typography
			variant="h1"
			component="h2"
			sx={{
				fontSize: '20px',
				textAlign: 'center',
				color: '#475ed0',
				textTransform: 'uppercase',
			}}
		>
			Bank Respublika
		</Typography>
	</Box>
));

export default Header;
