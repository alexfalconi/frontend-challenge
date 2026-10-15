import { clsx } from "clsx";
import type { ReactNode } from "react";

// styles
import styles from "./Field.module.scss";

type Props = {
	label?: string;
	htmlFor?: string;
	required?: boolean;
	className?: string;
	children: ReactNode;
};

export function Field({ label, htmlFor, required = false, className, children }: Props) {
	return (
		<div className={clsx(styles.field, className)}>
			{label ? (
				<label htmlFor={htmlFor} className={styles.field_label}>
					{label}
					{required && (
						<span className={styles.field_required} aria-hidden="true">
							*
						</span>
					)}
				</label>
			) : (
				// mantém o campo alinhado com os vizinhos que têm label
				<span className={styles.field_label} aria-hidden="true" />
			)}
			{children}
		</div>
	);
}
