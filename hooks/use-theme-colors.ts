import { useCSSVariable, useUniwind } from "uniwind";

function useColor(variable: string, darkFallback: string, lightFallback: string): string {
	const { theme } = useUniwind();
	const value = useCSSVariable(variable);
	const fallback = theme === "dark" ? darkFallback : lightFallback;
	return String(value ?? fallback);
}

export function useThemeColors() {
	const background = useColor("--background", "oklch(12% 0.005 285.823)", "oklch(0.9702 0 0)");
	const surface = useColor("--surface", "oklch(0.2103 0.0059 285.89)", "#FFFFFF");
	const border = useColor("--border", "oklch(28% 0.006 286.033)", "oklch(90% 0.004 286.32)");
	const accent = useColor("--accent", "oklch(0.6204 0.195 253.83)", "oklch(0.6204 0.195 253.83)");
	const foreground = useColor("--foreground", "oklch(0.9911 0 0)", "oklch(0.2103 0.0059 285.89)");
	const muted = useColor("--muted", "oklch(70.5% 0.015 286.067)", "oklch(0.5517 0.0138 285.94)");

	return { background, surface, border, accent, foreground, muted };
}
