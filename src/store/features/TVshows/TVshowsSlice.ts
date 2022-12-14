import {InterfaceTV, TVarray} from "../../types/types"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialShowsState: TVarray={
	all_shows:[],
}
const TVshowsSlice=createSlice({
	name: "shows",
	initialState:initialShowsState,
	reducers:{
		setShows(state,action:PayloadAction<InterfaceTV[]>){
			state.all_shows=action.payload
		},
		setShowsToInitialState:(state)=>{
			state.all_shows=[]
		}
	}
})
export const {setShows,setShowsToInitialState} = TVshowsSlice.actions
export default TVshowsSlice