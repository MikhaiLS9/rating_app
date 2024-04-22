import { FooterProps } from "./Footer.props";
import { format } from "date-fns";
import styles from "./Footer.module.css";
import cn from "classnames";

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
