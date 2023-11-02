class Ficha extends Circle{
    constructor(posX, posY, radius, fill, ctx){
        super(posX, posY, radius, fill, ctx);
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        ctx.closePath();
    }

    setPos(x, y){
        this.posX = x;
        this.posY = y;
    }
}