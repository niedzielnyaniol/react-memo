import Card from './Card';
import IdGenerator from './IdGenerator';

class Board {
  public cards: Array<Card>;

  constructor(count: number) {
    this.cards = [];

    const pairs = count / 2;
    const idGenerator = new IdGenerator(pairs);

    for (let i = 0; i < count; i += 1) {
      this.cards.push(new Card(i, idGenerator.getId()));
    }
  }
}

export default Board;
