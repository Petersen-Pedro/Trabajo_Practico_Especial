class Ficha extends Circle{
    constructor(posX, posY, radius, fill, moves, ctx, image){
        super(posX, posY, radius, fill, ctx);
        this.moves = moves;
        this.image = image; //agregado para la imagen
        this.draw();
    }

    draw(){
        /**
        
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        */

        if (this.moves) {
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 4;
        }

        if(this.image){
            this.ctx.drawImage(this.image, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
        }
        /**
         this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
         this.ctx.fill();
         */

        if (this.moves) { 
            this.ctx.stroke();
        }

        //ctx.closePath();
    }

    setMoves(moves){
        this.moves = moves;
    }

    setPos(x, y){
        this.posX = x;
        this.posY = y;
    }

    setImage(image) {
        this.image = image;
    }

}