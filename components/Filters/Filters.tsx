import {
	Container,
	Flex,
	Group,
	Select,
	Stack,
	Title,
	Text,
	Button,
	Box,
} from "@mantine/core";
import IconArrow from "../../public/icons/icon-arrow.svg";
import Image from "next/image";
import styles from "./filters.module.css";

const Filters = () => {
	const iconArrow = (
		<Image
			src={IconArrow}
			alt=""
		/>
	);

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
						label="Genres"
						placeholder="Select genre"
						data={["React", "Angular", "Vue", "Svelte"]}
						w={283}
						rightSection={iconArrow}
					/>
				</Stack>
				<Stack>
					<Select
						className={styles.filterInput}
						label="Release year"
						placeholder="Select release year"
						data={["React", "Angular", "Vue", "Svelte"]}
						w={283}
						rightSection={iconArrow}
					/>
				</Stack>
				<Stack>
					{/* <Text>Ratings</Text> */}
					<Flex gap={8}>
						<Select
							className={styles.filterInput}
							label="Ratings"
							placeholder="From"
							data={["React", "Angular", "Vue", "Svelte"]}
							w={137}
						/>
						<Select
							className={styles.filterInput}
							pt={10}
							label=" "
							placeholder="To"
							data={["React", "Angular", "Vue", "Svelte"]}
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
					rightSection={iconArrow}
				/>
			</Flex>
		</Box>
	);
};

export default Filters;
