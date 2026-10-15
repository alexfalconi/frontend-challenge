// icons
import { FiImage } from "react-icons/fi";

// components
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Forms";

// styles
import styles from "./AvatarField.module.scss";

export function AvatarField() {
	return (
		<Field label="Avatar">
			<div className={styles.avatar} role="group" aria-label="Avatar">
				<span className={styles.avatar_preview}>
					<FiImage size={24} aria-hidden="true" />
				</span>

				<Button text="Alterar" size="small" />

				<button type="button" className={styles.avatar_remove}>
					Remover
				</button>
			</div>
		</Field>
	);
}
