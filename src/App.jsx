import {} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import style from "./styles/App.module.scss"
import { Home } from "./pages/Home"
import { View } from "./pages/View"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export function App() {
	return (
		<BrowserRouter>
			<main className={style.content}>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path={"/view/:id"} component={View} />
				</Switch>
				<Footer />
			</main>
		</BrowserRouter>
	)
}
