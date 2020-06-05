import EventBus from "./EventBus";
class EventBusFactory {
  public newEventBus() {
    return new EventBus();
  }
}

export default new EventBusFactory().newEventBus();
