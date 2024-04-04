import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

import cn from "classnames";
import Image from "next/image";
// import { ChevronRight } from "lucide-react";

function Button({ children, arrow = "none", appearance, ...arg }: ButtonProps) {
  return (
    <>
      <button
        className={cn(styles.button, {
          [styles.primary]: appearance === "primary",
          [styles.ghost]: appearance === "ghost",
        })}
        {...arg}
      >
        {children}
        {arrow !== "none" && (
          <span
            className={cn(styles.arrow, {
              [styles.up]: arrow === "up",
              [styles.down]: arrow === "down",
            })}
          >
            {/* <ChevronRight
            className={cn(styles.arrow, {
              [styles.up]: arrow === "up",
              [styles.down]: arrow === "down",
            })}
          /> */}
            {/* <ChevronRight  size={12}/>
          
          */}
            <Image src="/Vector.svg" height={11} width={6} alt="arrow" />
          </span>
        )}
      </button>
    </>
  );
}

export default Button;
