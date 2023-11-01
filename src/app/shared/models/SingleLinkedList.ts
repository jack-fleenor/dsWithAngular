import { LinkedList } from './LinkedList';
import { SinglePointedNode } from './SinglePointedNode';

export class SingleLinkedList implements LinkedList {
  public head : SinglePointedNode | null = null;
  public _count : number = 0;
  public count() { return this._count; };
  
  public remove(_id : string)
  {
    if(this.head && this.head.id === _id) this.head = null;
    let current = this.head;
    while(current !== null)
    {
      if(current.next)
      {
        if(current.next.id === _id)
        {
          current.next = current.next.next ? current.next.next : null;
          --this._count;
          return;
        }
      }
      current = current.next;
    }
    --this._count;
    return;
  }
  public insertFront(data : number)
  {
    const node = new SinglePointedNode(data);
    if(!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    ++this._count;
    return node;
  }
  public insertAt(value : number, target : string, direction: string)
  {
    const node = new SinglePointedNode(value);
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
  public insertBack(data : number)
  {
    const node = new SinglePointedNode(data);
    if(!this.head) this.head = node;
    else {
      let current = this.head;
      while(current.next !== null) { current = current.next; }
      current.next = node;
    }
    ++this._count;
    return node;
  }
  public sort()
  {
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
  public traverse() : SinglePointedNode[] {
    let nodes: SinglePointedNode[] = [];
    let current = this.head;
    while(current)
    {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}