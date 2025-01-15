import { global } from "./global.js";
import { Skeleton } from "../gameObjects/skeleton.js";
import { MoveTriggerHorizontaly} from "../gameObjects/moveTrigger.js";
import { BlockObject } from "../gameObjects/blockObject.js";
import { Floor } from "../gameObjects/floor.js";
import { Apple } from "../gameObjects/collectables.js";
// import { Enemy } from "../gameObjects/spiders.js";

function gameLoop(totalRunningTime) { 
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 
    
    for (var i = 0; i < global.allGameObjects.length; i++) { //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
        if (global.allGameObjects[i].active == true) {
            global.allGameObjects[i].storePositionOfPreviousFrame();
            global.allGameObjects[i].update();
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
            global.allGameObjects[i].applyGravity();
            global.allGameObjects[i].draw();
        }
    }
    
    requestAnimationFrame(gameLoop); // This keeps the gameLoop running indefinitely
}

function setupGame() {
    global.leftMoveTrigger = new MoveTriggerHorizontaly(280, 0,20, 1000, 100);
    global.rightMoveTrigger = new MoveTriggerHorizontaly(354, 0, 20, 1000, -100);
    // global.topMoveTrigger = new MoveTriggerVertically(0, 0, 1000, 20, 100);   // Top trigger (moves background up/down)
    // global.bottomMoveTrigger = new MoveTriggerVertically(0, 450, 1000, 20, -100); // Bottom trigger (moves background up/down)
    new Apple(350,350,50,50)
    // new Enemy(450, 280, 50, 50)
    // new Enemy(450, 280, 100, 70)
    new Floor(0, 400, 9000, 40);
    new BlockObject(1,1,1,8000);
    new BlockObject(400, 280, 100, 20);
    new BlockObject(600, 180, 100, 20);
    new BlockObject(800, 80, 100, 20);
    global.playerObject = new Skeleton(300, 100, 64, 64);
    //new BlockObject(300, 400, 50, 50);
    // setup your game here - means: Create instances of the GameObjects that belong to your game.
    // e.g.: 
    /*    
                global.playerObject = new PacMan(200, 300, 60, 60);
                new Wall(0, 0, 100, 100);
                new Candy(100, 100, 100, 100);
    }*/
   console.log(global.allGameObjects)

}

setupGame();
requestAnimationFrame(gameLoop);



