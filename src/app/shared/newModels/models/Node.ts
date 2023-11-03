export interface Node {
  // Getters
  get id() : string ;
  get value() : number;
  get next() : Node | null;
  // get prev() : Node | null | undefined;
  // Setters
  set value(_value : number);
  set next(_next : Node | null);
  // set prev(_prev : Node | null);
}