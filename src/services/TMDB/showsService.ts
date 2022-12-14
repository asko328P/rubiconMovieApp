import api from "./api"
import axios from "axios"


//const api_token="4be2595988fdcab8c1e973d60c196a40"


export default {
	async getShowsPopular(){
		// const response = await api().get("movie/discover/movie?sort_by=revenue.desc")
		// return response.data
		const response = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=4be2595988fdcab8c1e973d60c196a40")
		return response.data.results
	},
	async getShowsSearch(queryString:string){
		const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=4be2595988fdcab8c1e973d60c196a40&query=${queryString}`)
		return response.data.results
	}
}