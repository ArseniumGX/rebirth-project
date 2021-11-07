import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../services/api"

function View() {
	const { id } = useParams()

	// Construção da estrutura esperada em list para não fica reclamado la em
	// baixo que as propriedades não existem
	const [info, setInfo] = useState({
		id: 0,
		name: "",
		image: "",
		episode: []
	})

	const [load, setLoad] = useState(false)

	const getNameEpisode = async (...id) => {
		const response = await Api.getEpisode(id)
		const { results } = await response.json()

		const name = { results }

		if (!name) return

		setInfo({ ...info, episode: name })
	}

	useEffect(() => {
		setInfo(async () => {
			const response = await Api.getChar(id)
			const result = await response.json()

			info.id = result.id
			info.name = result.name
			info.image = result.image
			info.episode = result.episode
			console.log(result)

			// info = {
			// 	id: result.id,
			// 	name: result.name,
			// 	image: result.image,
			// 	episode: result.episode
			// }
		})
		setLoad(true)
	}, [])

	// useEffect(() => {
	// 	info.episode.forEach((element, pos) => {
	// 		if (!info.episode) return

	// 		info.episode[pos] = +element.replace(
	// 			"https://rickandmortyapi.com/api/episode/",
	// 			""
	// 		)
	// 	})
	// 	// console.log(info.episode)
	// 	getNameEpisode(info.episode)
	// }, [load])

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
			<h4>Aparições</h4>
			<ul>
				{/* {info.episode.map(async (ep, pos) => {
					return <li key={pos}>{ep}</li>
				})} */}
			</ul>
		</section>
	)
}

export { View }
