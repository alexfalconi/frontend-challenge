// components
import { Menu } from "./components/Menu/Menu";

// tanstack
import { Outlet } from "@tanstack/react-router";

export function Profile() {
	return (
		<section>
			<div className="row">
				<div className="col md-3">
					<Menu />
				</div>

				<div className="col md-9">
					<Outlet />
				</div>
			</div>
		</section>
	);
}
