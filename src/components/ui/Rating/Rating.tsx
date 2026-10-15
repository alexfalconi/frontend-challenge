// icons
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// styles
import styles from "./Rating.module.scss";

type Props = {
	value: number;
	max?: number;
	label?: string;
};

export function Rating({ value, max = 5, label }: Props) {
	return (
		<div className={styles.rating}>
			<div className={styles.rating_stars} role="img" aria-label={`Nota ${value} de ${max}`}>
				{Array.from({ length: max }, (_, i) => {
					const position = i + 1;

					if (value >= position) return <FaStar key={i} />;
					if (value >= position - 0.5) return <FaStarHalfAlt key={i} />;
					return <FaRegStar key={i} />;
				})}
			</div>

			{label && <span className={styles.rating_label}>{label}</span>}
		</div>
	);
}
