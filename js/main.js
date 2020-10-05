import { World } from "./classes/World.js";
let world = new World(60, 30);
window.world = world;
let rAF = requestAnimationFrame(() => { world.update(); });
