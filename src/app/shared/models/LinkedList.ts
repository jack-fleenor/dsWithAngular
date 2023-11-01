import { SinglePointedNode } from './SinglePointedNode';
import { Node } from "./Node";
export interface LinkedList {
  head : Node | null;
  _count : number;
  count() : number;
  remove(_id : string) : void;
  insertFront(data : number) : void;
  insertAt(value : number, target : string, direction: string) : Node | null;
  insertBack(data : number) : Node;
  sort() : void;
  traverse() : Node[];
}