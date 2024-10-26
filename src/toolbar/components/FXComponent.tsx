import { FC, ReactElement } from "react";

interface OwnProps {
  icon: ReactElement;
  title: string;
}

const FXComponent: FC<OwnProps> = ({
  icon, title
}) => {
  return (
    <button
      className="flex flex-col items-center justify-center p-2 h-20 border rounded hover:bg-gray-50 gap-y-1">
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default FXComponent;