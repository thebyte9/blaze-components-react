import List from "../List";

class EventBus {
  public events: object;
  constructor() {
    this.events = {};
  }
  public $emit(name: string, data: any) {
    if (this.events[name]) {
      this.events[name].head.run(data);
    }
  }
  public $on(name: string, callback: (data: any) => void) {
    (this.events[name] || (this.events[name] = new List())).insert(callback);
  }
}

export default EventBus;
