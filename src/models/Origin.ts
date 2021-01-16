class Origin {
  constructor(public x: number, public y: number) {}

  isEqual(origin: Origin): boolean {
    return this.x === origin.x && this.y === origin.y;
  }
}

export default Origin;
