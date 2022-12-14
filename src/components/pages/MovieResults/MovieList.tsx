import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks"
import React, {useEffect, useState} from "react"
import MovieItem from "./MovieItem"
import {InterfaceMovie} from "../../../store/types/types"
import {FadeIn} from "react-slide-fade-in"
import "../../../css/pages/MovieResults/MovieList.css"

const MovieList = () => {

	const movies = useAppSelector(state => state.movie.all_movies)

	const renderedList = movies.map((movie : InterfaceMovie)=>{
		return(
			<FadeIn
				key={movie.id}
				from="bottom"
				positionOffset={0}
				triggerOffset={10}
				delayInMilliseconds={100}
			>
				<MovieItem   id={movie.id} overview={movie.overview} title={movie.title} poster_path={movie.poster_path}/>
			</FadeIn>
		)
	})
    
	return(
		<div className="MovieList-wrapper">
			<div className="MovieList">
				{renderedList}
			</div>
		</div>

	)
}
export default MovieList