import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";


let livesCounter = 3;

class Enemy extends BaseGameObject {
    xVelocity = 0;
    yVelocity = -200;
    wasCalledCounter = 0;

    randomMovementData = {
       "timeToChangeDirection": 6,
       "currentDirectionElapsedTime": 0,
       "movementChangePossibilityStartValue": 0.1,
       "movementChangePossibility": 0.1,
       "movementChangePossibilitySteps": 0.02,
       "movementChangeOppositePossibility": 0.3
    };

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.3,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 1,
        "currentSpriteIndex": 0
    };

    update = function () {
        this.randomMovementData.currentDirectionElapsedTime += global.deltaTime;

        if (this.randomMovementData.currentDirectionElapsedTime >= this.randomMovementData.timeToChangeDirection) {
            this.randomizeMovement();
            this.randomMovementData.currentDirectionElapsedTime = 0;
        }

        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;
        this.screenWrap();
    }

    randomizeMovement = function () {
        const shouldChange = Math.random();
        if (shouldChange > this.randomMovementData.movementChangePossibility) {
            this.changeMovement();
            this.randomMovementData.movementChangePossibility = this.randomMovementData.movementChangePossibilityStartValue;
        } else {
            this.randomMovementData.movementChangePossibility += this.randomMovementData.movementChangePossibilitySteps;
        }
    }

    changeMovement = function () {
        const shouldGoOpposite = Math.random();
        if (shouldGoOpposite < this.randomMovementData.movementChangeOppositePossibility) {
            this.xVelocity *= -1;
            this.yVelocity *= -1;
        } else {
            const makePositive = Math.random();
            if (this.xVelocity !== 0) {
                this.yVelocity = 200 * (makePositive > 0.5 ? 1 : -1);
                this.xVelocity = 0;
            } else if (this.yVelocity !== 0) {
                this.xVelocity = 200 * (makePositive > 0.5 ? 1 : -1);
                this.yVelocity = 0;
            }
        }
    }

    screenWrap = function () {
        const canvasBounds = global.getCanvasBounds();
        const bounds = this.getBoxBounds();
        if (bounds.left >= canvasBounds.right) {
            this.x = canvasBounds.left - this.width;
        } else if (bounds.right <= canvasBounds.left) {
            this.x = canvasBounds.right;
        } else if (bounds.bottom <= canvasBounds.top) {
            this.y = canvasBounds.bottom;
        } else if (bounds.top >= canvasBounds.bottom) {
            this.y = canvasBounds.top - this.height;
        }
    }
    

    // reactToCollision = function (collidingObject){
        
    //     if (collidingObject.name === "Skeleton") {
    //         global.restartGame();
    //         if (global.wasCalled == true) {
    //             this.wasCalledCounter++;
    //             document.getElementById('healthDisplay').innerHTML = livesCounter;
    //             livesCounter--;
    //                 if (this.wasCalledCounter == 3) {
    //                     alert("YOU DIED, RESTART THE GAME");
    //                 }
    //         }
    //     }
    // }

    reactToCollision = function (collidingObject) {
        if (collidingObject.name === "Skeleton") {
            global.restartGame();
            
            if (global.wasCalled == true) {
                this.wasCalledCounter++;
                livesCounter--; 
                document.getElementById('healthDisplay').innerHTML = `Health: ${livesCounter}`; 
                if (livesCounter <= 0) {
                    alert("YOU DIED, RESTART THE GAME");
                    // livesCounter = 3; 
                    // document.getElementById('healthDisplay').innerHTML = `Health: ${livesCounter}`;
                    // this.wasCalledCounter = 0;
                }
            }
        }
    };

    constructor(x, y, width, height, name) {
        super (x, y, width, height, name);
        let images = ["./images/Tornado.jpg", "./images/wildTornado.jpg"];
        this.loadImages(images);
    }
}

export {Enemy}