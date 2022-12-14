export interface InterfaceMovie {
    id: number
    title: string
    overview: string
    poster_path: string
}

export interface MoviesArray {
    all_movies: InterfaceMovie[],
}

export interface InterfaceTV {
    id: number
    name: string
    overview: string
    poster_path: string
}

export interface TVarray {
    all_shows: InterfaceTV[],
}

export interface InterfaceQueryString {
    query:string
}
export interface InterfaceSelectedId {
    selectedId:number
}

type trailerResult = {
    site: string,
    key: string,
}
export interface InterfaceTrailer {
    id: number,
    results: trailerResult[],
}

export interface InterfaceYoutubeProp {
    ytkey: string
}