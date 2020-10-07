import { Tile } from "../Tile.js";
export class Grass extends Tile {
  constructor(position) {
    super(position, false, "#069D27");
  }
}
