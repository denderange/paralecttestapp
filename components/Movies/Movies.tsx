import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
import ModalRating from "../ModalRating/ModalRating";
import { useDisclosure } from "@mantine/hooks";

const Movies = ({ movies }: any) => {
	const [opened, { open, close }] = useDisclosure(false);
	// const sampleDelMovies = Array.apply(null, Array(10));

	return (
		<>
			<SimpleGrid
				cols={2}
				mt={10}
			>
				{movies.map((movie: any) => (
					<CardMovie
						title={movie.title}
						poster=""
						year={movie.release_date}
						rating={movie.vote_average}
						genres="Action, Crime, Drama"
						key={movie.id}
						btnClick={open}
						popularity={movie.popularity}
					/>
				))}
			</SimpleGrid>

			<ModalRating
				opened={opened}
				close={close}
				movieTitle="The Batman"
			/>
		</>
	);
};

export default Movies;
