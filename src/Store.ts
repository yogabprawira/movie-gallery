import {configureStore} from "@reduxjs/toolkit";
import searchDataReducer from "./SearchData";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const Store = configureStore({
    reducer: {
        search: searchDataReducer,
    }
})

export default Store

type RootState = ReturnType<typeof Store.getState>
type AppDispatch = typeof Store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
