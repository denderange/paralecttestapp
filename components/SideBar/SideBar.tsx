import { List, Stack } from "@mantine/core";
import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import styles from "./sideBar.module.css";

const navLinks = [
	{ title: "Movies", link: "/" },
	{ title: "Rated movies", link: "/rated-movies" },
];

const SideBar = () => {
	const [active, setActive] = React.useState("Movies");

	return (
		<Stack className={styles.container}>
			<Logo />

			<nav>
				{navLinks.map(({ title, link }) => (
					<Link
						key={title}
						href={link}
						className={`${styles.navlink} ${active === title && styles.active}`}
						onClick={(e) => {
							setActive(title);
						}}
					>
						{title}
					</Link>
				))}
			</nav>
		</Stack>
	);
};

export default SideBar;
