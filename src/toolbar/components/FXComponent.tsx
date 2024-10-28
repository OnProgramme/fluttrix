import React, { FC, ReactElement } from "react";

interface OwnProps {
  icon: ReactElement;
  title: string;
  onDragStar: (event: React.DragEvent<HTMLButtonElement>) => void;
}

const FXComponent: FC<OwnProps> = ({
  icon, title,
  onDragStar
}) => {
  return (
    <button
      draggable
      onDragStart={(e) => onDragStar(e)}
      className="flex flex-col items-center justify-center p-2 h-20 border rounded hover:bg-gray-50 gap-y-1">
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default FXComponent;