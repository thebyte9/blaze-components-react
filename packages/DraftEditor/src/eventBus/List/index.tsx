import { Chain } from "../Chain";
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

export default List;
