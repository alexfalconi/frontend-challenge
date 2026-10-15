import { Outlet, createRootRoute } from "@tanstack/react-router";

// assets
import "@/styles/main.scss";
import "@fontsource-variable/roboto-mono";

// components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
