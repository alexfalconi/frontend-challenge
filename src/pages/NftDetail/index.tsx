// react
import type { ReactNode } from "react";

// images
import nft from "@/assets/images/nft.svg";
import nft2 from "@/assets/images/nft2.svg";
import nft3 from "@/assets/images/nft3.svg";

// components
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Gallery } from "./components/Gallery/Gallery";
import { Info } from "./components/Info/Info";
import { Section } from "@/components/layout/Section";
import { Tabs } from "@/components/ui/Tabs";

// styles
import styles from "./NftDetail.module.scss";
import { CardList } from "@/components/ui/Cards";

export type TabItem = {
	value: string;
	label: ReactNode;
	content: ReactNode;
	disabled?: boolean;
};

const items: TabItem[] = [
	{
		value: "detail",
		label: "Detalhes do NFT",
		content: (
			<>
				<p>
					Emerald Ape #042 é uma obra digital 1/50 finalizada à mão da coleção Kurio Editions. Cada
					atributo fica armazenado nos metadados do token e verificado na Ethereum. A obra explora
					identidade, movimento e luz em um mundo digital sem fronteiras.
				</p>
				<p>
					A propriedade inclui a arte em alta resolução, lançamentos exclusivos para colecionadores
					e um registro permanente de procedência registrada na rede. Nova Sato recebe 5% de
					direitos autorais nas vendas secundárias, apoiando novos trabalhos e lançamentos da
					comunidade.
				</p>
			</>
		),
	},
	{ value: "reviews", label: "Avaliações de colecionadores (19)", content: "Avaliações" },
];

const nftData = {
	title: "Emerald Ape #042",
	price: 1.19,
	rating: 4.5,
	reviews: 19,
	description:
		"Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum, com arte desbloqueável e acesso para colecionadores.",
	editions: ["1/1", "1/10", "1/50", "ABERTA"],
	defaultEdition: "1/50",
	tokenId: "#0042",
	collection: "Kurio Apes",
	attributes: ["Óculos", "Esmeralda", "Raro"],
	images: [nft, nft2, nft3, nft],
};

export function NftDetail() {
	return (
		<>
			<section className={styles.nft}>
				<div className="row">
					<div className="col">
						<div className={styles.nft_breadcrumb}>
							<Breadcrumb
								items={[
									{ label: "Início", to: "/" },
									{ label: "Mercado", to: "/" },
								]}
							/>
						</div>
					</div>
					<div className="col md-6">
						<Gallery images={nftData.images} alt={nftData.title} />
					</div>
					<div className="col md-6">
						<Info
							title={nftData.title}
							price={nftData.price}
							rating={nftData.rating}
							reviews={nftData.reviews}
							description={nftData.description}
							editions={nftData.editions}
							defaultEdition={nftData.defaultEdition}
							tokenId={nftData.tokenId}
							collection={nftData.collection}
							attributes={nftData.attributes}
						/>
					</div>
				</div>
			</section>

			<Section>
				<div className="row">
					<div className="col">
						<Tabs
							items={items}
							ariaLabel="Categorias de NFTs"
							orientation="vertical"
							border={true}
						/>
					</div>
				</div>
			</Section>

			<Section title="Mais desta coleção" border={true}>
				<CardList limit={8} grid={3} carrousel />
			</Section>
		</>
	);
}
