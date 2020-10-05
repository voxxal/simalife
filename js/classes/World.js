import { Array2D } from "./Array2D.js";
import { render } from "../render.js";
import { Sima } from "./Sima.js";
import { Vector } from "./Vector.js";
import { Grass, Rock } from "./Tiles/main.js";
import { worldGeneration } from "../random.js";
export class World {
  constructor(width, height) {
    //make it a vector
    this.height = height;
    this.width = width;
    this.data = new Array2D(new Vector(width, height));
    worldGeneration(
      Math.random,
      this.data,
      new Vector(this.width, this.height)
    );
    render.grid(width, height);
  }
  update() {
    for (let x in this.data) {
      for (let y in this.data[x]) {
        render.tile(new Vector(x, y), this.data[x][y].color);
      }
    }
    let rAF = requestAnimationFrame(() => {
      this.update();
    });
  }
  arrayify() {
    // change solid to 1 and not solid to 0
  }
  move(from, to) {}
}
