import WidgetBuilder from './builder/WidgetBuilder';
import { DropPosition } from './enums/DropPosition';
import { WIDGETS_WITH_CHILD, WidgetType } from './enums/WidgetType';
import { WidgetProps } from './types/WidgetProps';
import Widget from "./Widget";

export interface WidgetWithChildrenProps extends WidgetProps {
  children: Widget[];
}

export default abstract class WidgetWithChildren extends Widget {
  children: Widget[];
  private currentWidgetIndex = -1;

  constructor(props?: WidgetWithChildrenProps) {
    super(props);
    this.children = props?.children ?? [];
  }

  private insertBefore(widget: Widget) {
    if (this.currentWidgetIndex !== -1) this.children.splice(this.currentWidgetIndex, 0, widget);
  }

  private insertAfter(widget: Widget) {
    if (this.currentWidgetIndex !== -1) this.children.splice(this.currentWidgetIndex + 1, 0, widget);
  }

  protected calculateDropPosition(e: React.DragEvent): DropPosition {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const horizontalThreshold = rect.height / 3;

    if (relativeY < horizontalThreshold) {
      return DropPosition.BEFORE;
    } else if (relativeY > rect.height - horizontalThreshold) {
      return DropPosition.AFTER;
    }
    return DropPosition.INSIDE;
  }

  protected onDragOver(event: React.DragEvent): void {
    const { clientX, clientY, currentTarget } = event;
    const rect = (currentTarget as HTMLElement).getBoundingClientRect();
    const positionX = (clientX - rect.left) / rect.width;
    const positionY = (clientY - rect.top) / rect.height;
    const position = this.type === WidgetType.ROW ? positionX : positionY;
    this.currentWidgetIndex = this.getCurrentWidgetIndex(event);

    if (position < 0.3) {
      this.dropPosition = DropPosition.BEFORE;
    } else if (position > 0.7) {
      this.dropPosition = DropPosition.AFTER;
    } else if (position >= 0.3 && position <= 0.7 && this.canAcceptChild()) {
      this.dropPosition = DropPosition.INSIDE;
    }
  }

  handleDragOver(event: React.DragEvent): void {
    super.handleDragOver(event);
    const { clientX, clientY, target } = event;
    const rect = (target as HTMLElement).getBoundingClientRect();
    const positionX = (clientX - rect.left) / rect.width;
    const positionY = (clientY - rect.top) / rect.height;
    const position = this.type === WidgetType.ROW ? positionX : positionY;
    this.currentWidgetIndex = this.getCurrentWidgetIndex(event);

    if (this.currentWidgetIndex === -1) {
      this.dropPosition = DropPosition.INSIDE;
      return;
    }

    if (position < 0.3 && !!this.children.length) {
      this.dropPosition = DropPosition.BEFORE;
    } else if (position > 0.7) {
      this.dropPosition = DropPosition.AFTER;
    } else if (position >= 0.3 && position <= 0.7 && this.canAcceptChild()) {
      const widget = this.children[this.currentWidgetIndex];
      const canHaveChild = !!widget.type && WIDGETS_WITH_CHILD.includes(widget.type);
      console.log(canHaveChild);

      this.dropPosition = DropPosition.INSIDE;
    }

    console.log(this.dropPosition, this.currentWidgetIndex);

  }

  handleDrop(e: React.DragEvent): void {
    super.handleDrop(e, true);
    const widgetType = e.dataTransfer.getData('data') as WidgetType;
    const widget = WidgetBuilder.build(widgetType);
    switch (this.dropPosition) {
      case DropPosition.AFTER:
        this.insertAfter(widget);
        break;
      case DropPosition.BEFORE:
        this.insertBefore(widget);
        break;
      case DropPosition.INSIDE:
        this.children.push(widget);
        break;
    }
    this.dropPosition = DropPosition.NONE;
    this.notifyUpdate();
  }

  onDrop(event: DragEvent, draggedWidget: Widget): void {
    switch (this.dropPosition) {
      case DropPosition.AFTER:
        return this.insertAfter(draggedWidget);
      case DropPosition.BEFORE:
        return this.insertBefore(draggedWidget);
      default:
        break;
    }
  }

  handleChildOver() {

  }

  private getCurrentWidgetIndex(event: React.DragEvent): number {
    const targetElement = event.target as HTMLElement;
    return this.children.findIndex(child => {
      const childElement = document.getElementById(child.id);
      return childElement === targetElement;
    });
  }

  abstract render(): JSX.Element;
}