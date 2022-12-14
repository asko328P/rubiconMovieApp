import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux"
import type {AppDispatch, RootState} from "../store/configureStore"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector