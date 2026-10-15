// Valores em ETH usam ponto como separador decimal (ex.: 1.19 ETH)
export function formatEth(value: number, digits: number = 2): string {
	return value.toFixed(digits);
}
