export class Array2D {
  constructor(size) {
    return Array.from(Array(size.x), () => new Array(size.y));
  }
}
