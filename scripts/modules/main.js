import { global } from "./global.js";
import { Skeleton } from "../gameObjects/skeleton.js";
import { MoveTrigger} from "../gameObjects/moveTrigger.js";
import { BlockObject } from "../gameObjects/blockObject.js";
import { Floor } from "../gameObjects/floor.js";
import { Apple } from "../gameObjects/collectables.js";
import { Enemy } from "../gameObjects/Enemy.js";



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
    global.leftMoveTrigger = new MoveTrigger(280, -100,20, 1000, 100);
    global.rightMoveTrigger = new MoveTrigger(354, -100, 20, 1000, -100);
  

    new Apple(395,210,100,70)
    new Apple(595,110,100,70)
    new Apple(795, 10, 100,70);
    new Apple(1095, 10, 100,70)
    new Apple(1495,110,100,70)
    new Apple(1695,10,100,70)
    new Apple(1695,90,100,70)
    new Apple(2075,90,100,70)
    new Apple(2275,30,100,70)
    new Apple(2565,30,100,70)
    //
    new Apple(2965, 90,100,70)
    new Apple(3325,90,100,70)
    new Apple(3485,10, 100,70)
    new Apple(3495,90,100,70)
    new Apple(3795,130,100,70)

    new BlockObject(400, 280, 100, 20);
    new BlockObject(600, 180, 100, 20);
    new BlockObject(800, 80, 100, 20);
    new BlockObject(1100, 80, 100, 20)
    new BlockObject(1500, 180, 100, 20);
    new BlockObject(1700, 80, 100, 20);
    new BlockObject(1700, 160, 100, 20);
    //Hazard floor
    new BlockObject(2080, 160,100,20)
    new BlockObject(2280, 100,100,20)
    new BlockObject(2580, 100,100,20)
    new BlockObject(2975, 160,100,20)
    new BlockObject(3330, 160,100,20)
    new BlockObject(3500, 80, 100, 20);
    new BlockObject(3500, 160, 100, 20);
    new BlockObject(3800, 200, 100, 20);




     new Enemy(450, 280, 100, 70)
     new Enemy(700, 300, 80,80)


    new Floor(0, 400, 9000, 40);
    global.playerObject = new Skeleton(200, 200, 200, 100);
    


   console.log(global.allGameObjects)

}

setupGame();
    requestAnimationFrame(gameLoop);
global.startButton.addEventListener("click", function(){
    // global.canvas.style.display = 'block';
    // global.background.style.display = 'block';
    // global.helthDisplay.style.display = 'block';
    // global.startScreen.style.display = 'none';
    

});




