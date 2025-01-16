import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Apple extends BaseGameObject{
    name = "Apple";
    

    reactToCollision = function(collidingObject)
    {
        if (collidingObject.name == "Skeleton") {
            this.active = false;
            console.log("colided");
        }
      
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
    }
}

export{Apple};