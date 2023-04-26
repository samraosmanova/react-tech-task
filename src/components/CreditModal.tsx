import { handlerCloseDelete } from '../redux/slices/ModalSlice';
import { deleteCredit } from '../redux/slices/RequestSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, IconButton, styled } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { zodResolver } from '@hookform/resolvers/zod';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { FC, memo, useCallback } from 'react';
import { RootState } from '../redux/store';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import InputField from './InputField';
import * as z from 'zod';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

interface ModalProps {
	index: number;
}

export const schema = z.object({
	cancle: z
		.string()
		.min(16, { message: 'Поле должно быть заполнена' })
		.max(56, { message: 'Поле должно быть заполнена' }),
});
export type CancleCredit = z.infer<typeof schema>;

const CreditModal: FC<ModalProps> = memo(({ index }) => {
	const { creditIsOpen } = useAppSelector((state: RootState) => state.ModalSlice);
	const dispatch = useAppDispatch();

	const methods = useForm<CancleCredit>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const onSubmit = useCallback((data: CancleCredit) => {
		dispatch(deleteCredit(index));
		methods.reset();
		dispatch(handlerCloseDelete());
	}, []);

	const onCloseHandler = () => {
		methods.reset();
		dispatch(handlerCloseDelete());
	};

	return (
		<BootstrapDialog onClose={onCloseHandler} aria-labelledby="customized-dialog-title" open={creditIsOpen}>
			<DialogTitle sx={{ m: 0, p: 2 }}>
				<IconButton
					type="button"
					aria-label="close"
					onClick={onCloseHandler}
					sx={{
						top: 8,
						right: 8,
						position: 'absolute',
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				Причина отказа ?
			</DialogTitle>
			<FormProvider {...methods}>
				<Box component={'form'} onSubmit={methods.handleSubmit(onSubmit)}>
					<DialogContent
						sx={{
							width: '500px',
							display: 'grid',
						}}
						dividers
					>
						<InputField label="Описание" mask={''} name="cancle" type="text" />
					</DialogContent>
					<DialogActions>
						<Button disabled={!methods.formState.isValid} autoFocus variant="outlined" type="submit">
							Удалить оформленный кредит
						</Button>
					</DialogActions>
				</Box>
			</FormProvider>
		</BootstrapDialog>
	);
});

export default CreditModal;
