import React, { FC, ReactNode, memo } from 'react';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';

interface StepperProps {
	renderProps: (activeStep: number) => ReactNode;
}

const StepperContainer: FC<StepperProps> = memo(({ renderProps }) => {
	const { activeStep, steps } = useAppSelector((state: RootState) => state.StepperSlice);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flex: '1 1 auto',
				minHeight: '100%',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Stepper activeStep={activeStep}>
				{steps.map((label) => {
					const stepProps: { completed?: boolean } = {};
					const labelProps: {
						optional?: React.ReactNode;
					} = {};

					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps}>{label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<Box
				sx={{
					flex: '1 1 auto',
					padding: '20px',
				}}
			>
				{renderProps(activeStep)}
			</Box>
		</Box>
	);
});

export default StepperContainer;
