import { Box, HoverCard, Stack, Text, UnstyledButton } from "@mantine/core";
import styles from "./buttonRating.module.css";
import IconStar from "../../public/icons/icon-star.svg";

type ButtonRatingProps = {
	rating: number;
	btnClick: () => void;
};

const ButtonRating = ({ rating, btnClick }: ButtonRatingProps) => {
	return (
		<Box className={styles.starCount}>
			<HoverCard
				width={280}
				shadow="md"
			>
				<HoverCard.Target>
					<UnstyledButton onClick={btnClick}>
						<IconStar className={styles.star} />
					</UnstyledButton>
				</HoverCard.Target>
				<HoverCard.Dropdown className={styles.dropdown}>
					<Text size="sm">Rate this movie</Text>
				</HoverCard.Dropdown>
			</HoverCard>

			<span>{rating}</span>
		</Box>
	);
};

export default ButtonRating;
