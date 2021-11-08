import {} from "react"
import { Link } from "react-router-dom"
import style from "../styles/Card.module.scss"

export default function Card({ char }) {
	return (
		<div className={style.card} id={char.id}>
			<div className={style.charImage}>
				<img src={char.image} alt={`${char.name} image`} />
			</div>
			<div className={style.charStatus}>
				<p>{char.status}</p>
			</div>
			<div className={style.charName}>
				<p>
					<strong>{char.name}</strong>
				</p>
			</div>
			<div className={style.btnView}>
				<Link to={`/view/${char.id}`}>Ver</Link>
			</div>
		</div>
	)
}
