import { Flex, Text } from "@mantine/core";
import React from "react";
import { poppins } from "../../styles/fonts";
import Image from "next/image";
import IconLogo from "../../public/icons/icon-logo.svg";
import styles from "./logo.module.css";

const Logo = () => {
	return (
		<Flex className={styles.logoContainer}>
			<IconLogo
				className={styles.img}
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
