import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Apple extends BaseGameObject{
    name = "Apple";
    
    getBoxBounds= function () {
        let bounds = {
            left: this.x + 25,
            right: this.x +this.width - 25,
            top: this.y + 25,
            bottom: this.y - this.height  - 25
            }
            return bounds;
    };

    // reactToCollision = function(collidingObject)
    // {
    //     if (collidingObject.name = "Skeleton") {
    //         this.active = false;
    //         console.log("500000000");
    //     }
    // }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
    }
}

export{Apple};