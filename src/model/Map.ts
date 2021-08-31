import MapItem from "./MapItem"
import {remove,find} from 'lodash'

export default class Map{
    private listItem : Array<MapItem> = [];
    get(){
        return this.listItem;
    }
    add(item : MapItem){
        return this.listItem.push(item)
    }
    remove(item : Array<String>){
        item.map((mapItemId : String) => {
            remove(this.listItem,(_item: MapItem) => _item.getId() === mapItemId)
        })
        
        return this.listItem;
    }
    find(id : String){
        return find(this.listItem,(_item: MapItem) => _item.getId() === id)
    }
    checkImpact(item : any) {
        let check = null;
        const x1 = item.getCoordinates().getA().getX()
        const y1 = item.getCoordinates().getA().getY()
        const w1 = item.getWidth();
        const h1 = item.getHeight();
        this.listItem.some((crrItem : MapItem)=>{
            if(item.getType() !== crrItem.getType() && crrItem.getId() !== item.getId()){
                const _item = crrItem.getItem()
                const x2 = _item.getCoordinates().getA().getX()
                const y2 = _item.getCoordinates().getA().getY()
                const w2 = _item.getWidth();
                const h2 = _item.getHeight();
                if((x1+w1 >= x2) && (x2+w2 >= x1) && (y1+w1 >= y2) && (y2+w2 >= y1)){
                    check = _item
                    return true
                }
            }
        })
        return check;
        // 
    }
}