import * as uuid from 'uuid';

export class DoublePointedNode {
  private _id : string;
  private _next : DoublePointedNode | null;
  private _prev : DoublePointedNode | null;
  private _value : number;
  constructor(public init_value : number = 0)
  {
    this._id = uuid.v4();
    this._prev = null;
    this._next = null;
    this._value = init_value;
  }
  // Getters
  public get id() : string { return this._id; };
  public get value() { return this._value; };
  public get next() : DoublePointedNode | null { return this._next; };
  public get prev() : DoublePointedNode | null { return this._prev; };
  // Setters
  public set value(_value : number) { this._value = _value; };
  public set next(_next : DoublePointedNode | null) { this._next = _next; }
  public set prev(_prev : DoublePointedNode | null) { this._prev = _prev; }
}