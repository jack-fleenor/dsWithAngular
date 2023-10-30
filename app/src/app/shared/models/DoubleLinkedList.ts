import { DoublePointedNode } from '../models/DoublePointedNode';

export class DoubleLinkedList {
  private head : DoublePointedNode | null = null;
  private _count : number = 0;
  public get count() : number { return this._count; };
  
  public remove(_id : string)
  {
    let current = this.head;
    while(current)
    {
      if(current.id === _id) {
        this.head = current.next; 
        --this._count;
      }
      if(current.next === null) { return; }
      if(current.next.id === _id)
      {
        if(current.next.next !== null) { current.next = current.next.next; }
        else { current.next = null; }
        --this._count;
      }
      current = current.next;
    }
    --this._count;
  }
  public insertFront(data : number) : DoublePointedNode
  {
    const node = new DoublePointedNode(data);
    if(!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    ++this._count;
    return node;
  }
  public insertAt(value : number, target : string, direction: string) : DoublePointedNode | null
  {
    const node = new DoublePointedNode(value);
    let current = this.head;
    while(current)
    {
      if(current.id === target)
      {
        if(direction === 'back')
        {
          node.next = current;
          current = node;
        }
        else if(direction === 'front')
        {
          if(current.next !== null) { node.next = current.next; }
          current.next = node;
        }
        return node;
      }
      else
      { current = current.next; }
    }
    return null;
  }
  public insertBack(data : number) : DoublePointedNode
  {
    const node = new DoublePointedNode(data);
    if(!this.head) this.head = node;
    else {
      let current = this.head;
      while(current.next !== null) { current = current.next; }
      current.next = node;
    }
    ++this._count;
    return node;
  }
  public traverse() : DoublePointedNode[] {
    let nodes: DoublePointedNode[] = [];
    let current = this.head;
    while(current)
    {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}