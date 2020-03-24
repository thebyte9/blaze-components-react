declare class Chain implements IChain {
    prev?: Chain;
    next?: Chain;
    callback?: (data: any) => void;
    constructor(prev?: any, next?: any, callback?: (data: any) => void);
    run(data: any): void;
}
interface IChain {
    prev?: any;
    next?: any;
    callback?: any;
}
export { Chain, IChain };
