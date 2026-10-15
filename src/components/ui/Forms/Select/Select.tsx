import { clsx } from "clsx";
import type { SelectHTMLAttributes } from "react";

// icons
import { FiChevronDown } from "react-icons/fi";

// styles
import styles from "./Select.module.scss";

type Option = {
	value: string;
	label: string;
};

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
	options: Option[];
	placeholder?: string;
	variant?: "default" | "small";
};

export function Select({ options, placeholder, variant = "default", className, ...props }: Props) {
	return (
		<div className={clsx(styles.select, styles[`select_variant_${variant}`], className)}>
			<select className={styles.select_field} defaultValue={placeholder ? "" : undefined} {...props}>
				{placeholder && (
					<option value="" disabled hidden>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<FiChevronDown className={styles.select_icon} size={18} aria-hidden="true" />
		</div>
	);
}
