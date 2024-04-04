import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: "primary" | "ghost";
  arrow? : 'up' | 'down' | 'none'
  children: ReactNode;
}
