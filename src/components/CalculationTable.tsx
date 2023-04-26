import { handleNext } from '../redux/slices/StepperSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Box, Button } from '@mui/material';
import { RootState } from '../redux/store';
import { Table } from '../components';
import { Payment } from '../types';
import { FC, memo } from 'react';

const CalculationTable: FC = memo(() => {
	const { calculation } = useAppSelector((state: RootState) => state.RequestSlice);
	const dispatch = useAppDispatch();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
			}}
		>
			{!!calculation.length &&
				calculation.map(({ balance, interest, payment, period, principal }: Payment, index: number) => (
					<Table
						key={index}
						head={['Баланс', 'Интерес', 'Оплата', 'Период', 'Основной']}
						body={[balance, interest, payment, `${period}`, principal]}
					/>
				))}
			<Button
				type={'submit'}
				variant="outlined"
				onClick={() => dispatch(handleNext())}
				sx={{ marginTop: '20px', width: '200px' }}
			>
				Далее
			</Button>
		</Box>
	);
});

export default CalculationTable;
