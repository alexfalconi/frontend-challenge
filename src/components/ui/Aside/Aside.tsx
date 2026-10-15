import clsx from "clsx";

import type { ComponentProps, ReactNode } from "react";

// tanstack
import { Link, type LinkProps } from "@tanstack/react-router";

// styles
import styles from "./Aside.module.scss";

function Root({ children, ...props }: ComponentProps<"aside">) {
	return (
		<aside className={styles.aside} {...props}>
			{children}
		</aside>
	);
}

type BlockProps = {
	title?: string;
	icon?: boolean;
	children: ReactNode;
};

function Block({ title, children, icon }: BlockProps) {
	return (
		<div className={clsx(styles.aside_block, icon && styles.aside_block_icon)}>
			{title && <h2 className={styles.aside_block_title}>{title}</h2>}
			{children}
		</div>
	);
}

function List({ children }: { children: ReactNode }) {
	return <ul className={styles.aside_block_list}>{children}</ul>;
}

type ItemProps = LinkProps & {
	count?: number;
	children: ReactNode;
};

function Item({ count, children, ...linkProps }: ItemProps) {
	return (
		<li>
			<Link className={styles.aside_block_item} {...linkProps}>
				{children}
				{count !== undefined && <span className={styles.aside_block_count}>({count})</span>}
			</Link>
		</li>
	);
}

export const Aside = Object.assign(Root, { Block, List, Item });
