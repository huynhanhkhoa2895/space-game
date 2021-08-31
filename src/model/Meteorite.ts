import Bullet from './Bullet';
import ListBullet from './ListBullet';
import Coordinates from './Coordinates';
import { isEmpty } from 'lodash';

export default class Meteorite {
    private id: String;
    private left: number = 0;
    private top: number = 0;
    private width: number = 50;
    private height: number = 50;
    private speed: number = 0.3;
    private coordinates: Coordinates = new Coordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth());
    private targetBullet?: Bullet;
    private type: string = "meteorite";
    constructor(left?: number,speed? : number) {
        this.id = (Math.floor(Math.floor(Date.now() / 1000) + Math.random() + Math.random()) + Math.random()).toString();
        if (left != null) {
            this.setLeft(left)
        }
        this.setCoordinates(this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth()))
    }
    setCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }
    setLeft(left: number) {
        this.left = left;
    }
    setTop(top: number) {
        this.top = top;
    }
    setSpeed(speed: number) {
        this.speed = speed;
    }
    setTargetBullet(targetBullet: Bullet) {
        this.targetBullet = targetBullet
    }
    getId() {
        return this.id
    }
    getLeft() {
        return this.left
    }
    getCoordinates() {
        return this.coordinates
    }
    getHeight() {
        return this.height
    }
    getType() {
        return this.type
    }
    getSpeed() {
        return this.speed
    }
    getWidth() {
        return this.width
    }
    getMaxLeft() {
        return this.left + this.width;
    }
    getTop() {
        return this.top
    }
    getCrrTop() {
        return this.top + this.height;
    }
    getTargetBullet() {
        return this.targetBullet
    }
    goToDown(vNumber: number = 10) {
        this.top = this.top + vNumber;
        this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth())
        return this;
    }
}