import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {InterfaceSelectedId} from "../../types/types"

const initialSelectedId : InterfaceSelectedId = {
	selectedId : 1

}
const selectedIdSlice=createSlice({
	name: "selectedId",
	initialState:initialSelectedId,
	reducers:{
		setId: (state, action: PayloadAction<number>)  => {
			state.selectedId=action.payload
		}
	}
})
export const {setId}=selectedIdSlice.actions
export default selectedIdSlice