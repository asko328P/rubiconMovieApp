import {InterfaceMovie, InterfaceTrailer} from "../../../store/types/types"
import {useNavigate} from "react-router-dom"
import {useAppDispatch} from "../../../hooks/redux-hooks"
import "../../../css/pages/MovieDetail/MovieDetailCard.css"
import React, {useEffect, useState} from "react"
import trailerService from "../../../services/TMDB/trailerService"
import YoutubeIframe from "../../commonComponents/YoutubeIframe"

const MovieDetailCard = (movie:InterfaceMovie) => {

	const [id,setId]=useState(0)
	const [videoKey, setVideoKey] = useState("")


	const getTrailerData = async () => {
		const trailers:InterfaceTrailer = await trailerService.getTrailersMovie(movie.id)
		if(trailers.id){
			setVideoKey(trailers.results[0].key)
		}

	}

	useEffect(()=>{
		getTrailerData()
	}, [])



	return(

		<div className="movieDetailCard">
			{videoKey?<YoutubeIframe ytkey={videoKey} />: <img className="movieDetailCardPoster" src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}/>}

			<p className="movieDetailCardTitle">{movie.title}</p>
			<p className="movieDetailCardOverview">{movie.overview}</p>
		</div>
	)
}

export default MovieDetailCard