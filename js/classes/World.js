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
    this.simas = [];
    this.simas.push(new Sima(new Vector(10, 10)));

    this.data = new Array2D(new Vector(width, height));
    worldGeneration(
      Math.random(),
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
    for (let sima of this.simas) {
      render.tile(new Vector(sima.position.x, sima.position.y));
      sima.chooseTarget();
      // sima.pathfind();
    }
    let rAF = requestAnimationFrame(() => { world.update(); });
  }

  arrayify() {
    new Array2D(new Vector(width, height));
  }
  move(from, to) {}
}
