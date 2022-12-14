import React from "react"
import {useEffect} from "react"
import SearchBar from "../../commonComponents/SearchBar"


import {useAppDispatch} from "../../../hooks/redux-hooks"
import {useAppSelector} from "../../../hooks/redux-hooks"
import {fetchMoviesPopular} from "../../../store/features/Movies/actions"
import MovieList from "./MovieList"
import SearchSwitcher from "../../commonComponents/SearchSwitcher"


const SearchScreen = () => {

	const dispatch = useAppDispatch()



	useEffect(()=> {
		try{
			dispatch(fetchMoviesPopular())
		} catch (err){
			console.log(err)
		}

	})

	return (
		<div>
			<SearchSwitcher />
			<SearchBar/>
			<MovieList />
		</div>
	)
}

export default SearchScreen