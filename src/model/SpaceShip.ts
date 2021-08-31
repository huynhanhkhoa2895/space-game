import Coordinates from "./Coordinates";

export default class SpaceShip{
    private id: String;
    private left : number = 0;
    private top : number = 450;
    private width : number = 50;
    private height : number = 50;
    private type: string = "spaceship";
    private coordinates: Coordinates = new Coordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth());
    constructor(left? : number, top? : number){
        this.id = (Math.floor(Math.floor(Date.now() / 1000)+Math.random()+Math.random())+Math.random()).toString();
        if(left != null){
            this.setLeft(left)
        }
        if(top != null){
            this.setTop(top)
        }
        this.setCoordinates(this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth()))
    }
    setCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }
    setLeft(left: number){
        this.left = left;
    }
    setTop(top: number){
        this.top = top;
    }
    getId(){
        return this.id
    }
    getLeft() : number{
        return this.left
    }
    getType(){
        return this.type
    }
    getTop(): number{
        return this.top
    }
    getWidth(): number{
        return this.width
    }
    getHeight(): number{
        return this.height
    }
    getCoordinates() {
        return this.coordinates
    }
    moveLeft(speed : number,type : string = "add"){
        if(type === "add"){
            this.left = this.left + speed;
        }else{
            this.left = this.left - speed;
        }
        this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth())
        return this;
    }
    moveTop(speed : number,type : string = "add"){
        if(type === "add"){
            this.top = this.top + speed;
        }else{
            this.top = this.top - speed;
        }
        this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth())
        return this;
    }
}