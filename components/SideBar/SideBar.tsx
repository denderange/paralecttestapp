import { List, Stack } from "@mantine/core";
import React from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import styles from "./sideBar.module.css";

const navLinks = [
	{ title: "Movies", link: "/movies" },
	{ title: "Rated movies", link: "/rated-movies" },
];

const SideBar = () => {
	const [active, setActive] = React.useState("Movies");

	return (
		<Stack
			p={24}
			w={280}
			h="100vh"
			bg={"var(--color-purple-100)"}
		>
			<Logo />

			<nav>
				{navLinks.map(({ title, link }) => (
					<Link
						key={title}
						href={link}
						className={`${styles.navlink} ${active === title && styles.active}`}
						onClick={(e) => {
							e.preventDefault();
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
