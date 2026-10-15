import { clsx } from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";

// styles
import styles from "./Radio.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
	label: ReactNode;
	variant?: "default" | "card";
};

export function Radio({ label, variant = "default", className, ...props }: Props) {
	return (
		<label className={clsx(styles.radio, styles[`radio_variant_${variant}`], className)}>
			<input type="radio" className={styles.radio_input} {...props} />
			<span className={styles.radio_mark} aria-hidden="true" />
			<span className={styles.radio_label}>{label}</span>
		</label>
	);
}
