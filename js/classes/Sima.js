import { getRandomTraits } from "../random.js";
export class Sima {
  constructor(position, stats = getRandomTraits()) {
    this.position = position;
    this.stats = stats;
  }
  breed(partner) {}
  moveTo(position) {
    this.position = position;
  }
}
