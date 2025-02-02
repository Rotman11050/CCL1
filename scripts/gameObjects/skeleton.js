import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Skeleton extends BaseGameObject {
    name = "Skeleton";
    xVelocity = 0;
    yVelocity = 0;
    moveWithPlayer = false;
    useGravityForces = true;

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 85,
            right: this.x + this.width - 85,
            top: this.y + 14,
            bottom: this.y + this.height - 30
        }
        
        return bounds;
    }
    
    update = function() {
        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;
        if (this.xVelocity == 0) {
            global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
        }
        // global.ctx.rect(this.x, this.y, this.width, this.height);
        // global.ctx.stroke();
 
    }


    constructor(x, y, width, height) {
        super(x, y, width, height);
        // this.loadImages(["./images/apple.png"]);
        this.loadImagesFromSpritesheet("./images/charachtersprites.png", 6, 1);
    }
}

export {Skeleton}