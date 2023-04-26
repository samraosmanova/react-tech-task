import { Box, Typography } from '@mui/material';
import { FC, memo } from 'react';

const Footer: FC = memo(() => (
	<Box
		component="footer"
		className="footer"
		sx={{
			height: '80px',
			display: 'flex',
			maxWidth: '100%',
			padding: '0 15px',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#eeeff1',
		}}
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
			© 1992 - 2023
		</Typography>
	</Box>
));

export default Footer;
