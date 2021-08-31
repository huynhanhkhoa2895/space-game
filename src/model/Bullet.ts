import ListMeteorite from './ListMeteorite';
import Meteorite from './Meteorite';
import { isEmpty } from 'lodash';
import Coordinates from './Coordinates';

export default class Bullet {
    private id: String;
    private left: number = 0;
    private top: number = 250;
    private width: number = 20;
    private height: number = 20;
    private coordinates: Coordinates = new Coordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth());
    private type: string = "bullet";
    constructor(left?: number, top?: number) {
        this.id = (Math.floor(Math.floor(Date.now() / 1000) + Math.random() + Math.random()) + Math.random()).toString();
        if (left != null) {
            this.setLeft(left)
        }
        if (top != null) {
            this.setTop(top)
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
    getId() {
        return this.id
    }
    getLeft() {
        return this.left
    }
    getType() {
        return this.type
    }
    getTop() {
        return this.top
    }
    getWidth() {
        return this.width
    }
    getHeight(){
        return this.height
    }
    getCoordinates() {
        return this.coordinates
    }
    goToTop(vNumber: number = 10) {
        this.top = this.top - vNumber;
        this.coordinates.updateCoordinates(this.getLeft(), this.getTop(), this.getHeight(), this.getWidth())
        return this;
    }
}