// tanstack
import { Link } from "@tanstack/react-router";

// styles
import styles from "./Breadcrumb.module.scss";

type BreadcrumbItem = {
	label: string;
	to: string;
};

type Props = {
	items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: Props) {
	return (
		<nav aria-label="Breadcrumb" className={styles.breadcrumb}>
			<ol className={styles.breadcrumb_list}>
				{items.map((item, i) => (
					<li key={`${item.to}-${i}`} className={styles.breadcrumb_item}>
						<Link to={item.to}>{item.label}</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}
