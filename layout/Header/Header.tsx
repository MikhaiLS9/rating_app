import { HeaderProps } from "./Header.props";

const Header: React.FC<HeaderProps> = (props) => {
  // Реструктуризация свойств для их использования в компоненте, если необходимо
  // const { /* ваши свойства */ } = props;

  return (
    <div {...props}> {/* Передаем props в div, если они есть */}
      Header
    </div>
  );
}

export default Header;
