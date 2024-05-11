import { Box, Group, Title, Text } from "@mantine/core";
import styles from "./movieHeading.module.css";
import IconStar from "../../public/icons/icon-star.svg";
import { MovieHadingProps } from "../../types/appTypes";

const MovieHading = ({ title, year, rating }: MovieHadingProps) => {
	return (
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
	);
};

export default MovieHading;
