import { CSSProperties } from 'react';
import { IWidget } from './IWidget';
import { DropPosition } from './enums/DropPosition';
import { WIDGETS_WITH_CHILD, WidgetType } from './enums/WidgetType';
import WidgetEventEmitter from './events/WidgetEventEmitter';
import { PaddingAxes, PaddingSides, PaddingType, isPaddingAxes, isPaddingSides, isPaddingValue } from './types/PaddingType';
import { WidgetProps } from './types/WidgetProps';


export default abstract class Widget implements IWidget {
  width?: number;
  height?: number;
  padding?: PaddingType;
  type?: WidgetType;
  id: string;
  dropPosition: DropPosition = DropPosition.NONE;
  protected eventEmitter: WidgetEventEmitter;
  private listeners: Set<() => void> = new Set();


  constructor(props?: WidgetProps) {
    this.type = props?.type;
    this.height = props?.height;
    this.width = props?.width;
    this.padding = props?.padding;
    this.id = props?.id || crypto.randomUUID();
    this.eventEmitter = WidgetEventEmitter.getInstance();
    this.eventEmitter.subscribe(() => {
      this.notifyListeners();
    });
  }
  handleDragLeave(e: React.DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    this.dropPosition = DropPosition.NONE;
    this.notifyUpdate();
  }

  abstract render(): JSX.Element;

  handleDragOver(e: React.DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop(e: React.DragEvent, disableDrop?: boolean): void {
    e.preventDefault();
    e.stopPropagation();
    if (disableDrop) return;
    this.dropPosition = DropPosition.NONE;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  setPadding(padding: PaddingType): void {
    this.padding = padding;
  }

  protected getWidgetStyleCss(disableBorder?: boolean): CSSProperties {
    const p = this.padding || 0;
    let style: CSSProperties = {};

    if (isPaddingSides(p)) {
      const { horizontal = 0, vertical = 0 } = p as PaddingAxes;
      style = {
        padding: `${vertical}px ${horizontal}px`
      }
    }

    if (isPaddingAxes(p)) {
      const { top = 0, right = 0, bottom = 0, left = 0 } = p as PaddingSides;
      style = {
        padding: `${top}px ${right}px ${bottom}px ${left}px`
      }
    }

    if (isPaddingValue(p)) {
      style = {
        padding: `${p}px`,
      };
    }

    if (!disableBorder) {
      if (this.dropPosition === DropPosition.INSIDE) {
        style = {
          ...style,
          border: 'solid 2px #ef4444',
        }
      } else if (this.type === WidgetType.COLUMN && this.dropPosition === DropPosition.BEFORE) {
        style = {
          ...style,
          borderTop: 'solid 2px #ef4444',
        }
      } else if (this.type === WidgetType.COLUMN && this.dropPosition === DropPosition.AFTER) {
        style = {
          ...style,
          borderBottom: 'solid 2px #ef4444',
        }
      } else if (this.type === WidgetType.ROW && this.dropPosition === DropPosition.BEFORE) {
        style = {
          ...style,
          borderLeft: 'solid 2px #ef4444',
        }
      } else if (this.type === WidgetType.ROW && this.dropPosition === DropPosition.AFTER) {
        style = {
          ...style,
          borderRight: 'solid 2px #ef4444',
        }
      }
    }


    return {
      ...style,
      width: `${this.width}px`,
      height: `${this.height}px`,
    };
  }

  protected canAcceptChild() {
    return !!this.type && WIDGETS_WITH_CHILD.includes(this.type);
  }

  protected notifyUpdate() {
    this.eventEmitter.emit(this.id);
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }

  protected getWidgetCount(): number {
    const widgets = document.querySelectorAll(`[widget-type='${this.type}']`);
    return widgets.length + 1;
  }
}