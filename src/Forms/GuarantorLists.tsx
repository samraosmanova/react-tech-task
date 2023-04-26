import { handleClickOpenGuarantor, handleCloseGuarantor } from '../redux/slices/ModalSlice';
import { addGuarantorLists, clearGuarantors } from '../redux/slices/RequestSlice';
import { Box, Button, FormControl, DialogActions } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import GuarantorModal from '../components/GuarantorModal';
import { handleNext } from '../redux/slices/StepperSlice';
import { FormProvider, useForm } from 'react-hook-form';
import { FC, memo, useCallback, useEffect } from 'react';
import InfoUserFormFields from './InfoUserFormFields';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema, schema } from '../types';
import { RootState } from '../redux/store';
import { Table } from '../components';

const GuarantorLists: FC = memo(() => {
	const dispatch = useAppDispatch();
	const { guarantorLists } = useAppSelector((state: RootState) => state.RequestSlice);

	const methods = useForm<UserSchema>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const onSubmit = useCallback((data: UserSchema) => {
		dispatch(addGuarantorLists(data));
		dispatch(handleCloseGuarantor());
	}, []);

	const onCancelHandler = () => {
		methods.reset();
		dispatch(handleCloseGuarantor());
	};

	const onOpenModalHandler = () => {
		methods.reset();
		dispatch(handleClickOpenGuarantor());
	};

	useEffect(() => {
		dispatch(clearGuarantors());
	}, []);

	return (
		<Box
			className="guarator-form"
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<Button
				sx={{
					width: '200px',
					marginBottom: '15px',
				}}
				type={'button'}
				variant="outlined"
				onClick={onOpenModalHandler}
			>
				Добавить поручителя
			</Button>
			<GuarantorModal>
				<>
					<FormProvider {...methods}>
						<Box
							component={'form'}
							sx={{
								gap: '20px',
								width: '100%',
								height: '100%',
								display: 'grid',
								borderRadius: '4px',
								padding: '10px 10px',
							}}
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							<InfoUserFormFields />
							<DialogActions>
								<Button variant="outlined" type="button" onClick={onCancelHandler}>
									Отменить
								</Button>
								<Button variant="outlined" type="submit">
									Добавить
								</Button>
							</DialogActions>
						</Box>
					</FormProvider>
				</>
			</GuarantorModal>
			<FormControl sx={{ width: '100%', height: '100%' }} error={true} variant="standard">
				<Box
					sx={{
						display: 'grid',
						gap: '10px',
					}}
					component={'div'}
				>
					{!!guarantorLists.length &&
						guarantorLists.map(
							(
								{
									cod,
									fin,
									name,
									date,
									phone,
									seria,
									surname,
									address,
									middlename,
									homenumber,
									registartion,
									passportnumber,
								},
								index
							) => (
								<Table
									key={index}
									head={[
										'Имя',
										'Фамилия',
										'Отчество',
										'Дата рождения',
										'Место проживания',
										'Место регистрации',
										'Номер паспорта',
										'Серия',
										'Код',
										'Фин',
										'Домашний телефон',
										'Мобильный телефон',
									]}
									body={[
										name,
										surname,
										middlename,
										date,
										address,
										registartion,
										passportnumber,
										seria,
										cod,
										fin,
										homenumber,
										phone,
									]}
								/>
							)
						)}
				</Box>
			</FormControl>

			<Button
				type={'submit'}
				variant="outlined"
				sx={{ marginTop: '20px' }}
				disabled={guarantorLists.length === 0}
				onClick={() => dispatch(handleNext())}
			>
				Далее
			</Button>
		</Box>
	);
});

export default GuarantorLists;
