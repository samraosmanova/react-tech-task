import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { FC, Fragment, SyntheticEvent, memo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RootState } from '../redux/store';
import { Table } from '../components';
import { Payment } from '../types';
import { useAppSelector } from '../hooks';

const RequestInformation: FC = memo(() => {
	const {
		calculation,
		creditInfo: { businessCredit, currency, percent, period, sum },
		guarantorLists,
		userInfo: { businessAddress, fieldActivity, month, monthlyIncome, region, year },
	} = useAppSelector((state: RootState) => state.RequestSlice);
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
			<Accordion
				sx={{
					width: '100%',
				}}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Информация о клиенте</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Table
						body={[businessAddress, fieldActivity, month, monthlyIncome, region, year]}
						head={['Бизнес адрес', 'Сфера деятельности', 'Месяц', 'Месячный доход', 'Регион', 'Год']}
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: '100%',
				}}
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Иформация о кредите</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Table
						body={[businessCredit, currency, percent, period, sum]}
						head={['Причина оформления бизнес кредита', 'Валюта', 'Процент', 'Период', 'Сумма']}
					/>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: '100%',
				}}
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Поручители</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{!!guarantorLists.length &&
						guarantorLists.map(
							(
								{
									address,
									cod,
									date,
									fin,
									homenumber,
									middlename,
									name,
									passportnumber,
									phone,
									registartion,
									seria,
									surname,
								},
								index
							) => (
								<Fragment key={index}>
									<Table
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
								</Fragment>
							)
						)}
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: '100%',
				}}
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Калькуляция</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{!!calculation.length &&
						calculation.map(({ balance, interest, payment, period, principal }: Payment, index: number) => (
							<Table
								key={index}
								head={['Баланс', 'Интерес', 'Оплата', 'Период', 'Основной']}
								body={[balance, interest, payment, `${period}`, principal]}
							/>
						))}
				</AccordionDetails>
			</Accordion>
		</Box>
	);
});

export default RequestInformation;
