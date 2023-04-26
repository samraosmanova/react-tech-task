import { createSlice } from '@reduxjs/toolkit';
import { Modal } from '../../types';

const initialState: Modal = {
	open: false,
	creditIsOpen: false,
	guarantorIsOpen: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		handleClose: (state) => {
			state.open = false;
		},
		handleClickOpen: (state) => {
			state.open = true;
		},

		handleCloseGuarantor: (state) => {
			state.guarantorIsOpen = false;
		},

		handlerClicOpenDelete: (state) => {
			state.creditIsOpen = true;
		},
		handlerCloseDelete: (state) => {
			state.creditIsOpen = false;
		},
		handleClickOpenGuarantor: (state) => {
			state.guarantorIsOpen = true;
		},
	},
});

export const {
	handleClose,
	handleClickOpen,
	handlerCloseDelete,
	handleCloseGuarantor,
	handlerClicOpenDelete,
	handleClickOpenGuarantor,
} = modalSlice.actions;

export default modalSlice.reducer;
