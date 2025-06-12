import {
  Camera,
  Search,
  Menu,
  X,
  CircleUserRound,
  SendHorizontal,
  Sun,
  Moon,
  Circle,
  Share,
} from "lucide-react";

const Icons = ({
  name,
  className = "text-sm",
  size,
  strokeWidth = "1",
  ...props
}) => {
  const icons = {
    camera: Camera,
    search: Search,
    menu: Menu,
    close: X,
    userAvatar: CircleUserRound,
    send: SendHorizontal,
    dark: Moon,
    light: Sun,
    circle: Circle,
    share: Share,
  };
  const Icon = icons[name];
  if (!Icon) return null;
  return (
    <Icon
      className={className}
      size={size}
      {...props}
      strokeWidth={strokeWidth}
    />
  );
};
export default Icons;
