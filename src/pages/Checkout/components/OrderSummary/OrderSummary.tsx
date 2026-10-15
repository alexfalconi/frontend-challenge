// react
import { useState } from "react";

// images
import nft from "@/assets/images/nft.svg";
import nft2 from "@/assets/images/nft2.svg";
import nft3 from "@/assets/images/nft3.svg";

// components
import { Button } from "@/components/ui/Button";
import { Radio } from "@/components/ui/Forms";
import { OrderConfirmationModal } from "@/components/modals";

// utils
import { formatEth } from "@/utils/format";

// styles
import styles from "./OrderSummary.module.scss";

type OrderItem = {
	id: string;
	title: string;
	tokenId: string;
	price: number;
	quantity: number;
	image: string;
};

const items: OrderItem[] = [
	{ id: "1", title: "Emerald Ape #042", tokenId: "#0042", price: 1.19, quantity: 2, image: nft },
	{ id: "2", title: "Violet Nomad #314", tokenId: "#0314", price: 1.39, quantity: 6, image: nft2 },
	{ id: "3", title: "Ivory Baron #088", tokenId: "#0088", price: 1.79, quantity: 9, image: nft3 },
];

const NETWORK_FEE = 0.016;

export function OrderSummary() {
	const [confirmed, setConfirmed] = useState(false);

	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const total = subtotal + NETWORK_FEE;

	return (
		<aside className={styles.order}>
			<h2 className={styles.order_title}>Seus NFTs</h2>

			<div className={styles.order_header}>
				<strong>NFTs</strong>
				<strong>Subtotal</strong>
			</div>

			<ul className={styles.order_items}>
				{items.map((item) => (
					<li key={item.id} className={styles.order_item}>
						<img src={item.image} alt="" />
						<div className={styles.order_item_text}>
							<strong>{item.title}</strong>
							<span>ID do token: {item.tokenId}</span>
						</div>
						<span className={styles.order_item_qty}>(x {item.quantity})</span>
						<strong className={styles.order_item_price}>
							{formatEth(item.price * item.quantity)} ETH
						</strong>
					</li>
				))}
			</ul>

			<p className={styles.order_promo}>Tem um código promocional? Aplique aqui</p>

			<dl className={styles.order_list}>
				<div className={styles.order_list_item}>
					<dt>Subtotal</dt>
					<dd>{formatEth(subtotal)} ETH</dd>
				</div>
				<div className={styles.order_list_item}>
					<dt>Desconto do lançamento</dt>
					<dd>(-) 00.00</dd>
				</div>
				<div className={styles.order_list_item}>
					<dt>Taxa de rede</dt>
					<dd>{formatEth(NETWORK_FEE, 3)} ETH</dd>
				</div>
				<small className={styles.order_list_note}>Taxa estimada</small>
			</dl>

			<div className={styles.order_total}>
				<strong>Total</strong>
				<strong>{formatEth(total, 3)} ETH</strong>
			</div>

			<h3 className={styles.order_subtitle}>Carteira e rede</h3>

			<div className={styles.order_wallets}>
				<Radio
					variant="card"
					name="wallet"
					value="all"
					label={<span className={styles.order_badge}>METAMASK · WALLETCONNECT · COINBASE</span>}
				/>
				<Radio variant="card" name="wallet" value="metamask" label="MetaMask" />
				<Radio
					variant="card"
					name="wallet"
					value="coinbase"
					label="Coinbase Wallet"
					defaultChecked
				/>
			</div>

			<Button text="Confirmar compra" size="medium" fullWidth onClick={() => setConfirmed(true)} />
			<OrderConfirmationModal open={confirmed} onOpenChange={setConfirmed} />
		</aside>
	);
}
