import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  size?: "small" | "medium";
  href? : string
  color? : "red" | "green" | "ghost" | "grey"
}
