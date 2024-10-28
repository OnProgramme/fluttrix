import Column from "../Column";
import { WidgetType } from "../enums/WidgetType";
import Row from "../Row";
import Scaffold from "../Scaffold";
import Widget from "../Widget";
import Button from "../widgets/Button";
import Input from "../widgets/Input";
import Text from "../widgets/Text";

export default class WidgetBuilder {
  static build(type: WidgetType): Widget {
    const widgets: Record<WidgetType, Widget> = {
      [WidgetType.COLUMN]: new Column(),
      [WidgetType.ROW]: new Row(),
      [WidgetType.SCAFFOLD]: new Scaffold(),
      [WidgetType.CONTAINER]: new Column(),
      [WidgetType.IMAGE]: new Column(),
      [WidgetType.LISTVIEW]: new Column(),
      [WidgetType.INPUT]: new Input(),
      [WidgetType.BUTTON]: new Button(),
      [WidgetType.TEXT]: new Text(),
    };
    return widgets[type];
  }
}