import RequestInformation from '../components/RequestInformation';
import CalculationTable from '../components/CalculationTable';
import StepperContainer from '../components/StepperContainer';
import CreditInfoForm from './CreditInfoForm';
import GuarantorLists from './GuarantorLists';
import { Box } from '@mui/material';
import { useCallback } from 'react';
import UserForm from './UserForm';

const FormStepper = () => {
	const stepperForm = useCallback((step: number): JSX.Element => {
		const JsxElemets: JSX.Element[] = [
			<UserForm />,
			<CreditInfoForm />,
			<GuarantorLists />,
			<CalculationTable />,
			<RequestInformation />,
		];
		return JsxElemets[step];
	}, []);
	return (
		<Box
			sx={{
				display: 'flex',
				flex: '1 1 auto',
				maxWidth: '100%',
				minHeight: '100%',
				padding: '10px 10px',
				flexDirection: 'column',
				justifyContent: 'space-between',
				border: '1px solid rgba(0, 0, 0, .2)',
			}}
			className="stepper-form"
		>
			<StepperContainer renderProps={stepperForm} />
		</Box>
	);
};

export default FormStepper;
