import React from "react"
import {InterfaceMovie, InterfaceTV} from "../../../store/types/types"
import "../../../css/pages/MovieResults/MovieItem.css"
import {useAppDispatch} from "../../../hooks/redux-hooks"
import {setId} from "../../../store/features/selectedId/selectedIdSlice"
import {useNavigate} from "react-router-dom"

const ShowItem = (show:InterfaceTV) => {

	const navigate=useNavigate()
	const dispatch = useAppDispatch()

	const onClickHandle = () => {
		dispatch(setId(show.id))
		navigate("/TVshowDetail")
	}

	return(
		<div className="MovieItem" onClick={()=>{onClickHandle()} }>
			<img className="posterImage" src={show.poster_path?`https://image.tmdb.org/t/p/w500/${show.poster_path}`:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"}/>
			<p className="movieTitle">{show.name}</p>
		</div>
	)
}

export default ShowItem