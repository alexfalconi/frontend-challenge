// styles
import styles from "./Burger.module.scss";

type Props = {
	onClick: () => void;
	open: boolean;
};

export function Burger({ onClick, open }: Props) {
	return (
		<div className={`${styles["burger"]} ${open ? styles["burger_open"] : ""}`} onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
