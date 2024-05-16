// "use client";

import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import styles from "./movieid.module.css";
import Image from "next/image";
import imgEmptyMovie from "../public/images/empty-movie-large.png";
import ImgStar from "../public/icons/icon-star.svg";
import MovieHading from "../components/MovieHeading/MovieHeading";
import type { SingleMovie } from "../types/appTypes";
import imgBlank from "../public/images/no-poster.png";
import { POSTER_BASE_URL } from "../lib/baseUrl";

const movieid = ({
	duration,
	premiere,
	budget,
	grossWorldwide,
	genres,
	poster_path,
	title,
	popularity,
	vote_average,
	release_date,
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
					src={poster_path ? poster_path : imgEmptyMovie}
					alt={title}
					width={250}
					height={352}
				/>
				<Stack className={styles.info}>
					<MovieHading
						title={title}
						year={release_date}
						rating={vote_average}
						popularity={popularity}
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
