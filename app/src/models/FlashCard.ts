export class FlashCard {
  frontText : string;
  backText : string;
  flipped : boolean = false;
  constructor
  (
    public _front: string = "Front Text",
    public _back : string = "Back Text"
  )
  {
    this.frontText = _front;
    this.backText = _back;
  } 
  private set front(frontText: string) { this.frontText = frontText; }
  private set back(backText: string) { this.backText = backText; }
  public get front() : string { return this.frontText; }
  public get back() : string { return this.backText; }
  public get text() : string { return !this.flipped ? this.front : this.back; }
  public flipCard() : void { this.flipped = !this.flipped; }
}