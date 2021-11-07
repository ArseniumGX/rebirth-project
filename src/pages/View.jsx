import { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import Api from "../services/api"

function View(props) {
	const [info, setInfo] = useState({})

	useEffect(async () => {
		const response = await Api.getChar(props.match.params.id)
		const result = await response.json()

		console.log(props.match.params.id)

		setInfo(result)
	}, [])

	return (
		<section className='viewContent'>
			<div className='btnVoltar'>
				<Link to={`/#${info.id}`}>Voltar</Link>
			</div>
			<div className='viewImage'>
				<img src={info.image} alt={`${info.name} image`} />
			</div>
			<span>
				<p>{info.name}</p>
			</span>
			<h4>Appears</h4>
			{/* <ul>
				{info.episode.map((ep) => (
					<li>{ep}</li>
				))}
			</ul> */}
		</section>
	)
}

export { View }
