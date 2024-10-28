import { generateRandomImage } from "../../shared/helpers/generateRandomImage";
import { WidgetType } from "../enums/WidgetType";
import { BaseWidgetProps } from "../types/WidgetProps";
import Widget from "../Widget";

interface ImageProps extends BaseWidgetProps {
  src: string;
}


export default class Image extends Widget {
  src: string;
  constructor(props?: ImageProps) {
    super({
      ...props,
      type: WidgetType.IMAGE,
    })
    this.src = props?.src || generateRandomImage()
  }

  render(): JSX.Element {
    return <img
      style={this.getWidgetStyleCss()}
      widget-type={this.type}
      id={this.id}
      src={this.src}
    />
  }
}