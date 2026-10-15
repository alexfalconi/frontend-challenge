import { createFileRoute } from "@tanstack/react-router";
import { ProfileWallets } from "../pages/ProfileWallets";

export const Route = createFileRoute("/perfil/carteiras")({
	component: ProfileWallets,
});
