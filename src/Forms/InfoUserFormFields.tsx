import { onFormatHandler, onParseHandler } from '../helpers';
import { InputField } from '../components';
import { Box } from '@mui/material';
import { FC, memo } from 'react';

const InfoUserFormFields: FC = memo(() => {
	return (
		<>
			<InputField label="Место проживания" mask={''} name="address" type="text" />
			<Box
				sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}
				component={'div'}
			>
				<InputField label="Имя" mask={''} name="name" type="text" />
				<InputField label="Фамилия" mask={''} name="surname" type="text" />
				<InputField label="Отчество" mask={''} name="middlename" type="text" />
				<InputField
					name="date"
					type="text"
					mask={Date}
					pattern="Y-`m-`d"
					label="Дата рождения"
					parse={onParseHandler}
					format={onFormatHandler}
				/>
			</Box>
			<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }} component={'div'}>
				<InputField label="Место регистрации" mask={''} name="registartion" type="text" />
				<InputField label="Фин" mask={''} name="fin" type="text" />
				<InputField label="Номер паспорта" mask={''} name="passportnumber" type="text" />
			</Box>
			<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }} component={'div'}>
				<InputField label="Серия" mask={''} name="seria" type="text" />
				<InputField label="Код" mask={''} name="cod" type="text" />
			</Box>
			<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }} component={'div'}>
				<InputField label="Домашний" mask={'+{994}(12)000-00-00'} name="homenumber" type="text" />
				<InputField label="Мобильный" mask={'+{994}(00)000-00-00'} name="phone" type="text" />
			</Box>
		</>
	);
});

export default InfoUserFormFields;
