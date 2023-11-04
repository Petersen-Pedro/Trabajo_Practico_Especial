class Ficha extends Circle{
    constructor(posX, posY, radius, fill, moves, ctx){
        super(posX, posY, radius, fill, ctx);
        this.moves = moves;
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();

        if (this.moves) {
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 4;
        }

        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();

        if (this.moves) { 
            this.ctx.stroke();
        }

        ctx.closePath();
    }

    setMoves(moves){
        this.moves = moves;
    }

    setPos(x, y){
        this.posX = x;
        this.posY = y;
    }
}