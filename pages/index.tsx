import { Container, Flex } from "@mantine/core";
import SideBar from "../components/SideBar/SideBar";

export default function IndexPage() {
	return (
		<Container size={1440}>
			<Flex gap={12}>
				<SideBar />

				<Container
					size={980}
					mt={40}
					p={0}
					style={{ margin: "0 auto" }}
					bg={"var(--color-purple-200)"}
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
					voluptate veniam commodi inventore sit numquam, esse ipsam cupiditate
					corporis quod modi expedita, animi autem. Doloremque neque vitae
					numquam eius cumque.
				</Container>
			</Flex>
		</Container>
	);
}
