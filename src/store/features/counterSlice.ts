import { createSlice } from '@reduxjs/toolkit';

export interface CouterState {
	value: number;
	title: string;
}

const initialState: CouterState = {
	value: 0,
	title: 'redux toolkit pre'
};

export const counterSlice = createSlice({
	name: 'couter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		}
	}
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
