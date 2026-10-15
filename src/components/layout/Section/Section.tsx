import clsx from "clsx";

// styles
import styles from "./Section.module.scss";

type Props = {
	children?: React.ReactNode;
	title?: string;
	text?: string;
	border?: boolean;
};

export function Section({ children, title, text, border }: Props) {
	const hasHeader = Boolean(title || text);

	return (
		<section className={clsx(styles.section, border && styles.section_border)}>
			{hasHeader && (
				<div className={styles.section_header}>
					<h2>{title}</h2>
					{text && <p>{text}</p>}
				</div>
			)}
			{children}
		</section>
	);
}
