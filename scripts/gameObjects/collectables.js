import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

let appleCounter = 5;

class Apple extends BaseGameObject{
    name = "Apple";
    wasCalled = true;

    reactToCollision = function(collidingObject)
    {
        if (collidingObject.name == "Skeleton") {
            this.active = false;
            appleCounter--;
            document.getElementById('scoreDisplay').innerHTML = `There is ${appleCounter} fragments on map`; 
            if (appleCounter <= 0) {
                document.getElementById('scoreDisplay').innerHTML = `Collect the Relic before time runs out!`; 
            }
        }
      
    }


    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
    }
}

export{Apple};