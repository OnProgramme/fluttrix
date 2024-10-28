import { WidgetType } from "../enums/WidgetType";
import { BaseWidgetProps } from "../types/WidgetProps";
import Widget from "../Widget";

interface InputProps extends BaseWidgetProps {
  text?: string;
}


export default class Button extends Widget {
  text: string;
  constructor(props?: InputProps) {
    super({
      ...props,
      type: WidgetType.BUTTON,
    })
    this.text = props?.text || "Button " + this.getWidgetCount()
  }

  render(): JSX.Element {
    return <button
      // style={this.getWidgetStyleCss()}
      widget-type={this.type}
      id={this.id}
      className="border h-11 w-full bg-blue-500 rounded text-white"
    >
      {this.text}
    </button>
  }
}