import { WidgetType } from "../enums/WidgetType";
import { BaseWidgetProps } from "../types/WidgetProps";
import Widget from "../Widget";

interface TextProps extends BaseWidgetProps {
  text?: string;
}


export default class Text extends Widget {
  text: string;
  constructor(props?: TextProps) {
    super({
      ...props,
      type: WidgetType.TEXT,
    })
    this.text = props?.text || "Text " + this.getWidgetCount()
  }

  render(): JSX.Element {
    return <h1
      style={this.getWidgetStyleCss()}
      widget-type={this.type}
      id={this.id}
    >
      {this.text}
    </h1>
  }
}