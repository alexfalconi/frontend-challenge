// tanstack
import { Link } from "@tanstack/react-router";

// imagens
import image from "@/assets/images/blog.svg";

// icons
import { HiArrowLongRight } from "react-icons/hi2";

// styles
import styles from "./CardBlog.module.scss";

export function CardBlog() {
	return (
		<article className={styles.cardblog}>
			<Link to="/" className={styles.cardblog_image}>
				<img src={image} alt="" />
			</Link>
			<Link to="/" className={styles.cardblog_text}>
				<div className={styles.cardblog_date}>12 de setembro | Leitura de 6 min</div>
				<h3 className={styles.cardblog_title}>Como funciona a propriedade de NFTs</h3>
				<div className={styles.cardblog_description}>
					<p>Aprenda a colecionar, negociar e verificar ativos digitais.</p>
				</div>
				<Link to="/" className={styles.cardblog_btn}>
					Ler mais <HiArrowLongRight />
				</Link>
			</Link>
		</article>
	);
}
