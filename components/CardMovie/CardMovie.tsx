import styles from "./cardMovie.module.css";
import imgNoPoster from "../../public/images/no-poster.png";
import IconStar from "../../public/icons/icon-star.svg";
import { Box, Group, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import Image from "next/image";

type CardMovieProps = {
	title: string;
	poster: string | null;
	year: number | string;
	rating: string;
	genres: string;
	btnClick: () => void;
};

const CardMovie = ({
	title,
	poster,
	year,
	rating,
	genres,
	btnClick,
}: CardMovieProps) => {
	return (
		<Group
			className={styles.card}
			gap={0}
		>
			<Image
				className={styles.img}
				src={poster ? poster : imgNoPoster}
				alt=""
				width={119}
				height={170}
			/>

			<Stack className={styles.info}>
				<Box>
					<Title
						className={styles.title}
						order={6}
					>
						{title}
					</Title>
					<Text className={styles.year}>{year}</Text>

					<Group gap={4}>
						<IconStar className={styles.starYellow} />
						<Text className={styles.rating}>
							{rating} <span>(2.9M)</span>
						</Text>
					</Group>
				</Box>

				<Text className={styles.genres}>
					<span>Genres </span>
					{genres}
				</Text>
			</Stack>

			<Box className={styles.starCount}>
				<UnstyledButton onClick={btnClick}>
					<IconStar className={styles.starYellow} />
				</UnstyledButton>
				<span>9</span>
			</Box>
		</Group>
	);
};

export default CardMovie;
