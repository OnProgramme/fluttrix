import { WidgetType } from "./enums/WidgetType";
import { PaddingType } from "./types/PaddingType";

export interface IWidget {
  id: string;
  width?: number;
  height?: number;
  padding?: PaddingType;
  type?: WidgetType;
  render(): JSX.Element;
  handleDragOver(e: React.DragEvent): void;
  handleDragLeave(e: React.DragEvent): void;
  handleDrop(e: React.DragEvent, disableDrop?: boolean): void;
}