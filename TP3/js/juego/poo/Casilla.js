class Casilla extends Circle{
    constructor(posX, posY, radius, fill, ctx){
        super(posX, posY, radius, fill, ctx);
    }

    draw(){
        const centerX = this.posX + this.radius / 2;
        const centerY = this.posY + this.radius / 2;
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        ctx.closePath();
    }
}