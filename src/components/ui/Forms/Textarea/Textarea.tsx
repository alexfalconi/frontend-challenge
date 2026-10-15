import { clsx } from "clsx";
import type { TextareaHTMLAttributes } from "react";

// styles
import styles from "./Textarea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: Props) {
	return <textarea className={clsx(styles.textarea, className)} {...props} />;
}
