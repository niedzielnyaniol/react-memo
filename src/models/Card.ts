type CardStates = 'covered' | 'uncovered' | 'hidden';

class Card {
  constructor(public uniqueId: number, public cardId: number, public state: CardStates = 'covered') {}

  uncover(): void {
    this.state = 'uncovered';
  }

  cover(): void {
    this.state = 'covered';
  }

  hide(): void {
    this.state = 'hidden';
  }
}

export default Card;
