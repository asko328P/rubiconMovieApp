import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks"
import React, {useEffect, useState} from "react"
import {InterfaceMovie, InterfaceTV} from "../../../store/types/types"
import {FadeIn} from "react-slide-fade-in"
import "../../../css/pages/MovieResults/MovieList.css"
import ShowItem from "./ShowItem"

const ShowsList = () => {

	const shows = useAppSelector(state => state.shows.all_shows)

	const renderedList = shows.map((show : InterfaceTV)=>{
		return(
			<FadeIn
				key={show.id}
				from="bottom"
				positionOffset={0}
				triggerOffset={10}
				delayInMilliseconds={100}
			>
				<ShowItem id={show.id} overview={show.overview} name={show.name} poster_path={show.poster_path}/>
			</FadeIn>
		)
	})
    
	return(
		<div className="MovieList">
			{renderedList}
		</div>
	)
}
export default ShowsList