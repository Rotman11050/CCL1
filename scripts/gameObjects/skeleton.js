import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Skeleton extends BaseGameObject {
    name = "Skeleton";
    xVelocity = 0;
    yVelocity = 0;
    useGravityForces = true;

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 18,
            right: this.x + this.width - 22,
            top: this.y + 14,
            bottom: this.y + this.height - 3
        }
        return bounds;
    }

    update = function() {
        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;
        if (this.xVelocity == 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }
    //     this.y -= this.physicsData.prevFallingVelocity;
    //     global.allGameObjects.forEach(gameObject => {
    //         if(gameObject.moveWithPlayer === true)
    //         {
    //         gameObject.y -= this.physicsData.prevFallingVelocity;

    //         console.log(this.physicsData.prevFallingVelocity);
    //     }
    // });
    }

    

    // draw = function () {
    //     global.ctx.fillStyle = "#000000";
    //     global.ctx.fillRect(this.x, this.y, this.width, this.height);
    // }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/apple.png"]);
        this.loadImagesFromSpritesheet("./images/BODY_skeleton.png", 9, 4);
    }
}

export {Skeleton}