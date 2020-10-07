import { Grass, Rock, Food, Water } from "./classes/Tiles/main.js";
import { Noise } from "./noise.js";
import { Vector } from "./classes/Vector.js";
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const getRandomTraits = () => {
  const traits = {
    strength: 2,
    health: 20,
    defence: 5,
    sense: 1,
    speed: 1,
    belly: 10,
    attraction: 10,
  };
  let traitIndexes = [];
  let pointsAllocations = {};
  for (let i in traits) {
    traitIndexes.push(i);
  }
  for (let points = 10; points >= 0; points--) {
    let randomIndex = traitIndexes[getRandomInt(0, traitIndexes.length)];
    typeof pointsAllocations[randomIndex] == "undefined"
      ? (pointsAllocations[randomIndex] = 2)
      : pointsAllocations[randomIndex]++;
  }
  for (let i in pointsAllocations) {
    traits[i] *= pointsAllocations[i];
  }
  return traits;
};
export const worldGeneration = (seed = Math.random(), worldData, worldSize) => {
  let noise = new Noise(seed);
  for (let x = 0; x < worldSize.x; x++) {
    for (let y = 0; y < worldSize.y; y++) {
      let value = noise.simplex2(x / 15, y / 15); //make customizable noise
      worldData[x][y] = {};
      // worldData[x][y].color = `rgb(${value*255},${value*255},${value*255})`
      if (value <= 0.25 && value > -0.75) {
        //PLEASE FIGUREOUT HOW YOU DO SWITCHES WITH EXPRESSIONS
        worldData[x][y] = new Grass(new Vector(x, y));
      } else if (value > 0.25) {
        worldData[x][y] = new Rock(new Vector(x, y));
      } else if (value <= -0.75) {
        worldData[x][y] = new Water(new Vector(x, y));
      }
    }
  }
  //POPULATION PHASE
  for (let i = 0; i <= 100; i++) {
    let position = new Vector(
      getRandomInt(0, worldSize.x),
      getRandomInt(0, worldSize.y)
    );
    if (worldData[position.x][position.y] instanceof Grass) {
      worldData[position.x][position.y] = new Food(position);
    }
  }
};
