import { configureStore } from '@reduxjs/toolkit';
import RequestSlice from './slices/RequestSlice';
import LoadingSlice from './slices/LoadingSlice';
import StepperSlice from './slices/StepperSlice';
import ModalSlice from './slices/ModalSlice';
import UserSlice from './slices/UserSlice';

export const store = configureStore({
	reducer: {
		UserSlice,
		ModalSlice,
		LoadingSlice,
		StepperSlice,
		RequestSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
