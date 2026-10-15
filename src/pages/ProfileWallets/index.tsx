// components
import { Button } from "@/components/ui/Button";
import { Field, Input, Radio, Select } from "@/components/ui/Forms";

// styles
import styles from "./ProfileWallets.module.scss";

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

export function ProfileWallets() {
	return (
		<>
			<section>
				<div className={styles.head}>
					<h2 className={styles.head_title}>Carteira principal</h2>
					<button type="button" className={styles.head_link}>
						Adicionar
					</button>
				</div>
				<p className={styles.head_text}>Estas carteiras ficam disponíveis no pagamento e para receber NFTs comprados.</p>

				{/* TODO: integrar com a API */}
				<form className={styles.form} onSubmit={(event) => event.preventDefault()}>
					<div className={styles.form_grid}>
						<Field label="Nome de exibição" htmlFor="display-name" required>
							<Input id="display-name" type="text" />
						</Field>

						<Field label="Apelido da carteira" htmlFor="wallet-nickname" required>
							<Input id="wallet-nickname" type="text" />
						</Field>

						<Field label="Rede" htmlFor="network" required>
							<Select id="network" placeholder="Selecione uma rede" options={networks} />
						</Field>

						<Field label="Nome do perfil" htmlFor="profile-name" required>
							<Input id="profile-name" type="text" />
						</Field>

						<Field label="Endereço da carteira" htmlFor="wallet-address" required>
							<Input id="wallet-address" type="text" placeholder="Endereço 0x da carteira" />
						</Field>

						<Field>
							<Input
								type="text"
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

						<Field label="Nome ENS" htmlFor="ens-domain" required>
							<div className={styles.form_ens}>
								<Select id="ens-domain" variant="small" options={ensDomains} defaultValue="eth" aria-label="Domínio ENS" />
								<Input type="text" aria-label="Nome ENS" />
							</div>
						</Field>
					</div>

					<div className={styles.form_action}>
						<Button text="Salvar carteira" size="medium" type="submit" />
					</div>
				</form>
			</section>

			<section className={styles.secondary}>
				<div className={styles.head}>
					<h2 className={styles.head_title}>Carteira secundária</h2>

					<div className={styles.head_actions}>
						<Radio name="same-wallet" value="yes" label="Igual à carteira principal" />
						<button type="button" className={styles.head_link}>
							Adicionar
						</button>
					</div>
				</div>
				<p className={styles.head_text}>Você ainda não adicionou uma carteira secundária.</p>
			</section>
		</>
	);
}
