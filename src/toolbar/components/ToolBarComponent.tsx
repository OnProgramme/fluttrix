// @flow strict

import { ReactElement } from "react";
import { ColumnIcon } from "../../components/icons/ColumnIcon";
import { ContainerIcon } from "../../components/icons/ContainerIcon";
import { ImageIcon } from "../../components/icons/ImageIcon";
import { ListViewIcon } from "../../components/icons/ListViewIcon";
import { RowIcon } from "../../components/icons/RowIcon";
import FXComponent from "./FXComponent";

interface FXElementItem {
  title: string;
  icon: ReactElement;
}


const elemens: FXElementItem[] = [
  {
    title: "ListView",
    icon: <ListViewIcon />
  },
  {
    title: "Image",
    icon: <ImageIcon />
  },
  {
    title: "Container",
    icon: <ContainerIcon />
  },
  {
    title: "Column",
    icon: <ColumnIcon />
  },
  {
    title: "Row",
    icon: <RowIcon />
  }
]


const ToolBarComponent = () => {
  return (
    <div className='w-full max-w-[350px] h-full p-4'>
      <div className="grid grid-cols-2 gap-4">
        {
          elemens.map((el, index) => {
            return <FXComponent
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