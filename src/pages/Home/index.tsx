// tanstack
import { Link } from "@tanstack/react-router";

// images
import highlight from "@/assets/images/nft-highlight.svg";

// components
import { Aside } from "@/components/ui/Aside";
import { Section } from "@/components/layout/Section/Section";
import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import { Range } from "@/components/ui/Forms";
import { CardList, CardSale } from "@/components/ui/Cards";

// styles
import styles from "./Home.module.scss";

export function Home() {
	return (
		<>
			<Banner />

			<Section>
				<div className="row">
					<div className="col md-3">
						<Aside>
							<Aside.Block title="Coleções">
								<Aside.List>
									{Array.from({ length: 9 }).map((_, i) => (
										<Aside.Item to="/" count={33}>
											Arte digital
										</Aside.Item>
									))}
								</Aside.List>
							</Aside.Block>

							<Aside.Block title="Faixa de preço">
								<Range />
							</Aside.Block>

							<Aside.Block title="Rede">
								<Aside.List>
									{Array.from({ length: 3 }).map((_, i) => (
										<Aside.Item to="/" count={119}>
											Ethereum
										</Aside.Item>
									))}
								</Aside.List>
							</Aside.Block>
						</Aside>

						<Link to="/" className={styles.highlight}>
							<h3>
								NFT EM DESTAQUE <span>OFERTA LIMITADA</span>
							</h3>
							<img src={highlight} alt="" />
						</Link>
					</div>
					<div className="col md-9">
						<Products />
					</div>
				</div>
			</Section>

			<Section>
				<CardList limit={2} grid={6} type="sale" />
			</Section>

			<Section
				title="Diário da Cunhagem"
				text="Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.">
				<CardList limit={4} grid={3} type="blog" />
			</Section>
		</>
	);
}
