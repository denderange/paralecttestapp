import { Flex, Text } from "@mantine/core";
import React from "react";
import { poppins } from "../../pages/fonts";
import Image from "next/image";
import iconLogo from "../../public/icons/icon-logo.svg";
import styles from "./logo.module.css";

const Logo = () => {
	return (
		<Flex className={styles.logoContainer}>
			<Image
				className={styles.img}
				src={iconLogo}
				alt="logo"
			/>
			<Text
				className={styles.text}
				ff={poppins.style.fontFamily}
			>
				ArrowFlicks
			</Text>
		</Flex>
	);
};

export default Logo;
