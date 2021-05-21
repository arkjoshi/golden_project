class Wall
{
    constructor(x,y,w,h){
        this.xPosition = x;
        this.yPosition = y;
        this.height = h;
        this.width = w;
    }
    display() {
        rect(this.xPosition, this.yPosition, this.width, this.height);
    }
}