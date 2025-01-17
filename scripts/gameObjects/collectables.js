import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";
import { Relic } from "./finalCollectable.js";

    
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
                document.getElementById('scoreDisplay').innerHTML = `Collect the Relic before tornado takes it from you!`; 
                new Relic(200,100,50,50);
            }
        }
      
    }


    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
    }
}

export{Apple};