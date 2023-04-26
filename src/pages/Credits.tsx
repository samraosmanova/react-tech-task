import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { handlerClicOpenDelete } from '../redux/slices/ModalSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { FC, memo, useEffect } from 'react';
import { CreditModal } from '../components';
import { RootState } from '../redux/store';
import { Request } from '../types';

const Credits: FC = memo(() => {
	const { credits, name, surname, middlename } = useAppSelector((state: RootState) => ({
		...state.RequestSlice,
		...state.UserSlice,
	}));
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (credits.length !== 0) {
			return;
		}
		navigate(-1);
	}, [credits.length]);
	return (
		<Box sx={{ width: '100%' }} component={'section'}>
			<Button
				sx={{
					marginBottom: '20px',
				}}
				variant="outlined"
				onClick={() => navigate(-1)}
			>
				Назад
			</Button>
			<Box
				sx={{
					display: 'flex',
					gap: '10px',
				}}
				component={'div'}
			>
				{!!credits.length &&
					credits.map((credit: Request, index: number) => (
						<Card
							sx={{
								width: '250px',
							}}
							key={index}
							variant="outlined"
						>
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									{name} {surname} {middlename}
								</Typography>

								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									{credit.userInfo.fieldActivity} - {credit.userInfo.businessAddress}
								</Typography>
								<Typography variant="body2">
									Для: {`${credit.creditInfo.businessCredit}.`}
									<br />
									{`C сроком погашения на ${credit.creditInfo.period} месяцев`}
								</Typography>
								<CreditModal index={index} />
							</CardContent>
							<CardActions>
								<Button
									size="small"
									type="button"
									variant="outlined"
									onClick={() => dispatch(handlerClicOpenDelete())}
								>
									Отменить
								</Button>
							</CardActions>
						</Card>
					))}
			</Box>
		</Box>
	);
});

export default Credits;
