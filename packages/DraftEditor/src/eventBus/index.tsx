// tslint:disable: max-classes-per-file

class Chain {
  public prev?: Chain;
  public next?: Chain;
  public callback?: (data: any) => void;

  constructor(prev?: Chain, next?: Chain, callback?: (data: any) => void) {
    this.prev = prev;
    this.next = next;
    this.callback = callback;
  }
  public run(data: any) {
    if (this.callback) {
      this.callback(data);
    }
    if (this.next) {
      this.next.run(data);
    }
  }
}

class List {
  public head: Chain;
  public tail: Chain;

  constructor() {
    this.head = new Chain();
    this.tail = new Chain(this.head);
  }
  public insert(callback: any): Chain {
    const link: Chain = new Chain(this.tail.prev, this.tail, callback);
    if (link.prev && link.next) {
      link.prev.next = link;
      link.next.prev = link;
    }
    return link;
  }
}

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

export default new EventBus();
