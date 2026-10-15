import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

// styles
import styles from "./Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
	return <input className={clsx(styles.input, className)} {...props} />;
}
