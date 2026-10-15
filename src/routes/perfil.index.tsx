import { createFileRoute } from "@tanstack/react-router";
import { ProfileData } from "../pages/ProfileData";

export const Route = createFileRoute("/perfil/")({
	component: ProfileData,
});
