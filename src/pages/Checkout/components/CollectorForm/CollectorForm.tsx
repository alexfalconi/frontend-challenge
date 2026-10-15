// components
import { Field, Input, Radio, Select, Textarea } from "@/components/ui/Forms";

// styles
import styles from "./CollectorForm.module.scss";

const networks = [
	{ value: "ethereum", label: "Ethereum" },
	{ value: "polygon", label: "Polygon" },
	{ value: "base", label: "Base" },
];

const wallets = [
	{ value: "metamask", label: "MetaMask" },
	{ value: "coinbase", label: "Coinbase Wallet" },
	{ value: "walletconnect", label: "WalletConnect" },
];

const ensDomains = [{ value: "eth", label: ".eth" }];

export function CollectorForm() {
	return (
		<form className={styles.form}>
			<h2 className={styles.form_title}>Perfil do colecionador</h2>

			<div className={styles.form_grid}>
				<Field label="Nome de exibição" htmlFor="display-name" required>
					<Input id="display-name" type="text" />
				</Field>

				<Field label="Nome de usuário" htmlFor="username" required>
					<Input id="username" type="text" />
				</Field>

				<Field label="Rede" htmlFor="network" required>
					<Select id="network" placeholder="Selecione uma rede" options={networks} />
				</Field>

				<Field label="Nome do perfil" htmlFor="profile-name" required>
					<Input id="profile-name" type="text" />
				</Field>

				<Field label="Endereço da carteira" htmlFor="wallet-address" required>
					<Input
						id="wallet-address"
						type="text"
						className={styles.form_input_indent}
						placeholder="Endereço 0x da carteira"
					/>
				</Field>

				<Field>
					<Input
						type="text"
						className={styles.form_input_indent}
						placeholder="ENS ou carteira secundária (opcional)"
						aria-label="ENS ou carteira secundária (opcional)"
					/>
				</Field>

				<Field label="Tipo de carteira" htmlFor="wallet-type" required>
					<Select id="wallet-type" placeholder="Selecione uma carteira" options={wallets} />
				</Field>

				<Field label="Código de indicação" htmlFor="referral-code" required>
					<Input id="referral-code" type="text" />
				</Field>

				<Field label="E-mail" htmlFor="email" required>
					<Input id="email" type="email" />
				</Field>

				<Field label="Nome ENS" htmlFor="ens-name" required>
					<Select id="ens-name" variant="small" options={ensDomains} defaultValue="eth" />
				</Field>

				<Radio name="other-wallet" value="yes" label="Usar outra carteira?" className={styles.form_full} />

				<Field label="Observação do colecionador (opcional)" htmlFor="notes">
					<Textarea id="notes" />
				</Field>
			</div>
		</form>
	);
}
