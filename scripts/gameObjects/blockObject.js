import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";


class BlockObject extends BaseGameObject {
    blockGravityForces = true;
    name = "BlockObject"

    reactToCollision = function (collidingObject)   {
        if (collidingObject.name == "Skeleton") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
            console.log("player collided")
        }
        
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/wall.jpg"]);
    }
}

export {BlockObject};