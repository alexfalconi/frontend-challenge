// tanstack
import { Link } from "@tanstack/react-router";

// imagens
import imageDefault from "@/assets/images/nft.svg";

// icons
import { IoArrowForward } from "react-icons/io5";

// components
import { Button } from "../../Button";

// styles
import styles from "./CardSale.module.scss";

export function CardSale() {
	return (
		<article className={styles.cardsale}>
			<Link to="/" className={styles.cardsale_image}>
				<img src={imageDefault} alt="" />
			</Link>
			<Link to="/" className={styles.cardsale_text}>
				<h3 className={styles.cardsale_title}>Lançamento gênesis de edição limitada</h3>
				<div className={styles.cardsale_description}>
					<p>Colecione edições dos criadores antes da revelação pública</p>
				</div>
				<Button text="Explorar" icon={IoArrowForward} iconPos="right" />
			</Link>
		</article>
	);
}
