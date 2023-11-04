import { Node } from "./Node";

export type LinkedListValueType = number;

export interface LinkedList {
  // Setters
  // set head(node: Node | null);
  // set next(node : Node);
  // Getters
  get head() : Node | any;
  // get size() : number;
  // Insertion Methods
  prepend(data : LinkedListValueType) : Node;
  append(data : LinkedListValueType) : Node;
  insertAfter(data : LinkedListValueType, node : Node) : Node;
  // Deletion Methods
  delete(data : LinkedListValueType) : void;
  deleteAt(position : number) :  void;
  deleteNode(node : Node) : void;
  // Search methods
  isEmpty() : boolean;
  search(data : LinkedListValueType) : Node | null;
  contains(data : LinkedListValueType) : boolean;
  at(position : number) : Node | null;
  // Manipulation Methods
  toArray(): Array<Node | null>;
  reverse(): void;
  concatenate(list : LinkedList): void;
}