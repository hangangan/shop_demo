import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import userSlice from './features/userSlice';

const store = configureStore({
	// 合并reducer
	reducer: {
		counter: counterSlice,
		userInfo: userSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
