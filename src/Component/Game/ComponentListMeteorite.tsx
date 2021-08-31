import React, { Component, createRef } from 'react';
import ComponentItemMeoterite from './ComponentItemMeoterite';
import Meteorite from '../../model/Meteorite'
import MapItem from '../../model/MapItem';
import { isEqual } from 'lodash';

class ComponentListMeteorite extends Component<any, any> {
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {
            listMeteorite : props.listMeteorite
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.randomMakeMaterite()
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState = (state, callback) => {
            return;
        };
    }
    randomMakeMaterite = () => {
        if (!this.props.isEnd) {
            // const speed = Math.floor(this.state.point / 10) === 0 ? 0.3 : 0.3 + (Math.floor(this.state.point / 10)*0.1)
            const left = Math.floor(Math.random() * 471);
            const meteorite = new Meteorite(left)
            const mapItem = new MapItem(meteorite, "meteorite")
            this.props.spaceMap.add(mapItem)
            this.state.listMeteorite.add(meteorite)
            this.setState({ listMeteorite: this.state.listMeteorite }, () => {
                setTimeout(() => {
                    this.randomMakeMaterite()
                }, 2000)
            })

        }
    }
    removeMeteorite = (meteorite: Meteorite) => {
        this.state.listMeteorite.remove(meteorite);
        this.props.spaceMap.remove([meteorite.getId()])
        this.setState({ listMeteorite: this.state.listMeteorite })
    }
    // shouldComponentUpdate(nextProps : any,nextState : any){
    //     return !isEqual(this.props.isEnd,nextProps.isEnd) || !isEqual(this.state,nextState)
    // }
    componentDidUpdate(prevProps: any, prevState: any){
        if(!isEqual(this.props.isEnd,prevProps.isEnd) && this.props.isEnd){
            this.randomMakeMaterite()
        }
    }
    render(){
        let xhtml: any = []
        if (this.state.listMeteorite != null) {
            this.state.listMeteorite.get().map((meteorite: Meteorite) =>
                xhtml.push(
                    <ComponentItemMeoterite 
                        spaceMap={this.props.spaceMap} 
                        key={meteorite.getId().toString()} 
                        meteorite={meteorite} 
                        removeMeteorite={(meteorite: Meteorite) => this.removeMeteorite(meteorite)} 
                        impactTarget={(meteorite: Meteorite, target: any) => this.props.impactTarget(meteorite, target)} />
                )
            )
        }
        return (
            <div tabIndex={1}>
                {xhtml}
            </div>
        )
    }
}
export default ComponentListMeteorite