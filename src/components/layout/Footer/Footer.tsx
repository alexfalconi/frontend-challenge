// tanstack
import { Link } from "@tanstack/react-router";

// images
import logo from "@/assets/images/logo.svg";

// icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// components
import { Button } from "@/components/ui/Button";

// styles
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="row">
				<div className="col">
					<div className={styles.footer_bkg}>
						<div className={styles.footer_top}>
							<div className={styles.footer_box} data-circle="W">
								<strong>Segurança da carteira</strong>
								<p>Proteja sua carteira e colecione arte digital verificada com confiança.</p>
							</div>

							<div className={styles.footer_box} data-circle="C">
								<strong>Criadores em destaque</strong>
								<p>
									Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.
								</p>
							</div>

							<div className={styles.footer_box} data-circle="D">
								<strong>Alertas de lançamentos</strong>
								<p>
									Receba calendários de cunhagem, novidades de listas de acesso e análises do
									mercado.
								</p>
							</div>

							<div className={styles.footer_newsletter}>
								<strong>Antecipe-se ao próximo lançamento</strong>
								<form action="">
									<input type="email" placeholder="digite seu e-mail..." />
									<Button text="Enviar" size="medium" />
								</form>
								<p>
									Receba lançamentos selecionados, histórias de criadores e novidades do mercado.
								</p>
							</div>
						</div>

						<div className={styles.footer_middle}>
							<Link to="/">
								<img src={logo} alt="" />
							</Link>
							<p>Feito para colecionadores, criadores e cultura</p>
							<a href="mailto:contato@email.com">contato@email.com</a>
							<a href="tel:551140028922">+55 11 4002 8922</a>
						</div>

						<div className={styles.footer_bottom}>
							<div className={styles.footer_menu}>
								<strong>Meu perfil</strong>
								<ul>
									<li>
										<Link to="/">Meu perfil</Link>
									</li>
									<li>
										<Link to="/">Minha coleção</Link>
									</li>
									<li>
										<Link to="/">Atividade</Link>
									</li>
									<li>
										<Link to="/">Estúdio do criador</Link>
									</li>
									<li>
										<Link to="/">Lista de interesse</Link>
									</li>
								</ul>
							</div>

							<div className={styles.footer_menu}>
								<strong>Central de ajuda</strong>
								<ul>
									<li>
										<Link to="/">Central de ajuda</Link>
									</li>
									<li>
										<Link to="/">Como comprar NFTs</Link>
									</li>
									<li>
										<Link to="/">Carteira e segurança</Link>
									</li>
									<li>
										<Link to="/">Política do mercado</Link>
									</li>
									<li>
										<Link to="/">Denunciar item</Link>
									</li>
								</ul>
							</div>

							<div className={styles.footer_menu}>
								<strong>Coleções</strong>
								<ul>
									<li>
										<Link to="/">Arte digital</Link>
									</li>
									<li>
										<Link to="/">Fotografia</Link>
									</li>
									<li>
										<Link to="/">Música</Link>
									</li>
									<li>
										<Link to="/">Arte 3D</Link>
									</li>
									<li>
										<Link to="/">Utilidade</Link>
									</li>
								</ul>
							</div>

							<div className={styles.footer_social}>
								<strong>Redes sociais</strong>
								<div className={styles.footer_social_networks}>
									<Link to="/">
										<FaFacebookF />
									</Link>
									<Link to="/">
										<FaInstagram />
									</Link>
									<Link to="/">
										<FaTwitter />
									</Link>
									<Link to="/">
										<FaLinkedinIn />
									</Link>
									<Link to="/">
										<FaYoutube />
									</Link>
								</div>
								<strong>Carteiras compatíveis</strong>
								<div className={styles.footer_social_wallet}>
									METAMASK • WALLETCONNECT • COINBASE
								</div>
							</div>
						</div>
					</div>

					<div className={styles.footer_copy}>© 2026 Kurio. Propriedade digital para todos.</div>
				</div>
			</div>
		</footer>
	);
}
