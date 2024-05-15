import { Box, Group, Title, Text } from "@mantine/core";
import styles from "./movieHeading.module.css";
import IconStar from "../../public/icons/icon-star.svg";
import { MovieHadingProps } from "../../types/appTypes";
import { formatPopularity } from "../../lib/formatPopularity";

const MovieHading = ({ title, year, rating, popularity }: MovieHadingProps) => {
	return (
		<Box>
			<Title
				className={styles.title}
				order={6}
			>
				{title}
			</Title>
			<Text className={styles.year}>{year.slice(0, 4)}</Text>

			<Group gap={4}>
				<IconStar className={styles.starYellow} />
				<Text className={styles.rating}>
					{rating.toFixed(1)} <span>({formatPopularity(popularity)})</span>
				</Text>
			</Group>
		</Box>
	);
};

export default MovieHading;
