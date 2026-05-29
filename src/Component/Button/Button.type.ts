import type { ButtonHTMLAttributes } from "react";

type ButtonMode = "Primary" | "Secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  mode: ButtonMode;
}
