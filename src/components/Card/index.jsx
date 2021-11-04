import {} from "react"
import style from "./styles.module.scss"

export default function Card(props) {
	return (
		<div className={style.card}>
			<div className={style.charImage}>
				<img src={props.char.image} alt={`${props.char.name} image`} />
			</div>
			<div className={style.charStatus}>
				<p>{props.char.status}</p>
			</div>
			<div className={style.charName}>
				<p>
					<strong>{props.char.name}</strong>
				</p>
			</div>
		</div>
	)
}
