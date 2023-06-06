import { createSlice } from '@reduxjs/toolkit';
import { UserItem } from '../../assets/interface';

const initialState: UserItem = {
	name: '',
	isLogin: false
};

export const userSlice = createSlice({
	name: 'couter',
	initialState,
	reducers: {
		loginAction: (state, userInfo) => {
			state = {
				...state,
				...userInfo,
				isLogin: true
			};
		},
		logoutAction: (state) => {
			state = initialState;
		}
	}
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
