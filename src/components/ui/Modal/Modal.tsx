import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// radix
import { Dialog } from "radix-ui";

// icons
import { FiX } from "react-icons/fi";

// styles
import styles from "./Modal.module.scss";

type ModalProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	size?: "default" | "wide";
	children: ReactNode;
};

function ModalRoot({ open, onOpenChange, size = "default", children }: ModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.modal_overlay} />
				<Dialog.Content className={clsx(styles.modal, styles[`modal_size_${size}`])}>
					<Dialog.Close className={styles.modal_close} aria-label="Fechar">
						<FiX size={22} aria-hidden="true" />
					</Dialog.Close>

					{children}

					<span className={styles.modal_bar} aria-hidden="true" />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

type TitleProps = ComponentPropsWithoutRef<typeof Dialog.Title> & {
	srOnly?: boolean;
};

function ModalTitle({ srOnly = false, className, ...props }: TitleProps) {
	return <Dialog.Title className={clsx(styles.modal_title, srOnly && styles.modal_sr, className)} {...props} />;
}

function ModalDescription({ className, ...props }: ComponentPropsWithoutRef<typeof Dialog.Description>) {
	return <Dialog.Description className={clsx(styles.modal_description, className)} {...props} />;
}

export const Modal = Object.assign(ModalRoot, {
	Title: ModalTitle,
	Description: ModalDescription,
});
