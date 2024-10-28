import { twMerge } from "tailwind-merge";
import WidgetBuilder from "./builder/WidgetBuilder";
import { DropPosition } from "./enums/DropPosition";
import { WidgetType } from "./enums/WidgetType";
import PrefferedSizeWidget from "./PrefferedSize";
import { BaseWidgetProps } from "./types/WidgetProps";
import Widget from './Widget';

interface ScaffoldProps extends BaseWidgetProps {
  body?: Widget;
  appBar?: PrefferedSizeWidget;
}

export default class Scaffold extends Widget {

  private body?: Widget = undefined;
  private appBar?: PrefferedSizeWidget;

  constructor(props?: ScaffoldProps) {
    super({
      ...props,
      type: WidgetType.SCAFFOLD,
    });
    this.body = props?.body;
    this.appBar = props?.appBar;
  }

  setBody(body: Widget) {
    this.body = body;
    this.notifyUpdate()
  }

  get hasAppBar(): boolean {
    return !!this.appBar;
  }

  get hasBody(): boolean {
    return !!this.body;
  }

  handleDragOver(e: React.DragEvent): void {
    super.handleDragOver(e);
    // if (this.hasBody) return;
    this.dropPosition = DropPosition.INSIDE;
    this.notifyUpdate();
  }


  handleDrop(e: React.DragEvent): void {
    super.handleDrop(e)
    const widgetType = e.dataTransfer.getData('data') as WidgetType;
    const widget = WidgetBuilder.build(widgetType);
    // if (!widget || this.hasBody) return;
    this.setBody(widget);
  }

  get selectedClassName() {
    return this.dropPosition === DropPosition.INSIDE ? "border border-red-500" : ""
  }


  render(): JSX.Element {
    return (
      <div
        style={{
          ...super.getWidgetStyleCss(true),
        }}
        className="flex flex-col justify-between h-full"
        onDragOver={(e) => this.handleDragOver(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDrop={(e) => this.handleDrop(e)}
      >
        {this.appBar?.render()}
        <div className={
          twMerge(
            "w-full h-full",
            // className,
          )
        }>
          {this.body?.render()}
        </div>
      </div>
    );
  }
}