class Circle{
    constructor(posX, posY, radius, fill, ctx){
        this.radius = radius;
        this.fill = fill;
        this.ctx = ctx;

        this.posX = posX;
        this.posY = posY;
    }
    
    draw(){}
    
    isPointerInside(x, y){
        const _x = this.posX - x;
        const _y = this.posY - y;
        return Math.sqrt((_x * _x) + (_y * _y)) < this.radius;
    }

    setFill(fill){
        this.fill = fill;
    }
    getFill(){
        return this.fill;
    }
}