import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type loadingSlice = {
	loading: boolean;
};

const initialState: loadingSlice = {
	loading: false,
};

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setLoading: (state) => {
			state.loading = true;
		},
		removeLoading: (state, actions: PayloadAction<boolean>) => {
			state.loading = actions.payload;
		},
	},
});

export const { removeLoading, setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
