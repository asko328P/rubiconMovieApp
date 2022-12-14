
import {AnyAction, ThunkAction} from "@reduxjs/toolkit"
import {RootState} from "../../configureStore"
import {InterfaceTV} from "../../types/types"
import showsService from "../../../services/TMDB/showsService"


import {setShows, setShowsToInitialState} from "./TVshowsSlice"



export const fetchShowsPopular=():ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		if(getState().shows.all_shows.length===0){
			const response:InterfaceTV[]=await showsService.getShowsPopular()
			dispatch(setShows(response))
		}
	}
}
export const fetchShowsSearch=(queryString:string):ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {

		const response:InterfaceTV[]=await showsService.getShowsSearch(queryString)
		dispatch(setShows(response))
	}
}
export const setToInitialState=():ThunkAction<void, RootState, unknown, AnyAction>=>{
	return async (dispatch, getState) => {
		dispatch(setShowsToInitialState())
	}
}

