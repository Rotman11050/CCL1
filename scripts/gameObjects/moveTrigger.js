import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class MoveTriggerHorizontaly extends BaseGameObject {
    backGroundDiv = null;
    name ="MoveTriggerH"
    update = function () {
        this.backGroundDiv.style.backgroundPositionX = global.backgroundShiftX + "px";
        global.canvas.style.marginLeft =  global.backgroundShiftX  + "px";
    }

    draw = function () {
       global.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    reactToCollision = function (collidingObject){
        let rightSide = 1400;
        let leftSide = 0;
        
         if (global.playerObject.x < rightSide && global.playerObject.x > leftSide) 
            {
            if (collidingObject.name == "Skeleton") 
                {
                    let shiftBy = collidingObject.xVelocity * global.deltaTime;
                    global.backgroundShiftX += shiftBy * -1;
        
                    if (global.backgroundShiftX < global.backgroundMaxShiftX) {
                        global.backgroundShiftX = global.backgroundMaxShiftX;
                        collidingObject.x = collidingObject.previousX;
                    }
                    else if (global.backgroundShiftX > 0) {
                        global.backgroundShiftX = 0;
                        collidingObject.x = collidingObject.previousX;
                    }
                    else{
                        global.leftMoveTrigger.x += shiftBy;
                        global.rightMoveTrigger.x += shiftBy;
                    }
                    
                }
    }

}
        
    constructor(x, y, width, height){
        super(x, y, width, height);
        //this.loadImages(["./images/apple.png"]);
        this.backGroundDiv = document.querySelector("#background");
    }
}


 export {MoveTriggerHorizontaly}
// export {MoveTriggerVertically}