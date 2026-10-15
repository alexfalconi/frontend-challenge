// tanstack
import { Link } from "@tanstack/react-router";

// imagens
import imageDefault from "@/assets/images/nft.svg";

// styles
import styles from "./Card.module.scss";

type Props = {
	image?: string;
};

export function Card({ image }: Props) {
	return (
		<article className={styles.card}>
			<Link to="/nft/$id" params={{ id: "1" }} className={styles.card_image}>
				<div className={styles.card_image_radius}>
					<img src={image ? image : imageDefault} alt="" />
				</div>
			</Link>
			<Link to="/nft/$id" params={{ id: "1" }} className={styles.card_text}>
				<h3 className={styles.card_title}>Emerald Ape #042</h3>
				<div className={styles.card_price}>1.19 ETH</div>
			</Link>
		</article>
	);
}
