import {
	Box,
	Container,
	Grid,
	Group,
	Stack,
	Text,
	UnstyledButton,
} from "@mantine/core";
import styles from "./movieid.module.css";
import Image from "next/image";
import imgEmptyMovie from "../public/images/empty-movie-large.png";
import ImgStar from "../public/icons/icon-star.svg";
import MovieHading from "../components/MovieHeading/MovieHeading";
import type { SingleMovie } from "../types/appTypes";
import imgBlank from "../public/images/no-poster.png";

const movieid = ({
	duration,
	premiere,
	budget,
	grossWorldwide,
	genres,
}: SingleMovie) => {
	const production = [
		{ image: imgBlank, filmStudio: "Castle Rock Entertainment" },
		{ image: imgBlank, filmStudio: "Darkwoods Productions" },
		{ image: imgBlank, filmStudio: "Warner Bros. Pictures" },
	];
	return (
		<Stack className={styles.container}>
			<Box mb={20}>breadcrumbs</Box>

			{/* movie description top section  */}
			<Group className={styles.section}>
				<Image
					className={styles.poster}
					src={imgEmptyMovie}
					alt="poster"
				/>
				<Stack className={styles.info}>
					<MovieHading
						title="Movie Title"
						year="1995"
						rating="9"
					/>
					<Group className={styles.details}>
						<Box className={styles.detailsCred}>
							<Text>Duration</Text>
							<Text>Premiere</Text>
							<Text>Budget</Text>
							<Text>Gross worldwide</Text>
							<Text>Genres</Text>
						</Box>
						<Box className={styles.detailsCredInfo}>
							<Text>{duration || "1efes"}</Text>
							<Text>{premiere || "2efes"}</Text>
							<Text>${budget || "3efes"}</Text>
							<Text>${grossWorldwide || "4efes"}</Text>
							<Text>{genres || "5efes"}</Text>
						</Box>
					</Group>
				</Stack>

				<Box className={styles.rating}>
					<UnstyledButton>
						<ImgStar />
					</UnstyledButton>
				</Box>
			</Group>

			{/* movie trailer section  */}
			<Group className={styles.section}>
				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Trailer</Text>
					<Box className={styles.trailerBox}></Box>
				</Box>

				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Description</Text>
					<Text className={styles.textDescription}>
						Dan Browns controversial best-selling novel about a powerful secret
						thats been kept under wraps for thousands of years comes to the
						screen in this suspense thriller from Director Ron Howard.
					</Text>
				</Box>

				<Box className={styles.sectionBox}>
					<Text className={styles.titleSectionText}>Production</Text>
					<Stack gap={12}>
						{production.map((studio) => (
							<Group
								key={studio.filmStudio}
								gap={0}
							>
								<Image
									className={styles.productionImg}
									src={studio.image}
									alt={studio.filmStudio}
								/>
								<Text className={styles.productionText}>
									{studio.filmStudio}
								</Text>
							</Group>
						))}
					</Stack>
				</Box>
			</Group>
		</Stack>
	);
};

export default movieid;
