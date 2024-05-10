import { SimpleGrid } from "@mantine/core";
import CardMovie from "../CardMovie/CardMovie";
import styles from "./movies.module.css";
import ModalRating from "../ModalRating/ModalRating";
import { useDisclosure } from "@mantine/hooks";

const Movies = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const sampleDelMovies = Array.apply(null, Array(10));

	return (
		<>
			<SimpleGrid
				cols={2}
				mt={10}
			>
				{sampleDelMovies.map((movie, index) => (
					<CardMovie
						title="The Batman"
						poster=""
						year="2022"
						rating="7.8"
						genres="Action, Crime, Drama"
						key={index}
						btnClick={open}
					/>
				))}
			</SimpleGrid>

			<ModalRating
				opened={opened}
				close={close}
			/>
		</>
	);
};

export default Movies;
