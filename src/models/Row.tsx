import React from "react";
import { WidgetType } from "./enums/WidgetType";
import Widget from "./Widget";
import WidgetWithChildren, { WidgetWithChildrenProps } from "./WidgetWithChildren";

interface RowProps extends WidgetWithChildrenProps {
  children: Widget[]
}

export default class Row extends WidgetWithChildren {
  children: Widget[];
  constructor(props?: RowProps) {
    super({
      children: props?.children || [],
      type: WidgetType.ROW,
    });
    this.children = props?.children || [];
  }

  render(): JSX.Element {
    return (
      <div
        id={this.id}
        style={{
          display: 'flex',
          flexDirection: 'row',
          ...super.getWidgetStyleCss(),
        }}
      >
        {this.children.map((child, index) => (
          <React.Fragment key={index}>{child.render()}</React.Fragment>
        ))}
      </div>
    );
  }
}