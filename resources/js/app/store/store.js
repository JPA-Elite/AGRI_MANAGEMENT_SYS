import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/app-slice";
import registerSlice from "../redux/register-slice";
import personalInfomationSlice from "../redux/personal-information-slice";
import userSlice from "../redux/user-slice";
import organizationSlice  from "../redux/organization-slice";
import lguProfileSlice  from "../redux/lgu-profile-slice";
import  cashAssistanceSlice  from "../redux/cash-assistance-slice";
import subsidyReducer from "../redux/subsidy-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        register: registerSlice,
        users: userSlice,
        organization: organizationSlice,
        personal_information: personalInfomationSlice,
        lgu_profile:lguProfileSlice,
        cash_assistance:cashAssistanceSlice,
        subsidy: subsidyReducer,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
