import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";
import { Apple } from "./collectables.js";

let relicWasCollected = false;

class Relic extends BaseGameObject{
    name = "Relic";
    reactToCollision = function(collidingObject)
    {
        if (collidingObject = "Skeleton") {
            relicWasCollected = true;
            this.active = false;
            if (relicWasCollected == true) {
                document.getElementById('canvas').style.display = "none";
                document.getElementById('background').style.display = "none";
                document.getElementById('YouWin').style.display = "block";
            }
        }    
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/goldenMedalion.jpeg"]);
    }
}


export{Relic}