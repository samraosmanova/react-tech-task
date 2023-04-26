import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../../types';

const initialState: UserSchema = {
	cod: '',
	fin: '',
	date: '',
	name: '',
	seria: '',
	phone: '',
	surname: '',
	address: '',
	homenumber: '',
	middlename: '',
	registartion: '',
	passportnumber: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		deleteUser: (state) => {
			state = {
				fin: '',
				cod: '',
				name: '',
				date: '',
				phone: '',
				seria: '',
				address: '',
				surname: '',
				homenumber: '',
				middlename: '',
				registartion: '',
				passportnumber: '',
			};
			return state;
		},

		setUser: (state, actions: PayloadAction<UserSchema>) => {
			return {
				state,
				...actions.payload,
			};
		},
	},
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
