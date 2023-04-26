import { FC, MouseEventHandler, PropsWithChildren, forwardRef, memo } from 'react';
import { addCredits } from '../redux/slices/RequestSlice';
import { TransitionProps } from '@mui/material/transitions';
import { handleReset } from '../redux/slices/StepperSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { handleClose } from '../redux/slices/ModalSlice';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import { RootState } from '../redux/store';
import { Box, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle: FC<PropsWithChildren> = memo(({ children, ...other }) => (
	<DialogTitle id="customized-dialog-title" sx={{ m: 0, p: 2, fontSize: 25 }} {...other}>
		{children}
	</DialogTitle>
));

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface ModalProps {
	children: JSX.Element;
}

const Modal: FC<ModalProps> = memo(({ children }) => {
	const dispatch = useAppDispatch();
	const { open, steps, activeStep } = useAppSelector((state: RootState) => ({
		...state.StepperSlice,
		...state.ModalSlice,
	}));

	const onExitHandler: MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(handleReset());
		dispatch(handleClose());
	};

	const AddCreditHandler = () => {
		dispatch(addCredits());
		dispatch(handleReset());
		dispatch(handleClose());
	};

	return (
		<Box className="modal" component="div">
			<BootstrapDialog
				fullScreen
				open={open}
				keepMounted
				TransitionComponent={Transition}
				aria-labelledby="customized-dialog-title"
			>
				<BootstrapDialogTitle>Заявка на оформление кредита</BootstrapDialogTitle>
				<DialogContent dividers>{children}</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={onExitHandler} variant="outlined">
						Отменить
					</Button>
					{activeStep === steps.length - 1 && (
						<Button autoFocus onClick={AddCreditHandler} variant="outlined">
							Подтвердить
						</Button>
					)}
				</DialogActions>
			</BootstrapDialog>
		</Box>
	);
});

export default Modal;
