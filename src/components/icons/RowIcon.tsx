import { IconProps } from "./utils/IconProps";

export const RowIcon: React.FC<IconProps> = ({
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
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="8" y1="4" x2="8" y2="20" />
    <line x1="14" y1="4" x2="14" y2="20" />
  </svg>
);
