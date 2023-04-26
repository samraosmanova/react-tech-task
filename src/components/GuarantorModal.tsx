import { handleCloseGuarantor } from '../redux/slices/ModalSlice';
import { TransitionProps } from '@mui/material/transitions';
import { useAppSelector, useAppDispatch } from '../hooks';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FC, forwardRef, memo } from 'react';
import { RootState } from '../redux/store';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface GuarantorModalProps {
	children: JSX.Element;
}

const GuarantorModal: FC<GuarantorModalProps> = memo(({ children }) => {
	const { guarantorIsOpen } = useAppSelector((state: RootState) => state.ModalSlice);
	const dispatch = useAppDispatch();

	return (
		<Dialog
			keepMounted
			maxWidth={'lg'}
			open={guarantorIsOpen}
			TransitionComponent={Transition}
			onClose={() => dispatch(handleCloseGuarantor())}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>Информация о поручителе</DialogTitle>
			<DialogContent
				sx={{
					padding: '0',
				}}
			>
				{children}
			</DialogContent>
		</Dialog>
	);
});

export default GuarantorModal;
