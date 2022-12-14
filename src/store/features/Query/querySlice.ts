import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {InterfaceQueryString} from "../../types/types"

const initialQueryState : InterfaceQueryString = {
	query : ""

}
const querySlice=createSlice({
	name: "query",
	initialState:initialQueryState,
	reducers:{
		setQuery: (state, action: PayloadAction<string>)  => {
			state.query=action.payload
		}
	}
})
export const {setQuery}=querySlice.actions
export default querySlice