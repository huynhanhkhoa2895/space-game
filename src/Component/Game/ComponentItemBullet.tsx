import React, { useState, useEffect, createRef, forwardRef, Component } from 'react';
import Bullet from '../../model/Bullet';
import bulletImg from "../../assets/b.png"
class ComponentItemBullet extends Component<any, { bullet: Bullet, speed: number, spaceMap: any }> {
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {
            bullet: props.bullet,
            speed: 1,
            spaceMap: props.spaceMap,
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.bulletGoToTop();
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState = (state, callback) => {
            return;
        };
    }
    bulletGoToTop() {
        this.setState({ bullet: this.state.bullet.goToTop(this.state.speed) }, () => {
            if (this.state.bullet.getTop() >= 0) {
                // const target = this.state.spaceMap.checkImpact(this.state.bullet)
                setTimeout(() => {
                    this.bulletGoToTop();
                })

            } else {
                this.props.removeBullet(this.state.bullet)
            }
        })
    }
    render() {
        return (
            <div className="box-bullet" style={{ left: this.state.bullet.getLeft(), top: this.state.bullet.getTop() }}>
                <img src={bulletImg} />
            </div>
        )
    }
}
export default ComponentItemBullet