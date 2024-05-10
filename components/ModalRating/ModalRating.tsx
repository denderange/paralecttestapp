import { Modal } from "@mantine/core";
import styles from "./modalRating.module.css";

type ModalRatingProps = {
	opened: boolean;
	close: () => void;
};

const ModalRating = ({ opened, close }: ModalRatingProps) => {
	return (
		<Modal
			opened={opened}
			onClose={close}
			centered
		>
			<div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
				exercitationem consectetur cum deserunt necessitatibus aliquam eaque!
				Molestias corporis officiis blanditiis laborum aspernatur quasi nemo
				quod, necessitatibus doloribus aliquid, dolore ducimus?
			</div>
		</Modal>
	);
};

export default ModalRating;
