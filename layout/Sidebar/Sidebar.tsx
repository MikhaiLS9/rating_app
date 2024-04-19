import { SidebarProps } from "./Sidebar.props";

const Sidebar: React.FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
