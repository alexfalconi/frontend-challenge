// react
import { useState } from "react";

// images
import nft from "@/assets/images/nft.svg";
import nft2 from "@/assets/images/nft2.svg";
import nft3 from "@/assets/images/nft3.svg";

// components
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CartTable, type CartItem } from "./components/CartTable/CartTable";
import { Summary } from "./components/Summary/Summary";
import { Section } from "@/components/layout/Section";
import { CardList } from "@/components/ui/Cards";

// styles
import styles from "./Cart.module.scss";

const initialItems: CartItem[] = [
	{ id: "1", title: "Emerald Ape #042", tokenId: "#0042", price: 1.19, quantity: 2, image: nft },
	{ id: "2", title: "Violet Nomad #314", tokenId: "#0009", price: 1.39, quantity: 6, image: nft2 },
	{ id: "3", title: "Ivory Baron #088", tokenId: "#0552", price: 1.79, quantity: 9, image: nft3 },
];

const NETWORK_FEE = 0.016;

export function Cart() {
	const [items, setItems] = useState<CartItem[]>(initialItems);

	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

	function handleQuantityChange(id: string, quantity: number) {
		setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
	}

	function handleRemove(id: string) {
		setItems((current) => current.filter((item) => item.id !== id));
	}

	return (
		<>
			<section className={styles.cart}>
				<div className="row">
					<div className="col">
						<div className={styles.cart_breadcrumb}>
							<Breadcrumb
								items={[
									{ label: "Início", to: "/" },
									{ label: "Mercado", to: "/" },
									{ label: "Carrinho", to: "/carrinho" },
								]}
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col md-8">
						<CartTable
							items={items}
							onQuantityChange={handleQuantityChange}
							onRemove={handleRemove}
						/>
					</div>
					<div className="col md-4">
						<Summary subtotal={subtotal} fee={NETWORK_FEE} disabled={items.length === 0} />
					</div>
				</div>
			</section>

			<Section title="Colecionadores também viram" border={true}>
				<CardList limit={8} grid={3} carrousel />
			</Section>
		</>
	);
}
