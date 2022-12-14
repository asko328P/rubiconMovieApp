import api from "./api"
import axios from "axios"


//const api_token="4be2595988fdcab8c1e973d60c196a40"


export default {
	async getTrailersMovie(id:number){
		// const response = await api().get("movie/discover/movie?sort_by=revenue.desc")
		// return response.data
		const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4be2595988fdcab8c1e973d60c196a40`)
		return response.data
	},
}