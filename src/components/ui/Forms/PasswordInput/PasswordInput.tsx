import { clsx } from "clsx";
import { useState, type InputHTMLAttributes } from "react";

// icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

// components
import { Input } from "../Input/Input";

// styles
import styles from "./PasswordInput.module.scss";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function PasswordInput({ className, ...props }: Props) {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className={styles.password}>
			<Input
				type={visible ? "text" : "password"}
				className={clsx(styles.password_input, className)}
				{...props}
			/>
			<button
				type="button"
				className={styles.password_toggle}
				aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
				aria-pressed={visible}
				onClick={() => setVisible((current) => !current)}>
				{visible ? (
					<IoEyeOutline size={20} aria-hidden="true" />
				) : (
					<IoEyeOffOutline size={20} aria-hidden="true" />
				)}
			</button>
		</div>
	);
}
