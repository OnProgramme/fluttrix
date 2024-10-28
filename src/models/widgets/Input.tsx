import { WidgetType } from "../enums/WidgetType";
import { BaseWidgetProps } from "../types/WidgetProps";
import Widget from "../Widget";

interface InputProps extends BaseWidgetProps {

}


export default class Input extends Widget {
  constructor(props?: InputProps) {
    super({
      ...props,
      type: WidgetType.INPUT,
    })
  }

  render(): JSX.Element {
    return <input
      // style={this.getWidgetStyleCss()}
      id={this.id}
      type="text"
      className="border h-11 w-full px-2"
    />
  }
}