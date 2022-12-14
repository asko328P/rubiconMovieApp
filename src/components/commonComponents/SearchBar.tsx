import React, {useState} from "react"
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks"
import {setQuery} from "../../store/features/Query/querySlice"
import {fetchMoviesPopular, fetchMoviesSearch, setToInitialState} from "../../store/features/Movies/actions"
import useDebounce from "react-debounced"
import {fetchShowsPopular, fetchShowsSearch} from "../../store/features/TVshows/actions"
import {setShowsToInitialState} from "../../store/features/TVshows/TVshowsSlice"
import "../../css/commonComponents/SearchBar.css"

const SearchBar = () =>  {

	const [revertToPopular, setRevertToPopular]=useState(true)
	const queryString = useAppSelector(state => state.query.query)
	const dispatch = useAppDispatch()
	const debounce=useDebounce(1000)


	const onInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQuery(event.target.value))

		if(event.target.value.length>2){
			debounce(() => {
				dispatch(fetchMoviesSearch(event.target.value))
				dispatch(fetchShowsSearch(event.target.value))

			})
			setRevertToPopular(false)

		}else{
			if(revertToPopular==false){
				debounce(() => {
					setRevertToPopular(true)
					dispatch(setToInitialState())
					dispatch(fetchMoviesPopular())
					dispatch(setShowsToInitialState())
					dispatch(fetchShowsPopular())
				})

			}

		}


	}



	return (
		<div className="search-bar-wrap-wrap">
			<div className="search-bar-wrap">
				<div className="search-bar-holder">
					<p className="search-bar-label">Search:</p>
					<input type="text" className="search-bar" name="search-bar" value={queryString} onChange={onInputChange} />
				</div>
			</div>
		</div>


	)
}

export default SearchBar