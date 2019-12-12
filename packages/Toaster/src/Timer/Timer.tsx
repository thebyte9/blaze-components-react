class Timer {
  public timerId: any;
  public start: any;
  public remaining: any;
  public callback: any;
  constructor(callback: () => any, delay: any) {
    this.timerId = null;
    this.start = delay;
    this.remaining = delay;
    this.callback = callback;
  }

  public clear() {
    clearTimeout(this.timerId);
  }

  public pause() {
    clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  }

  public resume() {
    this.start = Date.now();
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.callback, this.remaining);
  }
}

export default Timer;
