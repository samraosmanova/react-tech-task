import { removeLoading, setLoading } from '../redux/slices/LoadingSlice';
import { clearGuarantorLists } from '../redux/slices/RequestSlice';
import { Box, Button, CircularProgress } from '@mui/material';
import { handleClickOpen } from '../redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { deleteUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import FormStepper from '../Forms/FormStepper';
import { FC, memo, useEffect } from 'react';
import { RootState } from '../redux/store';
import Modal from '../components/Modal';
import { Table } from '../components';

const User: FC = memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {
		cod,
		fin,
		date,
		name,
		phone,
		seria,
		surname,
		address,
		credits,
		loading,
		homenumber,
		middlename,
		registartion,
		allGuarantors,
		passportnumber,
	} = useAppSelector((state: RootState) => ({ ...state.UserSlice, ...state.RequestSlice, ...state.LoadingSlice }));

	const logOutHandler = () => {
		navigate('/');
	};
	const deleteAccauntHandler = () => {
		dispatch(deleteUser());
		navigate('/');
	};
	useEffect(() => {
		if (credits.length === 0) {
			dispatch(clearGuarantorLists());
		}
	}, [credits.length]);

	useEffect(() => {
		dispatch(setLoading());
		const id = setTimeout(() => {
			dispatch(removeLoading(false));
		}, 100);
		return () => {
			clearTimeout(id);
		};
	}, []);

	if (loading) {
		return <CircularProgress />;
	}
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
			component={'section'}
		>
			<Box
				sx={{
					width: '100%',
				}}
				component={'nav'}
			>
				<Button variant="outlined" onClick={logOutHandler}>
					Выйти
				</Button>
				<Button
					sx={{
						marginLeft: '25px',
					}}
					variant="outlined"
					onClick={deleteAccauntHandler}
				>
					Удалить аккаунт
				</Button>
				{!!credits.length && (
					<Button
						sx={{
							marginLeft: '25px',
						}}
						variant="outlined"
						onClick={() => navigate('/credits')}
					>
						Cписок кредитов {credits.length}
					</Button>
				)}

				{!!allGuarantors.length && (
					<Button
						sx={{
							marginLeft: '25px',
						}}
						variant="outlined"
						onClick={() => navigate('/guarantors')}
					>
						Cписок поручителей {allGuarantors.flat().length}
					</Button>
				)}
			</Box>
			<Box
				sx={{
					margin: '25px 0',
					width: '100%',
					flex: '1 1 auto',
				}}
				component={'div'}
			>
				<Box
					sx={{
						flex: '1 1 auto',
						margin: '25px 0',
						width: '100%',
					}}
					component={'div'}
				>
					<Box
						sx={{
							justifyContent: 'space-between',
							flexDirection: 'column',
							minHeight: '100%',
							display: 'flex',
							gap: '25px',
						}}
						component={'div'}
					>
						<Table head={['Имя', 'Фамилия', 'Отчество']} body={[name, surname, middlename]} />
						<Table
							head={['Дата рождения', 'Место проживания', 'Место регистрации']}
							body={[date, address, registartion]}
						/>
						<Table head={['Номер паспорта', 'Серия', 'Код']} body={[passportnumber, seria, cod]} />
						<Table
							head={['Фин', 'Домашний телефон', 'Мобильный телефон']}
							body={[fin, homenumber, phone]}
						/>
					</Box>
				</Box>
			</Box>
			<Modal>
				<FormStepper />
			</Modal>
			<Button
				sx={{
					fontSize: '20px',
				}}
				variant="outlined"
				onClick={() => dispatch(handleClickOpen())}
			>
				Оформить кредит
			</Button>
		</Box>
	);
});

export default User;
