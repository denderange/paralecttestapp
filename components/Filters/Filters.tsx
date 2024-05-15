import { Flex, Group, Select, Stack, Title, Button, Box } from "@mantine/core";
import { setInputRatingNums } from "../../lib/setInputRatingNums";
import Arrow from "../../public/icons/icon-arrow.svg";
import styles from "./filters.module.css";

interface IGenre {
	id: number;
	name: string;
}

const Filters = ({ genres }: any) => {
	const genreNames = genres.map((genre: IGenre) => genre.name);

	// console.log("genres : " + genres);

	return (
		<Box
			size={980}
			mt={40}
			mx="auto"
			p={0}
		>
			<Title
				order={1}
				mb={40}
			>
				Movies
			</Title>
			<Group
				gap={16}
				align={"end"}
				mb={24}
			>
				<Stack>
					<Select
						className={styles.filterInput}
						label="Ganres"
						placeholder="Select ganre"
						data={genreNames}
						w={283}
						rightSection={<Arrow />}
					/>
				</Stack>
				<Stack>
					<Select
						className={styles.filterInput}
						label="Release year"
						placeholder="Select release year"
						data={["React", "Angular", "Vue", "Svelte"]}
						w={283}
						rightSection={<Arrow />}
					/>
				</Stack>
				<Stack>
					{/* <Text>Ratings</Text> */}
					<Flex gap={8}>
						<Select
							className={styles.filterInput}
							label="Ratings"
							placeholder="From"
							data={setInputRatingNums()}
							w={137}
						/>
						<Select
							className={styles.filterInput}
							pt={10}
							label=" "
							placeholder="To"
							data={setInputRatingNums().reverse()}
							w={137}
						/>
					</Flex>
				</Stack>
				<Stack>
					<Button
						className="btn-text-grey"
						variant="transparent"
						p={0}
					>
						Reset filters
					</Button>
				</Stack>
			</Group>

			<Flex justify={"end"}>
				<Select
					className={styles.filterInput}
					label="Sort by"
					placeholder="Most popular"
					data={["React", "Angular", "Vue", "Svelte"]}
					w={283}
					rightSection={<Arrow />}
				/>
			</Flex>
		</Box>
	);
};

export default Filters;
