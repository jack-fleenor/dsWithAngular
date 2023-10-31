import { Node } from '../models/Node';

export class LinkedList {
  private head : Node | null = null;
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
  public insertFront(data : number) : Node
  {
    const node = new Node(data);
    if(!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    ++this._count;
    return node;
  }
  public insertAt(value : number, target : string, direction: string) : Node | null
  {
    const node = new Node(value);
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
  public insertBack(data : number) : Node
  {
    const node = new Node(data);
    if(!this.head) this.head = node;
    else {
      let current = this.head;
      while(current.next !== null) { current = current.next; }
      current.next = node;
    }
    ++this._count;
    return node;
  }
  public sort() : void {
    if(!this.head) return;
    let current = this.head;
    while(current.next !== null)
    {
      if(current.value <= current.next.value)
      {
        console.log('this position is sorted.');
        current = current.next;
      }
      else if(current.value > current.next.value)
      {
        console.log('this position is unsorted.')
        let temp = current;
        current = current.next;
        current.next = temp;
      }
    }
  }
  public traverse() : Node[] {
    let nodes: Node[] = [];
    let current = this.head;
    while(current)
    {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}