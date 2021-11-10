import { Fragment, useRef } from "react"
import { useInfiniteQuery } from "react-query"
import Api from "../services/api"
import { useIntersectionObserver } from "../hook/charIntersectionObserver"
import Card from "../components/Card"
import style from "../styles/List.module.scss"
import { useState } from "react/cjs/react.development"

function List() {
	const [gender, setGender] = useState("Female")
	const handleGender = () =>
		gender === "Female"
			? setGender("Male")
			: gender === "Male"
			? setGender("Genderless")
			: gender === "Genderless"
			? setGender("unknown")
			: setGender("Female")

	const loadMoreButtonRef = useRef()

	const loadCharacters = async ({ pageParam = 0 }) => {
		const response = await Api.listCharacter(pageParam)
		const data = await response.json()

		return data
	}

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = useInfiniteQuery("character", loadCharacters, {
		getNextPageParam: (lastPage, pages) =>
			+lastPage.info.next.replace(
				"https://rickandmortyapi.com/api/character?page=",
				""
			)
	})

	useIntersectionObserver({
		target: loadMoreButtonRef,
		onIntersect: fetchNextPage,
		enabled: hasNextPage
	})

	return status === "loading" ? (
		<p>Carregando...</p>
	) : status === "error" ? (
		<p>Error: {error.message}</p>
	) : (
		<>
			<section className={style.cardSection}>
				<button onClick={handleGender}>Genero {gender}</button>
				{data.pages.map((group, i) => (
					<Fragment key={i}>
						{group.results
							.filter(char => char.gender === gender)
							.map(char => (
								<Card char={char} key={char.id} />
							))}
						{/* {group.results.map(char => (
							<Card char={char} key={char.id} />
						))} */}
					</Fragment>
				))}
			</section>
			<div className={style.btnLoad}>
				<button
					ref={loadMoreButtonRef}
					onClick={() => fetchNextPage()}
					disabled={!hasNextPage || isFetchingNextPage}
				>
					{isFetchingNextPage
						? "Carregando mais..."
						: hasNextPage
						? "Carregar mais"
						: "Fim!"}
				</button>
			</div>
			<div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
		</>
	)
}

export { List }
