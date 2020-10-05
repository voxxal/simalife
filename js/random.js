import { Grass, Rock } from "./classes/Tiles/main.js";
import { Noise } from "./noise.js";
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const getRandomTraits = () => {
  const traits = {
    strength: 2,
    health: 20,
    defence: 5,
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
  console.log(worldData);
  console.log(worldSize);
  for (let x = 0; x < worldSize.x; x++) {
    for (let y = 0; y < worldSize.y; y++) {
      let value = noise.simplex2(x, y);
      console.log(value)
      if (value <= 0.25) {
        //PLEASE FIGUREOUT HOW YOU DO SWITCHES WITH EXPRESSIONS
        worldData[x][y] = new Grass(x, y);
      } else if (value > 0.25) {
        worldData[x][y] = new Rock(x, y);
      }
    }
  }
};
