import { pathfindify, astar, Graph } from "../astar.js";
import { getRandomTraits } from "../random.js";
import {Vector} from "./Vector.js"
export class Sima {
  constructor(position, stats = getRandomTraits()) {
    this.position = position;
    this.stats = stats;
    this.health = this.stats.health;
    this.target;
  } // Make a Tick Function with all ticks
  sense(worldData) {
    let top = this.position.y - this.stats.sense,
      bottom = this.position.y + this.stats.sense,
      left = this.position.x - this.stats.sense,
      right = this.position.x + this.stats.sense;
    let objects = [];
    for (let y = top; y <= bottom; y++) {
      for (let x = left; x <= right; x++) {
        objects.push(worldData[x][y]);
      }
    }
    return objects;
  }
  chooseTarget(state = this.sense(world.data)) {
    this.target = new Vector(20, 10);
  }
  breed(partner) {}
  moveTo(position) {
    this.position = position;
  }
  pathfind(worldData = world.data) {
    let data = pathfindify(worldData)
    let grid = new Graph(data);
    let start = grid.grid[this.position.x][this.position.y];
    let end = grid.grid[this.target.x][this.target.y];
    var result = astar.search(grid, start, end);
    console.log(result);
    return result;
  }
}

