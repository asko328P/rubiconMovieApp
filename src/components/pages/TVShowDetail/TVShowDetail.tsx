import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks"
import {InterfaceMovie, InterfaceTV} from "../../../store/types/types"
import {useNavigate} from "react-router-dom"
import TVShowDetailCard from "./TVShowDetailCard"


const TVShowDetail = () => {

	const shows = useAppSelector(state => state.shows.all_shows)
	const selectedId = useAppSelector(state => state.selectedId.selectedId)
	const dispatch = useAppDispatch()
	const navigate=useNavigate()


	const getShowDetails = shows.map((show : InterfaceTV)=>{
		if(show.id===selectedId){
			return(
				<TVShowDetailCard key={show.id} id={show.id} overview={show.overview} name={show.name} poster_path={show.poster_path} />
			)
		}

	})

	const handleBackButton = () =>{
		navigate(-1)
	}

	return(
		<div className="movieDetail">
			<button className="backButton" type="button" onClick={handleBackButton}>Go back!</button>
			{getShowDetails}
		</div>
	)
}
export default TVShowDetail