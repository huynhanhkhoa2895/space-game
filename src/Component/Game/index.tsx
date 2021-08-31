import React, { Component, createRef } from 'react';
import "../../assets/main.scss"
import SpaceShip from "../../model/SpaceShip"
import Map from "../../model/Map"
import { isEmpty } from "lodash";
import ListBullet from '../../model/ListBullet';
import ListExplosion from '../../model/ListExplosion';
import Bullet from '../../model/Bullet';
import Explosion from '../../model/Explosion';
import ComponentItemBullet from "./ComponentItemBullet";
import ListMeteorite from '../../model/ListMeteorite';
import ComponentItemMeoterite from './ComponentItemMeoterite';
import Meteorite from '../../model/Meteorite';
import ComponentItemExplosion from './ComponentItemExplosion';
import SpaceShipComponent from './SpaceShipComponent';
import MapItem from '../../model/MapItem';
import gameover from "../../assets/gameover.png";
import ComponentListMeteorite from './ComponentListMeteorite';
import ComponentListBullet from './ComponentListBullet';

const spaceMap = new Map()
const crrRef: any = createRef();
const spaceRef: any = createRef();
const bulletRef: any = createRef();

class Game extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            listBullet: null,
            listMeteorite: null,
            listExplosion: null,
            spaceship: null,
            isEnd: false,
            point: 0,
        }
    }
    componentDidMount() {
        crrRef.current.focus()
        this.gameStart()
    }
    gameStart() {
        const spaceship = new SpaceShip()
        const listBullet = new ListBullet()
        const listExplosion = new ListExplosion()
        const listMeteorite = new ListMeteorite()
        this.setState({
            spaceship: spaceship,
            listBullet: listBullet,
            listMeteorite: listExplosion,
            listExplosion: listMeteorite,
            isEnd: false,
            point: 0
        })

    }
    gameEnd() {
        this.setState({
            listBullet: null,
            listMeteorite: null,
            listExplosion: null,
            spaceship: null,
            isEnd: true,
        })
    }
    handleKeyDown = (e: any) => {
        if (spaceRef != null && spaceRef.current != null) spaceRef.current.handleKeyDown(e)
    }
    handleKeyUp = (e: any) => {
        if (spaceRef != null && spaceRef.current != null) spaceRef.current.handleKeyUp(e)
    }
    spaceShipFire = () => {
        if (bulletRef != null && bulletRef.current != null) bulletRef.current.spaceShipFire(this.state.spaceship)
    }
    impactTarget = (meteorite: Meteorite, target: Bullet | SpaceShip) => {
        if (!isEmpty(this.state.listExplosion) && !isEmpty(this.state.listBullet) && !isEmpty(this.state.listMeteorite)) {
            const explosion = new Explosion(meteorite.getLeft(), meteorite.getTop())
            this.state.listExplosion.add(explosion)
            spaceMap.remove([target.getId(), meteorite.getId()])
            if (target.getType() === "bullet") {
                this.state.listBullet.remove(target);
                this.state.listMeteorite.remove(meteorite);
                this.setState({ listBullet: this.state.listBullet, listMeteorite: this.state.listMeteorite, listExplosion: this.state.listExplosion,point : this.state.point+1,})
            }
            else if (target.getType() === "spaceship") {
                this.setState({ explosion: this.state.explosion, spaceship: null, })
                setTimeout(() => {
                    this.gameEnd()
                }, 500)

            }
        }
    }
    renderListBullet = () => {
        return (
            <ComponentListBullet 
                ref={bulletRef}
                listBullet={this.state.listBullet}
                isEnd={this.state.isEnd}
                spaceMap={spaceMap} 
                key={"renderListBullet"} 
            />
        )
    }
    renderListMeteorite = () => {
        return <ComponentListMeteorite 
            listMeteorite={this.state.listMeteorite}
            isEnd={this.state.isEnd}
            spaceMap={spaceMap} 
            key={"renderListMeteorite"} 
            impactTarget={(meteorite: Meteorite, target: any)=>this.impactTarget(meteorite,target)}
        />
    }
    removeExplosion = (explosion: Explosion) => {
        if (this.state.listExplosion != null) {
            this.state.listExplosion.remove(explosion);
            this.setState({ listExplosion: this.state.listExplosion })
        }

    }
    renderExplosion = () => {
        let xhtml: any = []
        this.state.listExplosion.get().map((explosion: Explosion) =>
            xhtml.push(
                <ComponentItemExplosion key={explosion.getId().toString()} explosion={explosion} removeExplosion={(explosion: Explosion) => this.removeExplosion(explosion)} />
            )
        )
        return (xhtml)
    }
    render() {
        return (
            <>
                <div className="point">
                    <h3>{this.state.point}</h3>
                </div>
                {
                    this.state.isEnd && (
                        <div className="game-button text-center">
                            <div>
                                <button type="button" className="btn btn-success" onClick={()=>this.gameStart()}>Bắt đầu</button>
                            </div>
                        </div>
                    )
                }

                <div ref={crrRef} key="main" className="box-container" id="main" onKeyDown={(event) => this.handleKeyDown(event)} onKeyUp={(event) => this.handleKeyUp(event)} tabIndex={100} >

                    {
                        this.state.isEnd && (
                            <div className="gameover">
                                <img src={gameover} />
                            </div>
                        )
                    }
                    {
                        this.state.spaceship && (
                            <SpaceShipComponent
                                key={this.state.spaceship.getId()}
                                spaceship={this.state.spaceship}
                                spaceMap={spaceMap}
                                ref={spaceRef}
                                spaceShipFire={() => this.spaceShipFire()}
                            />
                        )
                    }
                    {this.state.listMeteorite && this.renderListMeteorite()}
                    {this.state.listBullet && this.renderListBullet()}
                    {this.state.listExplosion && this.renderExplosion()}
                </div>
            </>
        )
    }

}
export default Game;