import { List } from "../components/List"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<List />
		</QueryClientProvider>
	)
}

export { Home }
