import {} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import style from "./App.module.scss"
import { Home } from "./pages/Home"
import { View } from "./pages/View"

export function App() {
	return (
		<BrowserRouter>
			<main className={style.content}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path={`/view/:id`} component={View} />
				</Switch>
			</main>
		</BrowserRouter>
	)
}
