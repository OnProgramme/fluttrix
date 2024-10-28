import React from "react";
import { WidgetType } from "./enums/WidgetType";
import Widget from "./Widget";
import WidgetWithChildren, { WidgetWithChildrenProps } from "./WidgetWithChildren";

interface ColumnProps extends WidgetWithChildrenProps {
  children: Widget[]
}

export default class Column extends WidgetWithChildren {
  constructor(props?: ColumnProps) {
    super({
      children: props?.children || [],
      type: WidgetType.COLUMN,
    });
    this.children = props?.children || [];
  }



  render(): JSX.Element {
    return (
      <div
        id={this.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          ...super.getWidgetStyleCss(),
          padding: '4px'
        }}
        onDragOver={(e) => this.handleDragOver(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDrop={(e) => this.handleDrop(e)}
        className="h-full bg-gray-100"
      >
        {this.children.map((child, index) => (
          <React.Fragment
            key={index}>
            {child.render()}
          </React.Fragment>
        ))}
      </div>
    );
  }
}