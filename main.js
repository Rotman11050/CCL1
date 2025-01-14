const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
gravityNum = 0.3;
canvas.width = 1024;
canvas.height = 576;

class Player {
    constructor(position){
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.height = 100;
        this.width = 100;
    }

    draw()
    {
        c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.draw();

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 

        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.position.y += this.velocity.y;
            this.velocity.y += gravityNum;
        }
        else{
            this.velocity.y = 0;
        }
        // this.velocity.y += gravityNum;
    }

   

}

const player = new Player({
    x: 100,
    y: 100,
});

const keys = {
    d:{
        pressed: false,
    },
    a:{
        pressed: false,
    },
}
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle= 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update();

    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 7;
    else if (keys.a.pressed) player.velocity.x = -7;
}

animate();



window.addEventListener('keydown', (event) =>{
    switch(event.key){
        case 'd':
        keys.d.pressed = true
        break;
        case 'a':
            keys.a.pressed = true
        break;
        case 'w':
        player.velocity.y = -10;
        break;
    }
})
window.addEventListener('keyup', (event) =>{
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
        break;
        case 'a':
            keys.a.pressed = false;
        break;
        case 'w':
        player.velocity.y = gravityNum;
        break;
    }
})
