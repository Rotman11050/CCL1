import { BaseGameObject } from "./baseGameObject.js";

let relicIsCollected = false;

class Relic extends BaseGameObject{
    name = "Relic";
    reactToCollision = function(collidingObject)
    {
        if (collidingObject.name == "Skeleton") {
            relicIsCollected = true;
            this.active = false;
            if (relicIsCollected == true) {
                document.getElementById('canvas').style.display = "none";
                document.getElementById('background').style.display = "none";
                document.getElementById('YouWin').style.display = "block";
            }
        }    
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/relic.png"]);
    }
}


export{Relic}