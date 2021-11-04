import {} from "react"
import {} from "react-router-dom"
import style from "./App.module.scss"
import Home from "pages/Home"

export function App() {
	return (
		<main className={style.content}>
			<Home />
		</main>
	)
}
