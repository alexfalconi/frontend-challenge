// images
import nft from "@/assets/images/nft.svg";
import nft2 from "@/assets/images/nft2.svg";
import nft3 from "@/assets/images/nft3.svg";
import thankyout from "@/assets/images/thank-you.svg";

// components
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

// utils
import { formatEth } from "@/utils/format";

// styles
import styles from "./OrderConfirmationModal.module.scss";

type Props = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
};

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

export function OrderConfirmationModal({ open, onOpenChange }: Props) {
	const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const total = subtotal + NETWORK_FEE;

	const info = [
		{ label: "ID da transação", value: "0xA91F…E82C", strong: true },
		{ label: "Data", value: "29 Jul, 2026" },
		{ label: "Total", value: `${formatEth(total, 3)} ETH` },
		{ label: "Carteira", value: "MetaMask", strong: true },
	];

	return (
		<Modal open={open} onOpenChange={onOpenChange} size="wide">
			<div className={styles.confirmation_top}>
				<img src={thankyout} alt="" />
				<Modal.Title className={styles.confirmation_title}>
					Seus NFTs agora estão na sua carteira
				</Modal.Title>
			</div>

			<dl className={styles.confirmation_info}>
				{info.map((item) => (
					<div key={item.label} className={styles.confirmation_info_item}>
						<dt data-strong={item.strong || undefined}>{item.label}</dt>
						<dd>{item.value}</dd>
					</div>
				))}
			</dl>

			<div className={styles.confirmation_details}>
				<h3 className={styles.confirmation_subtitle}>Detalhes da transação</h3>

				<div className={styles.confirmation_head}>
					<span>NFTs</span>
					<span>Edições</span>
					<span>Subtotal</span>
				</div>

				<ul className={styles.confirmation_items}>
					{items.map((item) => (
						<li key={item.id} className={styles.confirmation_item}>
							<div className={styles.confirmation_item_product}>
								<img src={item.image} alt="" />
								<div>
									<strong>{item.title}</strong>
									<span>ID do token: {item.tokenId}</span>
								</div>
							</div>
							<span className={styles.confirmation_item_qty}>(x {item.quantity})</span>
							<strong className={styles.confirmation_item_price}>
								{formatEth(item.price * item.quantity)} ETH
							</strong>
						</li>
					))}
				</ul>

				<dl className={styles.confirmation_totals}>
					<div>
						<dt>Taxa de rede</dt>
						<dd>{formatEth(NETWORK_FEE, 3)} ETH</dd>
					</div>
					<div>
						<dt>Total</dt>
						<dd>{formatEth(total, 3)} ETH</dd>
					</div>
				</dl>

				<Modal.Description className={styles.confirmation_note}>
					<p>
						Transação confirmada na Ethereum. A propriedade foi transferida para sua carteira
						conectada e registrada na rede.
					</p>
				</Modal.Description>

				<div className={styles.confirmation_action}>
					<Button text="Ver no Etherscan" size="medium" />
				</div>
			</div>
		</Modal>
	);
}
