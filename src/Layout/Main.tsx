import { FC, ReactNode, memo } from 'react';
import { Box } from '@mui/material';

interface MainProps {
	children: ReactNode;
}

const Main: FC<MainProps> = memo(({ children }) => (
	<Box
		sx={{
			display: 'flex',
			width: '1440px',
			maxWidth: '100%',
			margin: '0 auto',
			flex: '1 1 auto',
			padding: '15px 15px',
			justifyContent: 'center',
		}}
		maxWidth="sm"
		className="container"
	>
		{children}
	</Box>
));

export default Main;
