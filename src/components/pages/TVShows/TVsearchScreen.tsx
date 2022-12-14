import React from "react"
import {useEffect} from "react"
import SearchBar from "../../commonComponents/SearchBar"


import {useAppDispatch} from "../../../hooks/redux-hooks"

import SearchSwitcher from "../../commonComponents/SearchSwitcher"
import {fetchShowsPopular} from "../../../store/features/TVshows/actions"
import ShowsList from "./ShowsList"


const TVsearchScreen = () => {

	const dispatch = useAppDispatch()



	useEffect(()=> {
		try{
			dispatch(fetchShowsPopular())
		} catch (err){
			console.log(err)
		}

	})

	return (
		<div>
			<SearchSwitcher />
			<SearchBar/>
			<ShowsList />
		</div>
	)
}

export default TVsearchScreen