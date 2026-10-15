// react
import type { ReactNode } from "react";

// components
import { Tabs } from "@/components/ui/Tabs";
import { CardList } from "@/components/ui/Cards";
import { Pagination } from "@/components/ui/Pagination";

// images
import nft2 from "@/assets/images/nft2.svg";
import nft3 from "@/assets/images/nft3.svg";

// styles
import styles from "./Products.module.scss";

export type TabItem = {
	value: string;
	label: ReactNode;
	content: ReactNode;
	disabled?: boolean;
};

const items: TabItem[] = [
	{ value: "all", label: "Todos os NFTs", content: <CardList /> },
	{ value: "new", label: "Novos lançamentos", content: <CardList image={nft2} /> },
	{ value: "trending", label: "Em alta", content: <CardList image={nft3} /> },
];

export function Products() {
	return (
		<div className={styles.products}>
			<div className={styles.products_filter}>
				<p>Ordenar por: Listados recentemente</p>
			</div>

			<Tabs items={items} ariaLabel="Categorias de NFTs" orientation="vertical" />

			<Pagination />
		</div>
	);
}
