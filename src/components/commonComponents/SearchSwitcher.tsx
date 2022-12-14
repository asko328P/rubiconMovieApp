import React, {useEffect, useState} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import "../../css/commonComponents/SearchSwitcher.css"


const SearchSwitcher = () =>  {

	const [disableMovies, setDisableMovies] = React.useState(false)

	const navigate=useNavigate()
	const location=useLocation()

	const handleToMoviesButton = () =>{
		navigate("/")
	}
	const handleToShowsButton = () =>{
		navigate("/TV")
	}


	useEffect(()=>{
		if(location.pathname=="/"){
			setDisableMovies(true)
		}
	})


	return(
		<div className="searchSwitcher-wrapper">
			<div className="searchSwitcher">
				<button disabled={disableMovies} className="switchButton" type="button" onClick={handleToMoviesButton}>Movies</button>
				<button disabled={!disableMovies} className="switchButton" type="button" onClick={handleToShowsButton}>TV shows!</button>
			</div>
		</div>
	)
}

export default SearchSwitcher