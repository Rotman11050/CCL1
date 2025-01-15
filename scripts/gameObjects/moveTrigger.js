import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class MoveTriggerHorizontaly extends BaseGameObject {
    backGroundDiv = null;

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
            if (collidingObject.name == "Skeleton") {
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
                else {
                    global.leftMoveTrigger.x += shiftBy;
                    global.rightMoveTrigger.x += shiftBy;
                }
            }
        }
        else console.log("Print");

    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        //this.loadImages(["./images/apple.png"]);
        this.backGroundDiv = document.querySelector("#background");
    }
}

class MoveTriggerVertically extends BaseGameObject {
    backGroundDiv = null;
    blockGravityForces = true;

    update = function () {
        // Update the background position in the vertical direction (Y-axis)
        this.backGroundDiv.style.backgroundPositionY = global.backgroundShiftY + "px";
        global.canvas.style.marginTop =  global.backgroundShiftY + "px";
    }

    draw = function () {
        global.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    reactToCollision = function (collidingObject) {
        if (collidingObject.name == "Skeleton") {
            // console.log(collidingObject.physicsData.fallVelocity);
            // Somewhere the velocity of the player needs to be inverted
            let shiftBy = collidingObject.physicsData.fallVelocity * -1 * global.deltaTime;
            console.log(collidingObject.physicsData.prevFallingVelocity)
            global.backgroundShiftY += shiftBy;

            // Prevent background from shifting beyond certain limits
            if (global.backgroundShiftY < global.backgroundMaxShiftY) {
                global.backgroundShiftY = global.backgroundMaxShiftY;
                collidingObject.y = collidingObject.previousY;
            } else if (global.backgroundShiftY > 0) {
                global.backgroundShiftY = 0;
                collidingObject.y = collidingObject.previousY;
            } else {
                // Adjust the position of vertical move triggers
                global.topMoveTrigger.y += shiftBy*-1;
                global.bottomMoveTrigger.y += shiftBy;
            }
        }
    }


    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.backGroundDiv = document.querySelector("#background");
    }
}

export {MoveTriggerHorizontaly}
export {MoveTriggerVertically}