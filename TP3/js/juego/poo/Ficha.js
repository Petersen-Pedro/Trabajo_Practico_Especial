class Ficha extends Circle{
    constructor(posX, posY, radius, fill, image, moves, ctx, cantFichas){
        super(posX, posY, radius, fill, ctx);
        this.moves = moves;
        this.image = image; 
        this.cantFichas = cantFichas;

        this.radiusMultiplier = 0;
        this.posSummer = 0;

        this.diplayStrokeValues();

        this.image.onload = () =>{
            this.draw();
        }
    }
    draw(){

        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(
            this.posX+this.posSummer, this.posY+this.posSummer, 
            this.radius * this.radiusMultiplier, 
            0, Math.PI * 2
        );
        ctx.closePath();

        this.ctx.drawImage(
            this.image, 
            this.posX - this.radius, this.posY - this.radius, 
            60, 60
        );
        
        if (this.moves) {
            this.ctx.strokeStyle = "blue";
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }
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

    diplayStrokeValues(){
        if (this.cantFichas === 4) {
            this.radiusMultiplier = 1.2;
            this.posSummer = 5;
        }else if (this.cantFichas === 5) {
            this.radiusMultiplier = 1.4;
            this.posSummer = 7;
        }else if(this.cantFichas === 6){
            this.radiusMultiplier = 1.6;
            this.posSummer = 10;
        }
    }
}