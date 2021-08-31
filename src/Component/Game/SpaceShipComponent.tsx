import React, { useState, useEffect, useRef, useMemo, forwardRef, useImperativeHandle, Component, createRef } from 'react';
import "../../assets/main.scss"
import spaceshipimg from "../../assets/s.png"
import MapItem from '../../model/MapItem';

var movingTimeout: any = -1, FPS = 60, keyDownCrr: any = null;
class SpaceShipComponent extends Component<any, any> {
    innerRef: any = createRef();
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {
            spaceship: props.spaceship,
            speed: 5
        }

    }
    componentDidMount() {
        this._isMounted = true;
        const mapItem = new MapItem(this.state.spaceship, "spaceship")
        this.props.spaceMap.add(mapItem)
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState = (state, callback) => {
            return;
        };
    }
    handleKeyUp = (e: any) => {

        switch (e.keyCode) {
            case 32:
                this.props.spaceShipFire()
                break;
            case 37:
            case 38:
            case 39:
            case 40:
                this.stopMoving()
                break;
        }
    }
    handleKeyDown = (e: any) => {
        if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
            if (e.keyCode !== keyDownCrr) {
                this.stopMoving()
            }
        }
        switch (e.keyCode) {
            case 37:
                this.startMoving("left")
                keyDownCrr = 37
                break;
            case 38:
                this.startMoving("up")
                keyDownCrr = 38
                break;
            case 39:
                this.startMoving("right")
                keyDownCrr = 39
                break;
            case 40:
                this.startMoving("down")
                keyDownCrr = 40
                break;
        }

    }
    startMoving = (direction: any) => {
        if (movingTimeout === -1) {
            this.loop(direction);
        }
    }
    stopMoving = () => {
        clearTimeout(movingTimeout);
        movingTimeout = -1;
    }
    loop = (direction: any) => {
        // move(direction === 'left' ? -5 : 5, $('.mover'));
        const _left = this.state.spaceship.getLeft()
        const _top = this.state.spaceship.getTop()
        switch (direction) {
            case "left":
                if (_left > 0) {
                    this.setState({ spaceship: this.state.spaceship.moveLeft(this.state.speed, "minus") })
                }
                break;
            case "right":
                if (_left < 450) {
                    this.setState({ spaceship: this.state.spaceship.moveLeft(this.state.speed) })
                }
                break;
            case "up":
                if (_top > 0) {
                    this.setState({ spaceship: this.state.spaceship.moveTop(10, "minus") })
                }
                break;
            case "down":
                if (_top < 450) this.setState({ spaceship: this.state.spaceship.moveTop(this.state.speed) })
                break;
        }

        movingTimeout = setTimeout(this.loop, 10, direction);
    }
    render() {
        return (
            <>
                <div ref={this.innerRef} className="box-spaceship" style={{ left: this.state.spaceship.getLeft(), top: this.state.spaceship.getTop() }} >
                    <img src={spaceshipimg} />
                </div>
                {/* {renderBullet} */}
            </>
        )
    }
}
export default SpaceShipComponent;