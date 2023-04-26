import { CreditForm, Credits, UserInfoForm, UserSchema } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calculatePaymentPlan } from '../../helpers';

const initialState: Credits = {
	userInfo: {
		year: '',
		month: '',
		region: '',
		fieldActivity: '',
		monthlyIncome: '',
		businessAddress: '',
	},
	creditInfo: {
		sum: '',
		period: '',
		percent: '',
		currency: '',
		businessCredit: '',
	},
	credits: [],
	calculation: [],
	allGuarantors: [],
	guarantorLists: [],
};

export const requestSlice = createSlice({
	name: 'request',
	initialState,
	reducers: {
		clearGuarantors: (state) => {
			state.guarantorLists = [];
			return state;
		},
		clearGuarantorLists: (state) => {
			state.allGuarantors = [];
			return state;
		},

		addCredits: (state) => {
			state.credits.push({
				calculation: state.calculation,
				userInfo: { ...state.userInfo },
				creditInfo: { ...state.creditInfo },
				guarantorLists: state.guarantorLists,
			});
			state.allGuarantors.push([...state.guarantorLists]);
			return state;
		},

		resetRequest: (state) => {
			state.credits = [];
			state.calculation = [];
			state.guarantorLists = [];
			state.userInfo = { ...state.userInfo };
			state.creditInfo = { ...state.creditInfo };
			return state;
		},
		addUserInfo: (state, actions: PayloadAction<UserInfoForm>) => {
			state.userInfo = actions.payload;
			return state;
		},

		addGuarantorLists: (state, actions: PayloadAction<UserSchema>) => {
			state.guarantorLists.push(actions.payload);
			return state;
		},

		addCreditInfo: (state, actions: PayloadAction<CreditForm>) => {
			state.creditInfo = actions.payload;
			const { period, percent, sum } = state.creditInfo;
			state.calculation = calculatePaymentPlan(Number(sum), Number(percent), Number(period));
			return state;
		},
		deleteCredit: (state, actions: PayloadAction<number>) => {
			state.credits = state.credits.filter((_, index) => index !== actions.payload);
			const guarantors = state.allGuarantors.filter((_, index) => index !== actions.payload);
			state.allGuarantors = [];
			state.allGuarantors.push(guarantors.flat());
			return state;
		},
	},
});

export const {
	addCredits,
	addUserInfo,
	resetRequest,
	deleteCredit,
	addCreditInfo,
	clearGuarantors,
	addGuarantorLists,
	clearGuarantorLists,
} = requestSlice.actions;

export default requestSlice.reducer;
