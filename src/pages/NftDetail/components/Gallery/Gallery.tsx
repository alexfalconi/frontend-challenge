import { clsx } from "clsx";

// react
import { useState } from "react";

// icons
import { FiSearch } from "react-icons/fi";

// styles
import styles from "./Gallery.module.scss";

type Props = {
	images: string[];
	alt?: string;
};

export function Gallery({ images, alt = "" }: Props) {
	const [active, setActive] = useState<number>(0);

	return (
		<div className={styles.gallery}>
			<ul className={styles.gallery_thumbs}>
				{images.map((src, i) => (
					<li key={i}>
						<button
							type="button"
							className={clsx(styles.gallery_thumb, i === active && styles.gallery_thumb_active)}
							aria-label={`Ver imagem ${i + 1}`}
							aria-pressed={i === active}
							onClick={() => setActive(i)}>
							<img src={src} alt="" />
						</button>
					</li>
				))}
			</ul>

			<div className={styles.gallery_main}>
				<img src={images[active]} alt={alt} />
				<button type="button" className={styles.gallery_zoom} aria-label="Ampliar imagem">
					<FiSearch size={20} aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
