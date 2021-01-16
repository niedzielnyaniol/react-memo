class IdGenerator {
  private ids: Array<number> = [];

  constructor(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.ids.push(i);
    }

    this.ids = IdGenerator.shuffle(this.ids.concat(this.ids));
  }

  getId(): number {
    const id = this.ids.pop();
    if (id !== undefined) {
      return id;
    }

    throw Error('Ids array is empty!');
  }

  private static shuffle = (array: Array<number>) => {
    const arrayCopy = [...array];
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arrayCopy[currentIndex];
      arrayCopy[currentIndex] = arrayCopy[randomIndex];
      arrayCopy[randomIndex] = temporaryValue;
    }

    return arrayCopy;
  };
}

export default IdGenerator;
