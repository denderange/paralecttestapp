import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
import { POSTER_BASE_URL } from "../../lib/baseUrl";
import type { SingleMovie } from "../../types/appTypes";

const Movies = ({ movies, genres }: any) => {
	return (
		<SimpleGrid
			cols={2}
			mt={10}
			mb={24}
		>
			{movies.map((movie: SingleMovie) => (
				<CardMovie
					title={movie.title}
					poster={`${POSTER_BASE_URL}/w200${movie.poster_path}`}
					year={movie.release_date}
					rating={movie.vote_average}
					genre_ids={movie.genre_ids}
					genres={genres}
					key={movie.id}
					popularity={movie.popularity}
					overview={movie.overview}
				/>
			))}
		</SimpleGrid>
	);
};

export default Movies;
