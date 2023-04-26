import { createSlice } from '@reduxjs/toolkit';

interface Stepper {
	steps: string[];
	activeStep: number;
}

const initialState: Stepper = {
	activeStep: 0,
	steps: ['Информация о клиенте', 'Иформация о кредите', 'Поручителе', 'Калькуляция', 'Информация о заявке'],
};

export const stepperSlice = createSlice({
	name: 'stepper',
	initialState,
	reducers: {
		handleNext: (state) => {
			state.activeStep += 1;
		},

		handleBack: (state) => {
			state.activeStep -= 1;
		},
		handleReset: (state) => {
			state.activeStep = 0;
		},
	},
});

export const { handleBack, handleReset, handleNext } = stepperSlice.actions;

export default stepperSlice.reducer;
