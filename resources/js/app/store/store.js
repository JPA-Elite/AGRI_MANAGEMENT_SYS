
import { configureStore } from '@reduxjs/toolkit';
import appSlice  from '../redux/app-slice';
import  registerSlice from '../redux/register-slice';

const store = configureStore({
    reducer: {
        app:appSlice,
        register:registerSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;