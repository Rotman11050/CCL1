import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Enemy } from "./Enemy.js";
import { Relic } from "./finalCollectable.js";

    
    let appleCounter = 15;

class Apple extends BaseGameObject{
    name = "Apple";
    wasCalled = true;
    reactToCollision = function(collidingObject)
    {
        if (collidingObject.name == "Skeleton") {
            this.active = false;
            appleCounter--;
            document.getElementById('scoreDisplay').innerHTML = `There is ${appleCounter} coins on map`; 
            if (appleCounter <= 0) {
                document.getElementById('scoreDisplay').innerHTML = `Collect the Relic before tornado takes it from you! Watch out you have just one run to get it now!!`; 
                    new Relic(-2000,20,200,150);

                    global.livesCounter = 1;

                    document.getElementById('healthDisplay').innerHTML = `Health: ${global.livesCounter}`; 
            }
        }
      
    }


    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
    }
}

export{Apple};