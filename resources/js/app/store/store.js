import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/app-slice";
import registerSlice from "../redux/register-slice";
import personalInfomationSlice from "../redux/personal-information-slice";
import userSlice from "../redux/user-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        register: registerSlice,
        users: userSlice,
        personal_information: personalInfomationSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
