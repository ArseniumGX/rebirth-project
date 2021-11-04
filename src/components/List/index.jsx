import { useEffect, useState } from "react"
import Api from "services/api"
import Card from "components/Card"
import style from "./styles.module.scss"

export default function List() {
	const [list, setList] = useState([])

	useEffect(async () => {
		const response = await Api.list()
		const { results } = await response.json()
		setList(results)
	}, [])

	return (
		<section className={style.cardSection}>
			{list.map((char) => (
				<Card char={char} key={char.id} />
			))}
		</section>
	)
}
