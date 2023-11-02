import { DoublePointedNode } from "../models/DoublePointedNode";
import { LinkedList } from "./LinkedList";

export class CircularlyLinkedList implements LinkedList {
  public head : DoublePointedNode | null = null;
  public _count : number = 0;
  public count() { return this._count; }
  public get headNode() : DoublePointedNode | null { return this.head; }
  public getNodeByPosition(position : number): DoublePointedNode | null {
    let currentPosition = 1;
    let node : DoublePointedNode | null = this.head;
    while(currentPosition < this.count() + 1 && node)
    {
      if(currentPosition === position){
        return node;
      }
      if(node.next)
      {node = node.next;}
      ++currentPosition;
    }
    return node;
  }
  public insertFront(data: number)
  {
    const node = new DoublePointedNode(data);
    if (!this.head) { this.head = node; }
    else
    {
      const temp = this.head;
      temp.prev = node;
      node.prev = this.getNodeByPosition(this.count())
      this.getNodeByPosition(this.count())!.next = node;
      node.next = temp;
      this.head = node;
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
  insertAt(value : number, target : string, direction: string) { return null; }
  insertBack(data : number)
  {
    const node = new DoublePointedNode(data);
    if(!this.head) this.head = node;
    else if(this.head)
    {
      const tail = this.getNodeByPosition(this.count())
      node.prev = tail;
      node.next = this.head;
      this.head.prev = node;
      tail!.next = node;
      ++this._count;
    }
    return node;
  }
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
