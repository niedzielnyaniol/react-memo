class IdGenerator {
  private ids: Array<number> = [];

  constructor(count: number) {
    while (this.ids.length < count) {
      const randomNumber = Math.floor(Math.random() * count) + 1;

      if (!this.ids.includes(randomNumber)) {
        this.ids.push(randomNumber);
      }
    }
  }

  getId(): number {
    const id = this.ids.pop();

    if (id) {
      return id;
    }

    throw Error('Ids array is empty!');
  }
}

export default IdGenerator;
