import { useEffect, useState } from "react"
import Api from "../services/api"
import Card from "../components/Card"
import style from "../styles/List.module.scss"

export default function List() {
	const [list, setList] = useState([])

	useEffect(async () => {
		const response = await Api.listCharacter()
		const data = await response.json()

		setList(data.results)
	}, [])

	return (
		<section className={style.cardSection}>
			{list.map((char) => (
				<Card char={char} key={char.id} />
			))}
		</section>
	)
}
