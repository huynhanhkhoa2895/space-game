import React, { useState, useEffect, createRef, forwardRef, Component } from 'react';
import Explosion from '../../model/Explosion';
import explosionimg from "../../assets/explosion.png"

class ComponentItemExplosion extends Component<any, { explosion: Explosion }> {
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {
            explosion: props.explosion,
        }
    }
    componentDidMount() {
        this._isMounted = true;
        setTimeout(() => {
            this.props.removeExplosion(this.state.explosion)
        }, 500)
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        return (
            <div className="box-explosion" style={{ left: this.state.explosion.getLeft(), top: this.state.explosion.getTop() }}>
                <img src={explosionimg} />
            </div>
        )
    }
}
export default ComponentItemExplosion