import { IconProps } from "./utils/IconProps";

export const ContainerIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  className = ""
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="7" y="7" width="10" height="10" rx="1" strokeDasharray="2 2" />
  </svg>
);