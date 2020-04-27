declare class Timer {
    timerId: any;
    start: any;
    remaining: any;
    callback: any;
    constructor(callback: () => any, delay: any);
    clear(): void;
    pause(): void;
    resume(): void;
}
export default Timer;
