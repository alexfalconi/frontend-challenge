// imagens
import banner from "@/assets/images/banner.png";

// components
import { ACarousel } from "@/components/ui/ACarousel";
import { Button } from "@/components/ui/Button";

// styles
import styles from "./Banner.module.scss";

export function Banner() {
	return (
		<section className={styles.banner}>
			<div className="row">
				<ACarousel autoPlay={true} autoPlaySpeed={6000} infinite={true} dots={true}>
					{Array.from({ length: 3 }).map((_, i) => (
						<div className={styles.banner_item} key={i}>
							<div className="col md-7">
								<p className={styles.welcome}>Bem-vindo à Kurio</p>
								<h2>SEJA DONO DO FUTURO DA ARTE DIGITAL</h2>
								<p>
									Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte
									digital rara, apoie artistas e tenha uma parte da cultura da internet.
								</p>
								<Button text="EXPLORAR" size="medium" />
							</div>
							<div className="col md-5">
								<img src={banner} alt="" />
							</div>
						</div>
					))}
				</ACarousel>
			</div>
		</section>
	);
}
