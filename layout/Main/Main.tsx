import { MainProps } from "./MainProps";

const Main : React.FC<MainProps>= ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Main;
