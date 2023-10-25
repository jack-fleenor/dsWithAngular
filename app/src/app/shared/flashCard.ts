import * as uuid from 'uuid';

export class FlashcardComponent {
  frontText : string;
  backText : string;
  flipped : boolean = false;
  id : string = uuid.v4();
  constructor
  (_front: string = "", _back : string = "")
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