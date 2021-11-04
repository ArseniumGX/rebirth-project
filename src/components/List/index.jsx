import { useEffect, useState } from "react"
import Api from "services/api"
import Card from "components/Card"

export default function List() {
	const [list, setList] = useState([])

	useEffect(async () => {
		const response = await Api.list()
		const { results } = await response.json()
		setList(results)
	}, [])

	return true
}
