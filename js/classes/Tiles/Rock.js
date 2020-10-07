import { Tile } from "../Tile.js";
export class Rock extends Tile {
  constructor(position) {
    super(position, true, "#242331");
  }
}
