export interface IArray {
  size: number;
  data: Array<number | null>;
  insert(value : number) : void;
}