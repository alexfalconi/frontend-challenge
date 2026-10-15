import clsx from "clsx";

// react
import { useEffect, useRef, useState } from "react";

// tanstack
import { Link } from "@tanstack/react-router";

// images
import logo from "@/assets/images/logo.svg";

// icons
import { FiSearch, FiShoppingCart, FiLogIn } from "react-icons/fi";

// components
import { Button } from "@/components/ui/Button";
import { AuthModal } from "@/components/modals";
import { Burger } from "@/components/ui/Burger";

// styles
import styles from "./Header.module.scss";
import { Input } from "@/components/ui/Forms";

export function Header() {
	const [authOpen, setAuthOpen] = useState(false);
	const [scroll, setScroll] = useState<boolean>(false);
	const [openBurger, setOpenBurger] = useState<boolean>(false);

	const sentinelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = sentinelRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(([entry]) => setScroll(!entry.isIntersecting));
		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	// função para fechar/abrir menu e burger
	const handleBurger = () => {
		setOpenBurger(!openBurger);
	};

	return (
		<>
			<div ref={sentinelRef} style={{ height: 1 }} aria-hidden />
			<header className={clsx(styles.header, scroll && styles.header_full)}>
				<div className={styles.header_inner}>
					<Link to="/" className={styles.header_logo}>
						<img src={logo} alt="Kurio" />
					</Link>
					<nav className={clsx(styles.header_nav, openBurger && styles.header_nav_open)}>
						<nav className={styles.header_nav_search}>
							<Input placeholder="Explorar coleções" />
							<Button icon={FiSearch} size="medium" />
						</nav>
						<Link to="/">Início</Link>
						<Link to="/">Mercado</Link>
						<Link to="/">Criadores</Link>
						<Link to="/">Aprenda</Link>
					</nav>
					<div className={styles.header_action}>
						<div className={styles.header_action_icon}>
							<FiSearch size={25} />
						</div>
						<Link to="/carrinho" className={styles.header_action_icon} data-count="3">
							<FiShoppingCart size={25} />
						</Link>
						<Button text="Entrar" icon={FiLogIn} onClick={() => setAuthOpen(true)} />
						<Burger onClick={handleBurger} open={openBurger} />
					</div>
				</div>
			</header>

			<AuthModal open={authOpen} onOpenChange={setAuthOpen} />
		</>
	);
}
