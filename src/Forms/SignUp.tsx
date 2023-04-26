import { FormProvider, useForm } from 'react-hook-form';
import InfoUserFormFields from './InfoUserFormFields';
import { zodResolver } from '@hookform/resolvers/zod';
import { setUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { UserSchema, schema } from '../types';
import { Box, Button } from '@mui/material';
import { useAppDispatch } from '../hooks';
import { FC, memo } from 'react';

const SignUp: FC = memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const methods = useForm<UserSchema>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: UserSchema) => {
		dispatch(setUser(data));
		navigate(`/:${data.fin}`);
		methods.reset();
	};
	return (
		<Box
			sx={{
				gap: '20px',
				width: '100%',
				height: '100%',
				display: 'grid',
				maxWidth: '800px',
				borderRadius: '4px',
				padding: '10px 10px',
				border: '1px solid rgba(0, 0, 0, .2)',
			}}
			component={'section'}
		>
			<FormProvider {...methods}>
				<Box
					sx={{
						gap: '20px',
						width: '100%',
						height: '100%',
						display: 'grid',
						borderRadius: '4px',
						padding: '10px 10px',
					}}
					component={'form'}
					onSubmit={methods.handleSubmit(onSubmit)}
				>
					<InfoUserFormFields />
					<Button
						type="submit"
						variant="outlined"
						disabled={!methods.formState.isValid}
						sx={{ height: '50px', fontSize: '18px' }}
					>
						Регистрация
					</Button>
					<Button
						type="submit"
						variant="outlined"
						onClick={() => navigate('/')}
						sx={{ height: '50px', fontSize: '18px' }}
					>
						Войти
					</Button>
				</Box>
			</FormProvider>
		</Box>
	);
});

export default SignUp;
