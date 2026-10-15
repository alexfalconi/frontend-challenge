// icons
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// styles
import styles from "./Pagination.module.scss";
import clsx from "clsx";

export function Pagination() {
	return (
		<div className={styles.pagination}>
			{/* <div className={styles.pagination_button}>
				<FaAngleLeft />
			</div> */}
			<div className={clsx(styles.pagination_button, styles.pagination_button_active)}>1</div>
			<div className={styles.pagination_button}>2</div>
			<div className={styles.pagination_button}>3</div>
			<div className={styles.pagination_button}>4</div>
			<div className={styles.pagination_button}>
				<FaAngleRight />
			</div>
		</div>
	);
}
