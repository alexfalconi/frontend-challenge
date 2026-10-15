// components
import { Button } from "@/components/ui/Button";
import { Field, Input, PasswordInput, Select } from "@/components/ui/Forms";
import { AvatarField } from "./components/AvatarField/AvatarField";

// styles
import styles from "./ProfileData.module.scss";

const ensDomains = [{ value: "eth", label: ".eth" }];

export function ProfileData() {
	return (
		<form className={styles.form} onSubmit={(event) => event.preventDefault()}>
			<h2 className={styles.form_title}>Perfil do colecionador</h2>

			<div className={styles.form_grid}>
				<Field label="Nome de exibição" htmlFor="display-name" required>
					<Input id="display-name" type="text" />
				</Field>

				<Field label="Nome de usuário" htmlFor="username" required>
					<Input id="username" type="text" />
				</Field>

				<Field label="E-mail" htmlFor="email" required>
					<Input id="email" type="email" />
				</Field>

				<Field label="Nome ENS" htmlFor="ens-domain" required>
					<div className={styles.form_ens}>
						<Select
							id="ens-domain"
							variant="small"
							options={ensDomains}
							defaultValue="eth"
							aria-label="Domínio ENS"
						/>
						<Input type="text" aria-label="Nome ENS" />
					</div>
				</Field>

				<Field label="Apelido da carteira" htmlFor="wallet-nickname" required>
					<Input id="wallet-nickname" type="text" />
				</Field>

				<AvatarField />
			</div>

			<h3 className={styles.form_subtitle}>Alterar senha</h3>

			<div className={styles.form_password}>
				<Field label="Senha atual" htmlFor="current-password">
					<PasswordInput id="current-password" autoComplete="current-password" />
				</Field>

				<Field label="Nova senha" htmlFor="new-password">
					<PasswordInput id="new-password" autoComplete="new-password" />
				</Field>

				<Field label="Confirmar nova senha" htmlFor="confirm-password">
					<PasswordInput id="confirm-password" autoComplete="new-password" />
				</Field>
			</div>

			<div className={styles.form_action}>
				<Button text="Salvar" size="medium" type="submit" />
			</div>
		</form>
	);
}
