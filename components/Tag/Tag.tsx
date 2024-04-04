import { TagProps } from "./TagProps";
import styles from "./Tag.module.css";
import cn from "classnames";

function Tag({ size, children, className, color, href, ...props }: TagProps) {
  return (
    <span
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",

        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.ghost]: color === "ghost",
        [styles.grey]: color === "grey",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </span>
  );
}
export default Tag;
