import styles from "./cardMovie.module.css";
import imgNoPoster from "../../public/images/no-poster.png";
import { Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import MovieHeading from "../MovieHeading/MovieHeading";
import type { MovieHadingProps } from "../../types/appTypes";
import ButtonRating from "../ButtonRating/ButtonRating";

type CardMovieProps = {
	poster: string | null;
	genres: string;
	btnClick: () => void;
};

const CardMovie = ({
	poster,
	genres,
	btnClick,
	title,
	year,
	rating,
}: CardMovieProps & MovieHadingProps) => {
	// const handleBtnStar = (
	// 	e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	// ) => {
	// 	e.preventDefault();
	// 	btnClick();
	// };

	return (
		<Link href="/movieid">
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
					<MovieHeading
						title={title}
						year={year}
						rating={rating}
					/>

					<Text className={styles.genres}>
						<span>Genres </span>
						{genres}
					</Text>
				</Stack>

				<ButtonRating
					rating={9}
					btnClick={btnClick}
				/>

				{/* <Box className={styles.starCount}>
					<HoverCard
						width={280}
						shadow="md"
					>
						<HoverCard.Target>
							<UnstyledButton onClick={(e) => handleBtnStar(e)}>
								<IconStar className={styles.star} />
							</UnstyledButton>
						</HoverCard.Target>
						<HoverCard.Dropdown className={styles.dropdown}>
							<Text size="sm">Rate this movie</Text>
						</HoverCard.Dropdown>
					</HoverCard>

					<span>9</span>
				</Box> */}
			</Group>
		</Link>
	);
};

export default CardMovie;
