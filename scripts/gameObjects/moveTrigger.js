import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class MoveTrigger extends BaseGameObject {
    backGroundDiv = null;
    moveWithPlayer = false;
    counter = 0;
    update = function () {
        this.backGroundDiv.style.backgroundPositionX = global.backgroundShift + "px";
        global.canvas.style.marginLeft =  global.backgroundShift  + "px";
    }

    draw = function () {
    //    global.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    reactToCollision = function (collidingObject)   {
        if (collidingObject.name == "Skeleton") {
            collidingObject.x = collidingObject.previousX;
        
            global.allGameObjects.forEach(gameObject => {
                if(gameObject.moveWithPlayer === true)
                {
                    if(collidingObject.xVelocity > 0  && global.counter < 10000)
                    {
                        global.counterRight = 0;
                        global.counter++;
    
                    }
                    else if(collidingObject.xVelocity < 0 && global.counter >= -500)
                    {
                        global.counter--;
                    }

                    console.log(global.counter);
                    if(global.counter>= -500 && global.counter < 10000)
                    {
                        gameObject.x -= collidingObject.xVelocity * global.deltaTime;

                    }

                }
            });
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        //this.loadImages(["./images/apple.png"]);
        this.backGroundDiv = document.querySelector("#background");
    }
}

export {MoveTrigger}