import { PtagProps } from "./PtagProps";
import styles from "./Ptag.module.css";
import cn from "classnames";

function Ptag({ size, children, className, ...props }: PtagProps) {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
export default Ptag;
