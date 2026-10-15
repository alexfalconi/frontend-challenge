import { clsx } from "clsx";
import { Link } from "@tanstack/react-router";

// icons
import type { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from "./Button.module.scss";

type ButtonProps = {
	text?: string;
	to?: string;
	size?: "small" | "medium" | "large";
	color?: "white" | "outline" | "dark";
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	icon?: IconType;
	iconSrc?: string;
	iconPos?: "left" | "right";
	target?: "_self" | "_blank";
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	"aria-label"?: string;
};

export function Button({
	text,
	to,
	size,
	color,
	fullWidth = false,
	disabled = false,
	loading = false,
	icon: Icon,
	iconSrc,
	iconPos = "left",
	target,
	type = "button",
	onClick,
	"aria-label": ariaLabel,
}: ButtonProps) {
	const isDisabled = disabled || loading;

	const buttonClass = clsx(
		styles.btn,
		styles[`btn_size_${size}`],
		styles[`btn_color_${color}`],
		fullWidth && styles.btn_full,
		(Icon || iconSrc) && styles.btn_icon,
		isDisabled && styles.disabled,
		loading && styles.loading,
	);

	const content = (
		<>
			{loading ? (
				<AiOutlineLoading3Quarters className={styles.spinner} size={20} aria-hidden="true" />
			) : (
				<>
					{Icon && iconPos === "left" && <Icon size={20} aria-hidden="true" />}

					{text && <span>{text}</span>}

					{Icon && iconPos === "right" && <Icon size={20} aria-hidden="true" />}

					{iconSrc && <img src={iconSrc} alt="" aria-hidden="true" />}
				</>
			)}
		</>
	);

	if (to) {
		return (
			<Link
				to={to}
				className={buttonClass}
				target={target}
				aria-label={ariaLabel ?? text}
				aria-disabled={isDisabled || undefined}
				tabIndex={isDisabled ? -1 : undefined}
				onClick={(event) => {
					if (isDisabled) {
						event.preventDefault();
						return;
					}

					onClick?.();
				}}>
				{content}
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={buttonClass}
			disabled={isDisabled}
			aria-label={ariaLabel ?? text}
			onClick={onClick}>
			{content}
		</button>
	);
}
