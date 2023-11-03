import { IArray } from './Array';

class DynamicArray implements IArray {
  size : number;
  data : Array<number | null> = [];
  constructor(public _size : number)
  {
    this.size = _size;
    for (let index = 0; index < this.size; index++) {
      this.data.push(null);
    }
  }
  public insert(value : number)
  {
    if(this.data.length < this.size) this.data.push(value);
    else console.log('Error, unable to add item to full array.');
  }
}