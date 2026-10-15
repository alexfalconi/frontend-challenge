// tanstack
import { Link } from "@tanstack/react-router";

// icons
import { LuTrash } from "react-icons/lu";

// components
import { Quantity } from "@/components/ui/Forms";

// utils
import { formatEth } from "@/utils/format";

// styles
import styles from "./CartTable.module.scss";

export type CartItem = {
	id: string;
	title: string;
	tokenId: string;
	price: number;
	quantity: number;
	image: string;
};

type Props = {
	items: CartItem[];
	onQuantityChange: (id: string, quantity: number) => void;
	onRemove: (id: string) => void;
};

export function CartTable({ items, onQuantityChange, onRemove }: Props) {
	if (items.length === 0) {
		return (
			<div className={styles.table_empty}>
				<p>Seu carrinho está vazio.</p>
				<Link to="/">Continuar explorando</Link>
			</div>
		);
	}

	return (
		<div className={styles.table_wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th className={styles.table_col_nft}>NFTs</th>
						<th className={styles.table_col_price}>Preço</th>
						<th className={styles.table_col_edition}>Edições</th>
						<th className={styles.table_col_total}>Total</th>
						<th className={styles.table_col_remove}>
							<span className={styles.table_sr}>Remover</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id} className={styles.table_row}>
							<td>
								<div className={styles.table_product}>
									<img src={item.image} alt="" />
									<div>
										<Link
											to="/nft/$id"
											params={{ id: item.id }}
											className={styles.table_product_title}>
											{item.title}
										</Link>
										<span className={styles.table_product_token}>ID do token: {item.tokenId}</span>
									</div>
								</div>
							</td>
							<td className={styles.table_price}>{formatEth(item.price)} ETH</td>
							<td>
								<Quantity
									variant="compact"
									label={`Quantidade de ${item.title}`}
									value={item.quantity}
									onChange={(quantity) => onQuantityChange(item.id, quantity)}
								/>
							</td>
							<td className={styles.table_total}>{formatEth(item.price * item.quantity)} ETH</td>
							<td>
								<button
									type="button"
									className={styles.table_remove}
									aria-label={`Remover ${item.title} do carrinho`}
									onClick={() => onRemove(item.id)}>
									<LuTrash size={22} aria-hidden="true" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
