export enum WidgetType {
  COLUMN = 'COLUMN',
  ROW = 'ROW',
  CONTAINER = 'CONTAINER',
  IMAGE = 'IMAGES',
  LISTVIEW = 'LISTVIEW',
  SCAFFOLD = 'SCAFFOLD',
  INPUT = 'INPUT',
  BUTTON = 'BUTTON',
  TEXT = 'TEXT',
}

export const WIDGETS_WITH_SINGLE_CHILD = [
  WidgetType.CONTAINER,
  WidgetType.SCAFFOLD,
];

export const WIDGETS_WITH_CHILDREN = [
  WidgetType.ROW,
  WidgetType.COLUMN,
  WidgetType.LISTVIEW,
];

export const WIDGETS_WITH_CHILD = [
  ...WIDGETS_WITH_CHILDREN,
  ...WIDGETS_WITH_SINGLE_CHILD,
]