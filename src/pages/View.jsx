import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../services/api"
import style from "../styles/View.module.scss"

function View() {
	const params = useParams()
	const [info, setInfo] = useState({
		id: null,
		name: null,
		image: null,
		episode: [] | null
	})

	const getCharInfo = async () => {
		const response = await Api.getChar(params.id)
		let { id, name, image, episode } = await response.json()

		episode.forEach((element, pos) => {
			episode[pos] = +element.replace(
				"https://rickandmortyapi.com/api/episode/",
				""
			)
		})
		await getEpisodeNames(episode).then(res => (episode = res))

		return { id, name, image, episode }
	}

	const getEpisodeNames = async arr => {
		const response = await Api.getEpisode(arr)
		const result = await response.json()

		return result
	}

	useEffect(() => {
		getCharInfo().then(res => setInfo(res))
	}, [])

	return (
		<section className={style.viewContent}>
			<div className={style.btnVoltar}>
				<Link to={`/`}>Voltar</Link>
			</div>
			<div className={style.viewImage}>
				<img src={info.image} alt={`${info.name} image`} />
			</div>
			<span>
				<p>{info.name}</p>
			</span>
			<h4>Aparições</h4>
			<ul>
				{Array.isArray(info.episode) ? (
					info.episode.map((ep, pos) => (
						<li key={pos}>{`${ep.episode} - ${ep.name}`}</li>
					))
				) : (
					<li
						key={info.episode.id}
					>{`${info.episode.episode} - ${info.episode.name}`}</li>
				)}
			</ul>
		</section>
	)
}

export { View }
