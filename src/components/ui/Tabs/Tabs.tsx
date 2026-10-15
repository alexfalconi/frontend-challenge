import clsx from "clsx";

//react
import type { ReactNode } from "react";

// radix
import { Tabs } from "radix-ui";

export type TabItem = {
	value: string;
	label: ReactNode;
	content: ReactNode;
	disabled?: boolean;
};

type TabsProps = {
	items: TabItem[];
	ariaLabel: string;
	defaultValue?: string;
	value?: string;
	onValueChange?: (value: string) => void;
	orientation?: "horizontal" | "vertical";
	className?: string;
	border?: boolean;
};

// styles
import styles from "./Tabs.module.scss";

export function TabsComponent({
	items,
	ariaLabel,
	defaultValue = items[0]?.value,
	value,
	onValueChange,
	orientation = "horizontal",
	className,
	border,
}: TabsProps) {
	return (
		<Tabs.Root
			defaultValue={defaultValue}
			value={value}
			onValueChange={onValueChange}
			orientation={orientation}
			className={`${styles.tabs} ${className ?? ""}`}>
			<Tabs.List
				aria-label={ariaLabel}
				className={clsx(styles.tabs_list, border && styles.tabs_list_border)}>
				{items.map((item) => (
					<Tabs.Trigger
						key={item.value}
						value={item.value}
						disabled={item.disabled}
						className={styles.tabs_list_trigger}>
						{item.label}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			{items.map((item) => (
				<Tabs.Content key={item.value} value={item.value} className={styles.tabs_content}>
					{item.content}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
