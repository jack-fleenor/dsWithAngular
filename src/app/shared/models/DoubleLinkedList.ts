import { DoublePointedNode } from "../models/DoublePointedNode";
import { LinkedList } from "./LinkedList";

export class DoubleLinkedList implements LinkedList {
  public head : DoublePointedNode | null = null;
  public _count : number = 0;
  public count()
  {
    return this._count
  }
  public insertFront(data: number)
  {
    const node = new DoublePointedNode(data);
    if (!this.head) { this.head = node; }
    else if(this.head)
    {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      temp.prev = this.head;
    }
    this._count++;
  }
  public remove(_id: string)
  {
    if(this.head && this.head.id === _id){
      if(this.head.next)
      {
        this.head = this.head.next;
        this.head.prev = null;
      } else { this.head = null; }
    }
    let current = this.head;
    while (current !== null) {
      if(current.id === _id)
      {
        if(current.next) current.next.prev = current.prev;
        if(current.prev) current.prev.next = current.next;
        --this._count;
        return;
      }
      current = current.next;
    }
    --this._count;
    return;
  }
  insertAt(value : number, target : string, direction: string)
  {
    return null;
  };
  insertBack(data : number)
  {
    const node = new DoublePointedNode(data);
    if(!this.head) this.head = node;
    else {
      let current = this.head;
      while(current.next !== null) { current = current.next; }
      node.prev = current;
      current.next = node;
    }
    ++this._count;
    return node;
  };
  sort(){}
  traverse()
  {
    let nodes: DoublePointedNode[] = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}
