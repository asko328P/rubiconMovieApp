import { combineReducers } from "redux"
import movieSlice from "./features/Movies/movieSlice"
import querySlice from "./features/Query/querySlice"
import selectedIdSlice from "./features/selectedId/selectedIdSlice"
import TVshowsSlice from "./features/TVshows/TVshowsSlice"

const rootReducer = combineReducers({
	movie:movieSlice.reducer,
	shows:TVshowsSlice.reducer,
	query:querySlice.reducer,
	selectedId:selectedIdSlice.reducer,
})

export default rootReducer