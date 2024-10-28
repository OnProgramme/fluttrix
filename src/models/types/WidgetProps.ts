import { WidgetType } from "../enums/WidgetType";
import { PaddingType } from "./PaddingType";

export interface BaseWidgetProps {
  id?: string;
  parentId?: string;
  width?: number;
  height?: number;
  padding?: PaddingType;
}

export interface WidgetProps extends BaseWidgetProps {
  type: WidgetType;
}