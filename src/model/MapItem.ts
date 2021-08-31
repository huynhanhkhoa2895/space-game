import Coordinates from "./Coordinates";
export default class MapItem{
    private id : string;
    private item : any;
    private type : string;
    constructor(item : any, type : string){
        this.id = item.getId();
        this.item = item;
        this.type = type;
    }
    setItem(item : any){
        this.item = item;
    }
    setType(type : string){
        this.type = type
    }

    getId(){
        return this.id;
    }
    getItem(){
        return this.item;
    }
    getType(){
        return this.type;
    }
}