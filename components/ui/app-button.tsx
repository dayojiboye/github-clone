import type { ButtonRootProps } from "heroui-native";
import { Button } from "heroui-native";
import { tv, type VariantProps } from "tailwind-variants";

const appButtonVariants = tv({
	base: "rounded-md",
	variants: {
		variant: {
			primary: "bg-blue-500",
			secondary: "bg-gray-200",
			danger: "bg-red-500",
			outline: "bg-surface border border-border",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

const appButtonLabelVariants = tv({
	base: "font-semibold",
	variants: {
		variant: {
			primary: "text-white",
			secondary: "text-gray-800",
			danger: "text-white",
			outline: "text-accent",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

type AppButtonVariants = VariantProps<typeof appButtonVariants>;

interface AppButtonProps
	extends
		Omit<ButtonRootProps, "className" | "variant" | "feedbackVariant" | "animation">,
		AppButtonVariants {
	className?: string;
	labelClassName?: string;
}

export function AppButton({
	variant,
	className,
	labelClassName,
	children,
	...props
}: AppButtonProps) {
	return (
		<Button
			feedbackVariant="none"
			animation="disable-all"
			className={appButtonVariants({ variant, className })}
			{...props}
		>
			<Button.Label className={appButtonLabelVariants({ variant, className: labelClassName })}>
				{children}
			</Button.Label>
		</Button>
	);
}
