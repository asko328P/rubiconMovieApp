import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks"
import {InterfaceMovie} from "../../../store/types/types"
import MovieDetailCard from "./MovieDetailCard"
import "../../../css/pages/MovieDetail/MovieDetail.css"
import {useNavigate} from "react-router-dom"


const MovieDetail = () => {

	const movies = useAppSelector(state => state.movie.all_movies)
	const selectedId = useAppSelector(state => state.selectedId.selectedId)
	const dispatch = useAppDispatch()
	const navigate=useNavigate()


	const getMovieDetails = movies.map((movie : InterfaceMovie)=>{
		if(movie.id===selectedId){
			return(
				<MovieDetailCard key={movie.id} id={movie.id} overview={movie.overview} title={movie.title} poster_path={movie.poster_path} />
			)
		}

	})

	const handleBackButton = () =>{
		navigate(-1)
	}

	return(
		<div className="movieDetail">
			<button className="backButton" type="button" onClick={handleBackButton}>Go back!</button>
			{getMovieDetails}
		</div>
	)
}
export default MovieDetail