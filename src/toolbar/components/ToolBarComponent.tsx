// @flow strict

import React, { FC, ReactElement } from "react";
import { ColumnIcon } from "../../components/icons/ColumnIcon";
import { ContainerIcon } from "../../components/icons/ContainerIcon";
import { ImageIcon } from "../../components/icons/ImageIcon";
import { ListViewIcon } from "../../components/icons/ListViewIcon";
import { RowIcon } from "../../components/icons/RowIcon";
import WidgetBuilder from "../../models/builder/WidgetBuilder";
import { WidgetType } from "../../models/enums/WidgetType";
import Widget from "../../models/Widget";
import FXComponent from "./FXComponent";

interface FXElementItem {
  title: string;
  icon: ReactElement;
  type: WidgetType;
}


const elemens: FXElementItem[] = [
  {
    title: "ListView",
    icon: <ListViewIcon />,
    type: WidgetType.LISTVIEW,
  },
  {
    title: "Image",
    icon: <ImageIcon />,
    type: WidgetType.IMAGE,
  },
  {
    title: "Container",
    icon: <ContainerIcon />,
    type: WidgetType.CONTAINER,
  },
  {
    title: "Column",
    icon: <ColumnIcon />,
    type: WidgetType.COLUMN,
  },
  {
    title: "Row",
    icon: <RowIcon />,
    type: WidgetType.ROW,
  },
  {
    title: "TextField",
    icon: <ContainerIcon />,
    type: WidgetType.INPUT,
  },
  {
    title: "Bouton",
    icon: <ContainerIcon />,
    type: WidgetType.BUTTON,
  },
  {
    title: "Text",
    icon: <ContainerIcon />,
    type: WidgetType.TEXT,
  }
]

interface OwnProps {
  onDragStar: (event: React.DragEvent<HTMLButtonElement>, widget: Widget) => void;
}


const ToolBarComponent: FC<OwnProps> = ({
  onDragStar
}) => {
  return (
    <div className='w-full max-w-[350px] h-full p-4'>
      <div className="grid grid-cols-2 gap-4">
        {
          elemens.map((el, index) => {
            return <FXComponent
              onDragStar={(e) => onDragStar(e, WidgetBuilder.build(el.type))}
              key={'fx-component-' + index}
              title={el.title}
              icon={el.icon}
            />
          })
        }
      </div>
    </div>
  );
};

export default ToolBarComponent;