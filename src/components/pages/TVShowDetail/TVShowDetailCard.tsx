import {InterfaceMovie, InterfaceTV} from "../../../store/types/types"
import {useNavigate} from "react-router-dom"
import {useAppDispatch} from "../../../hooks/redux-hooks"
import {setId} from "../../../store/features/selectedId/selectedIdSlice"
import React from "react"

const TVShowDetailCard = (show:InterfaceTV) => {

	return(

		<div className="movieDetailCard">
			<img className="movieDetailCardPoster" src={show.poster_path?`https://image.tmdb.org/t/p/w500/${show.poster_path}`:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}/>
			<p className="movieDetailCardTitle">{show.name}</p>
			<p className="movieDetailCardOverview">{show.overview}</p>
		</div>
	)
}

export default TVShowDetailCard