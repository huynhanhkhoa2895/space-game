import Meteorite from './Meteorite'
import {remove} from 'lodash'
export default class ListMeteorite{
    private list : Array<Meteorite> = [];
    add(meteorite : Meteorite){
        this.list.push(meteorite)
    }
    get(){
        return this.list
    }
    remove(meteorite : Meteorite){
        remove(this.list,(_meteorite: Meteorite) => _meteorite.getId() === meteorite.getId())
        return this.list;
    }
}