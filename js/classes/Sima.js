import { pathfindify, astar, Graph } from "../astar.js";
import { getRandomTraits } from "../random.js";
import { Food } from "./Tiles/Food.js";
import { Vector } from "./Vector.js";
export class Sima {
  constructor(position, stats = getRandomTraits()) {
    this.position = position;
    this.stats = stats;
    this.health = this.stats.health;
    this.food = 10;
    this.water = 100;
    this.tick = 0;
    this.turn = 0;
    this.target = new Vector(0, 0);
    this.path = null;
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
  locate(target, state = this.sense(world.data)) {
    let object = {};
    console.log(state);
    let objectDistance = 0;
    for (let i in state) {
      if (state[i] instanceof target) {
        let distance = Math.hypot(
          state[i].position.x - this.position.x,
          state[i].position.y - this.position.y
        );
        if (distance > objectDistance) {
          object = state[i];
          objectDistance = distance;
        }
      }
    }
    return object;
    // for over state. array with all [target]s.  calcuate distance and take lowest. DISTANCE CALUCLATED UISING EXTERNAL FUNCTIONS (Pythag therom)
  }
  chooseTarget(state = this.sense(world.data)) {
    debugger;
    let action = "idle";
    let actionPriority = 0;
    let priority = {
      food: 1 - (this.food + 5) / this.stats.belly,
      // water: 1 - this.water / 100,
      // fight:
      //   this.stats.strength / 100 + this.food / this.stats.belly < 0.2
      //     ? 0.3
      //     : 0 + this.health + this.stats.defence * 5 > 125
      //     ? 0.5
      //     : -0.2,
      // run: this.health < 50 ? 1 : 0
    };

    for (let i in priority) {
      if (priority[i] > actionPriority) {
        action = i;
      }
    }
    console.log(action);
    switch (action) {
      case "food":
        console.log(this.locate(Food));
        this.moveTo(this.locate(Food).position);
        break;
    }
    // this.target = new Vector(20, 10);
  }
  breed(partner) {}
  moveTo(position) {
    this.target = position;
    this.path = this.pathfind();
    this.position = new Vector(this.path[0].x,this.path[0].y);
    console.log(this.position);
  }
  pathfind(worldData = world.data) {
    let data = pathfindify(worldData);
    let grid = new Graph(data);
    let start = grid.grid[this.position.x][this.position.y];
    let end = grid.grid[this.target.x][this.target.y];
    var result = astar.search(grid, start, end);
    console.log(result);
    return result; // save as pathfinding data???
  }
}
