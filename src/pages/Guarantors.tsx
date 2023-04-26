import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { RootState } from '../redux/store';
import { useAppSelector } from '../hooks';
import { Table } from '../components';
import { FC, memo } from 'react';

const Guarantors: FC = memo(() => {
	const { allGuarantors } = useAppSelector((state: RootState) => state.RequestSlice);
	const navigate = useNavigate();
	return (
		<Box sx={{}} component={'section'}>
			<Button
				onClick={() => navigate(-1)}
				sx={{
					marginBottom: '20px',
				}}
				variant="outlined"
			>
				Назад
			</Button>
			<Box
				sx={{
					display: 'grid',
					gap: '10px',
				}}
				component={'div'}
			>
				{!!allGuarantors.length &&
					allGuarantors.map((lists) => {
						return lists.map(
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
						);
					})}
			</Box>
		</Box>
	);
});

export default Guarantors;
