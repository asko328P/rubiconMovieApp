import React from "react"
import {InterfaceMovie} from "../../../store/types/types"
import "../../../css/pages/MovieResults/MovieItem.css"
import {useAppDispatch} from "../../../hooks/redux-hooks"
import {setId} from "../../../store/features/selectedId/selectedIdSlice"
import {useNavigate} from "react-router-dom"

const MovieItem = (movie:InterfaceMovie) => {
	const navigate=useNavigate()
	const dispatch = useAppDispatch()

	const onClickHandle = () => {
		dispatch(setId(movie.id))
		navigate("/movieDetail")
	}

	return(
		<div className="MovieItem" onClick={()=>{onClickHandle()} }>
			<img className="posterImage" src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}/>
			<div className="TitleHolder">
				<p className="movieTitle">{movie.title}</p>
			</div>

		</div>
	)
}

export default MovieItem