import {InterfaceMovie, MoviesArray} from "../../types/types"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialMovieState: MoviesArray={
	all_movies:[],
}
const movieSlice=createSlice({
	name: "movie",
	initialState:initialMovieState,
	reducers:{
		setMovies(state,action:PayloadAction<InterfaceMovie[]>){
			state.all_movies=action.payload
		},
		setMoviesToInitialState:(state)=>{
			state.all_movies=[]
		}
	}
})
export const {setMovies,setMoviesToInitialState} = movieSlice.actions
export default movieSlice