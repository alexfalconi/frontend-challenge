import { clsx } from "clsx";
import { Fragment } from "react/jsx-runtime";

// components
import { ACarousel } from "@/components/ui/ACarousel";
import { Card, CardBlog, CardSale } from "@/components/ui/Cards";

// styles
import styles from "./CardList.module.scss";

type CardType = "nft" | "sale" | "blog";

type Props = {
	image?: string;
	carrousel?: boolean;
	limit?: number;
	grid?: number;
	type?: CardType;
};

export function CardList({ carrousel, image, limit = 9, grid = 4, type = "nft" }: Props) {
	const items = Array.from({ length: limit }, (_, i) => i);

	const renderCard = () => {
		switch (type) {
			case "sale":
				return <CardSale />;
			case "blog":
				return <CardBlog />;
			default:
				return <Card image={image} />;
		}
	};

	if (carrousel) {
		return (
			<div className={styles.card_list}>
				<div className="row">
					<div className="col">
						<ACarousel
							dots
							dotsBlock
							swipeable
							desktopBreakpointItems={4}
							tabletBreakpointItems={3}
							mobileBreakpointItems={1}>
							{items.map((i) => (
								<Fragment key={i}>{renderCard()}</Fragment>
							))}
						</ACarousel>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.card_list}>
			<div className={clsx("row", styles.row_gap_v)}>
				{items.map((i) => (
					<div className={clsx("col", `md-${grid}`, "sm-6")} key={i}>
						{renderCard()}
					</div>
				))}
			</div>
		</div>
	);
}
