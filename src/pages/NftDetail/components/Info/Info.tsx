// react
import { useState } from "react";
import { clsx } from "clsx";

// tanstack
import { Link } from "@tanstack/react-router";

// utils
import { formatEth } from "@/utils/format";

// icons
import { FiHeart, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

// components
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Quantity } from "@/components/ui/Forms";

// styles
import styles from "./Info.module.scss";

type Props = {
	title: string;
	price: number;
	rating: number;
	reviews: number;
	description: string;
	editions: string[];
	defaultEdition?: string;
	tokenId: string;
	collection: string;
	attributes: string[];
};

export function Info({
	title,
	price,
	rating,
	reviews,
	description,
	editions,
	defaultEdition = editions[0],
	tokenId,
	collection,
	attributes,
}: Props) {
	const [edition, setEdition] = useState<string>(defaultEdition);
	const [quantity, setQuantity] = useState<number>(1);

	return (
		<div className={styles.info}>
			<h1 className={styles.info_title}>{title}</h1>

			<div className={styles.info_header}>
				<strong className={styles.info_price}>{formatEth(price)} ETH</strong>
				<Rating value={rating} label={`${reviews} avaliações de colecionadores`} />
			</div>

			<h2 className={styles.info_label}>Sobre este NFT:</h2>
			<p className={styles.info_text}>{description}</p>

			<h2 className={styles.info_label}>Edição:</h2>
			<div className={styles.info_edition} role="radiogroup" aria-label="Edição">
				{editions.map((item) => (
					<button
						key={item}
						type="button"
						role="radio"
						aria-checked={item === edition}
						className={clsx(
							styles.info_edition_item,
							item === edition && styles.info_edition_item_active,
						)}
						onClick={() => setEdition(item)}>
						{item}
					</button>
				))}
			</div>

			<div className={styles.info_buy}>
				<Quantity value={quantity} onChange={setQuantity} />
				<div className={styles.info_buy_actions}>
					<Button text="COMPRAR" size="medium" to="/carrinho" />
					<Button text="Favoritar" size="medium" color="outline" icon={FiHeart} />
				</div>
			</div>

			<ul className={styles.info_meta}>
				<li>
					<p>ID do token: {tokenId}</p>
				</li>
				<li>
					<p>Coleção: {collection}</p>
				</li>
				<li>
					<p>Atributos: {attributes.join(", ")}</p>
				</li>
			</ul>

			<div className={styles.info_share}>
				<h2 className={styles.info_label}>Compartilhar este NFT:</h2>
				<Link to="/" aria-label="Compartilhar no LinkedIn">
					<FaLinkedinIn size={18} />
				</Link>
				<Link to="/" aria-label="Compartilhar por e-mail">
					<FiMail size={18} />
				</Link>
				<Link to="/" aria-label="Compartilhar no Twitter">
					<FaTwitter size={18} />
				</Link>
			</div>
		</div>
	);
}
