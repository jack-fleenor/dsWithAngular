import { SinglePointedNode } from './SinglePointedNode';

export class Stack {
  private head : SinglePointedNode | null = null;
  public get pop() : SinglePointedNode | null {
    let current = this.head;
    if(this.head)
    {
      if(this.head.next) { this.head = this.head.next; }
      else { this.head = null; }
    }
    return current;
  };
  public set push(value : number) {
    const node = new SinglePointedNode(value);
    if(this.head) { node.next = this.head; } 
    this.head = node;
  };
  public get peek() : SinglePointedNode | null { return this.head; };
  public get isEmpty() : boolean { return this.head === null; }
}