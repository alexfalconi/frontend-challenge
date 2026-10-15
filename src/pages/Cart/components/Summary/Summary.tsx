// react
import { useState } from "react";

// tanstack
import { Link } from "@tanstack/react-router";

// components
import { Button } from "@/components/ui/Button";

// utils
import { formatEth } from "@/utils/format";

// styles
import styles from "./Summary.module.scss";

type Props = {
	subtotal: number;
	fee: number;
	disabled?: boolean;
};

export function Summary({ subtotal, fee, disabled = false }: Props) {
	const [code, setCode] = useState<string>("");

	const total = subtotal + fee;

	return (
		<aside className={styles.summary}>
			<h2 className={styles.summary_title}>Resumo da carteira</h2>

			<form className={styles.summary_coupon} onSubmit={(event) => event.preventDefault()}>
				<label htmlFor="coupon" className={styles.summary_label}>
					Código promocional
				</label>
				<div className={styles.summary_coupon_field}>
					<input
						id="coupon"
						type="text"
						value={code}
						placeholder="Digite o código promocional..."
						onChange={(event) => setCode(event.target.value)}
					/>
					<Button text="Aplicar" size="medium" />
				</div>
			</form>

			<dl className={styles.summary_list}>
				<div className={styles.summary_item}>
					<dt>Subtotal</dt>
					<dd>{formatEth(subtotal)} ETH</dd>
				</div>
				<div className={styles.summary_item}>
					<dt>Desconto do lançamento</dt>
					<dd>(-) 00.00</dd>
				</div>
				<div className={styles.summary_item}>
					<dt>Taxa de rede</dt>
					<dd>{formatEth(fee, 3)} ETH</dd>
				</div>
				<small className={styles.summary_list_note}>Taxa estimada</small>
			</dl>

			<div className={styles.summary_total}>
				<strong>Total</strong>
				<strong>{formatEth(total, 3)} ETH</strong>
			</div>

			<Button
				text="Conectar e finalizar"
				size="medium"
				fullWidth
				disabled={disabled}
				to="/pagamento"
			/>

			<Link to="/" className={styles.summary_link}>
				Continuar explorando
			</Link>
		</aside>
	);
}
