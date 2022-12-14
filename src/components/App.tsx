import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "../css/App.css"
import SearchScreen from "./pages/MovieResults/SearchScreen"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import TVsearchScreen from "./pages/TVShows/TVsearchScreen"
import TVShowDetail from "./pages/TVShowDetail/TVShowDetail"

const App = () => {
	return(
		<Router>
			<Routes>
				<Route path="/" element={<SearchScreen />} />
				<Route path="/TV" element={<TVsearchScreen />} />
				<Route path="/movieDetail" element={<MovieDetail />} />
				<Route path="/TVshowDetail" element={<TVShowDetail />} />
			</Routes>
		</Router>
	)
}

export default App
