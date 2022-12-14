import axios from "axios"

//const api_token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTA3ZDNjYTdjMWVmZDU4MWM1NGZhZTk5ODBiZDc3ZiIsInN1YiI6IjYzOTRkZmY0OWY1ZGZiMDA5MTZjZjFlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.39pU1C44o8l4UtnCEeSNbV1SMPHzjMgHMVGlmS7aDqw"
const api_token="2a07d3ca7c1efd581c54fae9980bd77f"


export const headerConfig = {

	"Authorization": `Authorization: ${api_token}`,
	"Access-Control-Allow-Origin": "localhost",
	"Content-Type": "text/plain",

}

export default () => {
	return axios.create({
		baseURL:"https://api.themoviedb.org/3/",
		headers: headerConfig
	})
}

