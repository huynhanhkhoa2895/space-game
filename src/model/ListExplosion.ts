import Explosion from './Explosion'
import {remove} from 'lodash'
export default class ListExplosion{
    private list : Array<Explosion> = [];
    add(explosion : Explosion){
        this.list.push(explosion)
    }
    get(){
        return this.list
    }
    remove(explosion : Explosion){
        remove(this.list,(_explosion: Explosion) => _explosion.getId() === explosion.getId())
        return this.list;
    }
}