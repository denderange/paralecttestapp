import { Button, Center, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import imgEmptyRated from "../../public/images/empty-rated.png";
import styles from "./emptyRated.module.css";

const EmptyRated = () => (
	<Center>
		<Stack className={styles.container}>
			<Image
				className={styles.imgEmptyRated}
				src={imgEmptyRated}
				alt="empty rated image"
			/>
			<Text className={styles.text}>You haven&apos;t rated any films yet</Text>
			<Button className="btnPrimaryM">Find movies</Button>
		</Stack>
	</Center>
);

export default EmptyRated;
