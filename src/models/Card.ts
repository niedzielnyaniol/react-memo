import Origin from './Origin';

type CardStates = 'covered' | 'uncovered' | 'hidden';

class Card {
  constructor(private origin: Origin, private id: number, private state: CardStates = 'covered') {}

  getId(): number {
    return this.id;
  }

  getOrigin(): Origin {
    return this.origin;
  }

  uncover(): void {
    this.state = 'uncovered';
  }

  cover(): void {
    this.state = 'covered';
  }

  hide(): void {
    this.state = 'hidden';
  }

  getState(): CardStates {
    return this.state;
  }
}

export default Card;
