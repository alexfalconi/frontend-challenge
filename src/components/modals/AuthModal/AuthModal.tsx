// tanstack
import { Link } from "@tanstack/react-router";

// radix
import { Tabs } from "radix-ui";

// icons
import type { IconType } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// components
import { Button } from "@/components/ui/Button";
import { Input, PasswordInput } from "@/components/ui/Forms";
import { Modal } from "@/components/ui/Modal";

// styles
import styles from "./AuthModal.module.scss";

type AuthTab = "signin" | "signup";

type Props = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	defaultTab?: AuthTab;
};

// o ícone do Facebook mantém a cor da marca, como no layout
const FacebookIcon: IconType = (props) => <FaFacebookF {...props} color="#3b5998" />;

function SocialLogin() {
	return (
		<>
			<div className={styles.auth_divider}>
				<span>Ou continue com</span>
			</div>

			<div className={styles.auth_social}>
				<Button text="Continuar com Google" size="medium" color="dark" icon={FcGoogle} fullWidth />
				<Button
					text="Continuar com Facebook"
					size="medium"
					color="dark"
					icon={FacebookIcon}
					fullWidth
				/>
			</div>
		</>
	);
}

export function AuthModal({ open, onOpenChange, defaultTab = "signin" }: Props) {
	return (
		<Modal open={open} onOpenChange={onOpenChange}>
			<Modal.Title srOnly>Entrar ou criar conta</Modal.Title>

			<Tabs.Root defaultValue={defaultTab} className={styles.auth}>
				<Tabs.List aria-label="Acesso" className={styles.auth_tabs}>
					<Tabs.Trigger value="signin" className={styles.auth_tab}>
						Entrar
					</Tabs.Trigger>
					<Tabs.Trigger value="signup" className={styles.auth_tab}>
						Criar conta
					</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="signin">
					<Modal.Description>
						Entre para gerenciar sua carteira, coleção e perfil de criador.
					</Modal.Description>

					<form className={styles.auth_form}>
						<Input type="email" placeholder="contato@email.com" aria-label="E-mail" />
						<PasswordInput placeholder="Senha" aria-label="Senha" />

						<Link to="/" className={styles.auth_forgot}>
							Esqueceu a senha?
						</Link>

						<Button text="Entrar" size="medium" type="submit" fullWidth to="/perfil" />
					</form>

					<SocialLogin />
				</Tabs.Content>

				<Tabs.Content value="signup">
					<Modal.Description>
						Crie seu perfil de colecionador e conecte uma carteira quando quiser.
					</Modal.Description>

					<form className={styles.auth_form} onSubmit={(event) => event.preventDefault()}>
						<Input type="text" placeholder="Nome de usuário" aria-label="Nome de usuário" />
						<Input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
						<PasswordInput placeholder="Senha" aria-label="Senha" />
						<Input type="password" placeholder="Confirmar senha" aria-label="Confirmar senha" />

						<Button text="Criar conta" size="medium" type="submit" fullWidth />
					</form>

					<SocialLogin />
				</Tabs.Content>
			</Tabs.Root>
		</Modal>
	);
}
