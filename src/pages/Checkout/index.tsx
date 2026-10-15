// components
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CollectorForm } from "./components/CollectorForm/CollectorForm";
import { OrderSummary } from "./components/OrderSummary/OrderSummary";

// styles
import styles from "./Checkout.module.scss";

export function Checkout() {
	return (
		<section className={styles.checkout}>
			<div className="row">
				<div className="col">
					<div className={styles.checkout_breadcrumb}>
						<Breadcrumb
							items={[
								{ label: "Início", to: "/" },
								{ label: "Mercado", to: "/" },
								{ label: "Pagamento", to: "/pagamento" },
							]}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col md-8">
					<CollectorForm />
				</div>
				<div className="col md-4">
					<OrderSummary />
				</div>
			</div>
		</section>
	);
}
