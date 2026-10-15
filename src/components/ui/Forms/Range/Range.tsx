import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import styles from "./Range.module.scss";
import { Button } from "../../Button";

export interface PriceRangeValue {
	min: number;
	max: number;
}

interface PriceRangeProps {
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: [number, number];
	onApply?: (range: PriceRangeValue) => void;
}

const formatEth = (value: number): string =>
	value.toLocaleString("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

export function Range({
	min = 0,
	max = 15,
	step = 0.01,
	defaultValue = [0.02, 12.3],
	onApply,
}: PriceRangeProps) {
	const [value, setValue] = useState<number[]>(defaultValue);

	return (
		<section className={styles.range}>
			<Slider.Root
				className={styles.range_slider}
				min={min}
				max={max}
				step={step}
				minStepsBetweenThumbs={1}
				value={value}
				onValueChange={setValue}>
				<Slider.Track className={styles.range_slider_track}>
					<Slider.Range className={styles.range_slider_bar} />
				</Slider.Track>
				<Slider.Thumb className={styles.range_slider_thumb} aria-label="Preço mínimo" />
				<Slider.Thumb className={styles.range_slider_thumb} aria-label="Preço máximo" />
			</Slider.Root>

			<p className={styles.range_label} aria-live="polite">
				Preço: {formatEth(value[0])} - {formatEth(value[1])} ETH
			</p>

			<Button text="Aplicar" onClick={() => onApply?.({ min: value[0], max: value[1] })} />
		</section>
	);
}
