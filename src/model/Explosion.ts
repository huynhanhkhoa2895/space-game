export default class Explosion {
    private id: String;
    private left: number = 0;
    private top: number = 250; 
    constructor(left?: number, top?: number) {
        this.id = (Math.floor(Math.floor(Date.now() / 1000) + Math.random() + Math.random()) + Math.random()).toString();
        if (left != null) {
            this.setLeft(left)
        }
        if (top != null) {
            this.setTop(top)
        }
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
    getTop() {
        return this.top
    }
}