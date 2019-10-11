declare class EventBus {
    events: object;
    constructor();
    $emit(name: string, data: any): void;
    $on(name: string, callback: (data: any) => void): void;
}
export default EventBus;
