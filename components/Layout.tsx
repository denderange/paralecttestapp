import { Container, Flex } from "@mantine/core";
import SideBar from "./SideBar/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Container
				size={1440}
				p={0}
			>
				<Flex gap={12}>
					<SideBar />

					{children}
				</Flex>
			</Container>
		</main>
	);
}
