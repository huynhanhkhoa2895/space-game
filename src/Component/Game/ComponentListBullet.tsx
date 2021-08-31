import React, { Component } from 'react';
import Bullet from '../../model/Bullet';
import ComponentItemBullet from "./ComponentItemBullet";
import SpaceShip from "../../model/SpaceShip"
import MapItem from '../../model/MapItem';
import { isEmpty } from 'lodash';

class ComponentListBullet extends Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            listBullet: this.props.listBullet
        }
    }
    spaceShipFire = (spaceship: SpaceShip) => {
        if (!isEmpty(this.state.listBullet)) {
            const bullet = new Bullet((spaceship.getLeft() + 15), spaceship.getTop())
            this.state.listBullet.add(bullet);
            const mapItem = new MapItem(bullet, "bullet")
            this.props.spaceMap.add(mapItem)
            this.setState({ listBullet: this.state.listBullet })
        }
    }
    removeBullet = (bullet: Bullet) => {
        this.state.listBullet.remove(bullet);
        this.props.spaceMap.remove([bullet.getId()])
        this.setState({ listBullet: this.state.listBullet })
    }
    renderBullet = () => {
        let xhtml: any = []
        if (this.state.listBullet != null) {
            this.state.listBullet.get().map((bullet: Bullet) =>
                xhtml.push(
                    <ComponentItemBullet spaceMap={this.props.spaceMap} key={bullet.getId().toString()} bullet={bullet} removeBullet={(bullet: Bullet) => this.removeBullet(bullet)} />
                )
            )
        }
        return (xhtml)
    }

    render() {
        return (
            <div tabIndex={1} id="bullet-container">
                {this.renderBullet()}
            </div>
        )
    }

}
export default ComponentListBullet;