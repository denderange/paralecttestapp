import { Container, Stack } from "@mantine/core";
import Filters from "../components/Filters/Filters";
import EmptyMovie from "../components/EmptyMovie/EmptyMovie";
import Movies from "../components/Movies/Movies";

export default function IndexPage() {
	const findedMoviesArrayFetchedSampleEmpty = [];

	return (
		<>
			<Stack style={{ margin: "0 auto" }}>
				<Filters />
				{findedMoviesArrayFetchedSampleEmpty.length > 0 && <EmptyMovie />}
				<Movies />
			</Stack>
		</>
	);
}
