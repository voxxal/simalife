import { Sima } from "./classes/Sima.js";
import { Vector } from "./classes/Vector.js";
import { World } from "./classes/World.js";
let world = new World(100, 100);
window.world = world;
let rAF = requestAnimationFrame(() => { world.update(); });
/**
 * 
 *     __,                  _       
 *    (    o               //o  /)  
 *     `. ,  _ _ _   __,  //,  // _ 
 *   (___)(_/ / / /_(_/(_(/_(_//_(/_
 *                           /)     
 *                          (/      
 * by voxal
 * under MIT licence for all the crazy things you want to do with it.
 */