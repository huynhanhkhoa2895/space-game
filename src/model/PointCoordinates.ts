export default class PointCoordinates{
    private X : number = 0;
    private Y : number = 0;
    constructor(X : number, Y : number){
        this.X = X;
        this.Y = Y
    }
    getX(){
        return this.X
    }
    getY(){
        return this.Y;
    }
}