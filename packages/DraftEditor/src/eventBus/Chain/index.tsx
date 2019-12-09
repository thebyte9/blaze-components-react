class Chain implements IChain {
  public prev?: Chain;
  public next?: Chain;
  public callback?: (data: any) => void;

  constructor(prev?: any, next?: any, callback?: (data: any) => void) {
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

interface IChain {
  prev?: any;
  next?: any;
  callback?: any;
}

export { Chain, IChain };
