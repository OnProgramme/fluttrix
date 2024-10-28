export default class WidgetEventEmitter {
  private static instance: WidgetEventEmitter;
  private listeners: Map<string, Set<() => void>> = new Map();

  private constructor() { }

  static getInstance(): WidgetEventEmitter {
    if (!WidgetEventEmitter.instance) {
      WidgetEventEmitter.instance = new WidgetEventEmitter();
    }
    return WidgetEventEmitter.instance;
  }

  emit(widgetId?: string) {
    const listeners = this.listeners.get('update') || new Set();
    listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    const listeners = this.listeners.get('update') || new Set();
    listeners.add(listener);
    this.listeners.set('update', listeners);
    return () => {
      const listeners = this.listeners.get('update');
      if (listeners) {
        listeners.delete(listener);
      }
    };
  }
}