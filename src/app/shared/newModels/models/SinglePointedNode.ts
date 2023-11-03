import * as uuid from 'uuid';
import { Node } from './Node';

export class SinglePointedNode implements Node {
  private _id : string;
  private _next : SinglePointedNode | null;
  private _value : number;
  constructor(public init_value : number = 0)
  {
    this._id = uuid.v4();
    this._next = null;
    this._value = init_value;
  }
  // Getters
  public get id() : string { return this._id; };
  public get value() { return this._value; };
  public get next() : SinglePointedNode | null { return this._next; };
  // Setters
  public set value(_value : number) { this._value = _value; };
  public set next(_next : SinglePointedNode | null) { this._next = _next; }
}