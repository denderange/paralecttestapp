import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
import ModalRating from "../ModalRating/ModalRating";
import { useDisclosure } from "@mantine/hooks";
import { POSTER_BASE_URL } from "../../lib/baseUrl";

const Movies = ({ movies }: any) => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<SimpleGrid
				cols={2}
				mt={10}
				mb={24}
			>
				{movies.map((movie: any) => (
					<CardMovie
						title={movie.title}
						poster={`${POSTER_BASE_URL}/w200${movie.poster_path}`}
						year={movie.release_date}
						rating={movie.vote_average}
						genres="Action, Crime, Drama"
						key={movie.id}
						popularity={movie.popularity}
						btnClick={open}
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
