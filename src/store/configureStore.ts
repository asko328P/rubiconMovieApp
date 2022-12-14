import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./features/Movies/movieSlice"
import querySlice from "./features/Query/querySlice"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./reducers.js"

const persistConfig = {
	key: "root",
	version: 1,
	storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
	reducer: persistedReducer,
})

//export type RootState=ReturnType<typeof store.getState>
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store
