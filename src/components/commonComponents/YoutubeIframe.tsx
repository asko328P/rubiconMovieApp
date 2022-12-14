import React, {useEffect} from "react"
import {InterfaceYoutubeProp} from "../../store/types/types"

const YoutubeIframe:React.FC<InterfaceYoutubeProp> = ({ytkey})=> {

	return(
		<div>
			<iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ytkey} title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
		</div>

	)
}
export default YoutubeIframe