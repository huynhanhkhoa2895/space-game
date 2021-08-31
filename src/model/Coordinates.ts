import PointCoordinates from './PointCoordinates'
export default class Coordinates{
    private A : PointCoordinates;
    private B : PointCoordinates = new PointCoordinates(0,0);
    private C : PointCoordinates = new PointCoordinates(0,0);
    private D : PointCoordinates = new PointCoordinates(0,0);
    constructor(left : number, top : number,width : number,height : number){
        this.A = new PointCoordinates(left,top)
        this.B = new PointCoordinates(left+width,top)
        this.C = new PointCoordinates(left,top+height)
        this.D = new PointCoordinates(left+width,top+height)
        // this.updateCoordinates(left,top,width,height);
    }
    setA(value : PointCoordinates){
        return this.A = value;
    }
    setB(value : PointCoordinates){
        return this.B = value;
    }
    setC(value : PointCoordinates){
        return this.C = value;
    }
    setD(value : PointCoordinates){
        return this.D = value;
    }
    getA(){
        return this.A;
    }
    getB(){
        return this.B;
    }
    getC(){
        return this.C;
    }
    getD(){
        return this.D;
    }
    updateCoordinates(left : number, top : number,width : number,height : number){
        this.setA(new PointCoordinates(left,top))
        this.setB(new PointCoordinates(left+width,top))
        this.setC(new PointCoordinates(left,top+height))
        this.setD(new PointCoordinates(left+width,top+height))
        return this
        // let A = [left,top]
        // this.setA(A)
    }
}