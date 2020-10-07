import { Tile } from "../Tile.js";
import { Grass } from "./main.js";
export class Food extends Tile {
  constructor(position) {
    super(position, false, "#E43F6F");
  }
  eaten(worldData){
      // turn current tile to grass
      worldData[this.position.x][this.position.y] = new Grass(this.position);
  }
}
