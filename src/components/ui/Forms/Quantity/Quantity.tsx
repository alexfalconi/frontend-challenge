import { clsx } from "clsx";

// icons
import { FiMinus, FiPlus } from "react-icons/fi";

// styles
import styles from "./Quantity.module.scss";

type Props = {
	value: number;
	min?: number;
	max?: number;
	variant?: "default" | "compact";
	label?: string;
	onChange: (value: number) => void;
};

export function Quantity({
	value,
	min = 1,
	max = 99,
	variant = "default",
	label = "Quantidade",
	onChange,
}: Props) {
	const iconSize = variant === "compact" ? 16 : 25;

	return (
		<div
			className={clsx(styles.quantity, styles[`quantity_variant_${variant}`])}
			role="group"
			aria-label={label}>
			<button
				type="button"
				className={styles.quantity_btn}
				aria-label="Diminuir quantidade"
				disabled={value <= min}
				onClick={() => onChange(value - 1)}>
				<FiMinus size={iconSize} aria-hidden="true" />
			</button>

			<output className={styles.quantity_value} aria-live="polite">
				{value}
			</output>

			<button
				type="button"
				className={styles.quantity_btn}
				aria-label="Aumentar quantidade"
				disabled={value >= max}
				onClick={() => onChange(value + 1)}>
				<FiPlus size={iconSize} aria-hidden="true" />
			</button>
		</div>
	);
}
