import { Box, Button, FormControl, Typography } from '@mui/material';
import { UserInfoForm, userInfoSchema } from '../types/userInfo';
import { addUserInfo } from '../redux/slices/RequestSlice';
import { handleNext } from '../redux/slices/StepperSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { InputField } from '../components';
import { RootState } from '../redux/store';

const UserForm = () => {
	const { open } = useAppSelector((state: RootState) => state.ModalSlice);
	const dispatch = useAppDispatch();
	const methods = useForm<UserInfoForm>({
		mode: 'onChange',
		resolver: zodResolver(userInfoSchema),
	});

	const onSubmit = useCallback((data: UserInfoForm) => {
		methods.reset();
		dispatch(addUserInfo(data));
		dispatch(handleNext());
	}, []);

	useEffect(() => {
		if (!open) {
			return;
		}
		methods.reset();
	}, [open]);

	return (
		<FormProvider {...methods}>
			<Box
				component={'form'}
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				<FormControl sx={{ width: '800px', height: '100%', maxHeight: '100%' }} error={true} variant="standard">
					<Typography sx={{ fontSize: 20 }}>Информация о клиенте</Typography>
					<Box sx={{ width: '100%', display: 'grid', gap: '10px', marginTop: '10px' }} component={'div'}>
						<InputField label="Сфера деятельности" mask={''} name="fieldActivity" type="text" />
						<InputField
							mask={'AZE:000000000000000'}
							label="Месячный доход"
							name="monthlyIncome"
							type="text"
						/>
					</Box>
					<Typography sx={{ fontSize: 20, marginTop: '10px' }}>Опыт работы</Typography>
					<Box
						sx={{
							gap: '10px',
							width: '100%',
							display: 'grid',
							marginTop: '10px',
							gridTemplateColumns: 'repeat(2, 1fr)',
						}}
						component={'div'}
					>
						<InputField label="Год" name="year" type="text" mask={'00'} />
						<InputField label="Месяц" mask={'00'} name="month" type="text" />
					</Box>
					<Box sx={{ width: '100%', display: 'grid', gap: '10px', marginTop: '10px' }} component={'div'}>
						<InputField label="Регион" mask={''} name="region" type="text" />
						<InputField label="Бизнес адрес" mask={''} name="businessAddress" type="text" />
					</Box>
				</FormControl>

				<Button
					type={'submit'}
					variant="outlined"
					sx={{ marginTop: '20px' }}
					disabled={!methods.formState.isValid}
				>
					Далее
				</Button>
			</Box>
		</FormProvider>
	);
};

export default UserForm;
