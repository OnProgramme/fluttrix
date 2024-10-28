import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import PrefferedSizeWidget from "./PrefferedSize";
import Widget from "./Widget";

interface AppBarProps {
  title?: string;
  actions?: Widget[];
  centerTitle?: boolean;
}

export class AppBar implements PrefferedSizeWidget {
  title?: string;
  actions?: Widget[];
  centerTitle: boolean;
  constructor(props?: AppBarProps) {
    this.title = props?.title;
    this.actions = props?.actions;
    this.centerTitle = props?.centerTitle ?? false;
  }
  render(): ReactElement {
    return <div
      style={{}}
      className={
        twMerge(
          "min-h-[60px] w-full bg-blue-500"
        )
      }
    >

    </div>
  }
}