import { Chain } from "../Chain";
declare class List {
    head: Chain;
    tail: Chain;
    constructor();
    insert(callback: any): Chain;
}
export default List;
