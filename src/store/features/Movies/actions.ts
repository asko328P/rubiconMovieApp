import movieSlice, {setMoviesToInitialState} from "./movieSlice"
import {AnyAction, ThunkAction} from "@reduxjs/toolkit"
import {RootState} from "../../configureStore"
import {InterfaceMovie} from "../../types/types"
import movieService from "../../../services/TMDB/movieService"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks"


import {setMovies} from "./movieSlice"



export const fetchMoviesPopular=():ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {
		if(getState().movie.all_movies.length===0){
			const response:InterfaceMovie[]=await movieService.getMoviesPopular()
			dispatch(setMovies(response))
		}
	}
}
export const fetchMoviesSearch=(queryString:string):ThunkAction<void, RootState, unknown, AnyAction> => {
	return async (dispatch, getState) => {

		const response:InterfaceMovie[]=await movieService.getMoviesSearch(queryString)
		dispatch(setMovies(response))
	}
}
export const setToInitialState=():ThunkAction<void, RootState, unknown, AnyAction>=>{
	return async (dispatch, getState) => {
		dispatch(setMoviesToInitialState())
	}
}

