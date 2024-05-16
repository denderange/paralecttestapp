import { Container, Stack } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import EmptyMovie from "../components/EmptyMovie/EmptyMovie";
import Movies from "../components/Movies/Movies";
import { getGenres, getMovies } from "../lib/requests/moviesRequests";

export default function IndexPage({ genres, results }: any) {
	const findedMoviesArrayFetchedSampleEmpty = [];

	return (
		<>
			<Stack style={{ margin: "0 auto" }}>
				<Filters genres={genres} />
				{findedMoviesArrayFetchedSampleEmpty.length !== 0 ? (
					<EmptyMovie />
				) : (
					<Movies
						movies={results}
						genres={genres}
					/>
				)}
			</Stack>
		</>
	);
}

export async function getStaticProps() {
	const { genres } = await getGenres();
	const { results } = await getMovies();

	return {
		props: {
			genres,
			results,
		},
	};
}
