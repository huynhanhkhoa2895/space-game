import Bullet from './Bullet'
import {remove} from 'lodash'
export default class ListBullet{
    private list : Array<Bullet> = [];
    add(bullet : Bullet){
        this.list.push(bullet)
    }
    get(){
        return this.list
    }
    remove(bullet : Bullet){
        remove(this.list,(_bullet: Bullet) => _bullet.getId() === bullet.getId())
        return this.list;
    }
}