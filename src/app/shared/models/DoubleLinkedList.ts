import { DoublePointedNode } from '../models/DoublePointedNode';

export class DoubleLinkedList {
  private head : DoublePointedNode | null = null;
  private _count : number = 0;
  public get count() : number { return this._count; };
  
  public set push(value : number)
  {
    if(!this.head)
    { this.head = new DoublePointedNode(value); }
    else
    {
      const temp = new DoublePointedNode(value);
      temp.next = this.head;
      this.head.prev = temp;
      this.head = temp;
    }
  }
  // public get pop() : DoublePointedNode | null
  // {
  //   if(!this.head) return null;
  //   if(!this.head.next) return this.head;
  //   let current = this.head;
  //   let result = current 
  // }
}