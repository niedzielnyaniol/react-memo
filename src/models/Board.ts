import Card from './Card';
import Origin from './Origin';
import IdGenerator from './IdGenerator';

class Board {
  private cards: Card[][];

  constructor({ x, y }: Origin) {
    this.cards = new Array<Card[]>(x);

    const pairs = (x * y) / 2;
    const idGenerator = new IdGenerator(pairs);

    for (let i = 0; i < y; i += 1) {
      this.cards[i] = new Array<Card>(x);

      for (let j = 0; j < x; j += 1) {
        this.cards[i][j] = new Card(new Origin(j, i), idGenerator.getId());
      }
    }
  }

  getCards(): Card[][] {
    return this.cards;
  }
}

export default Board;
