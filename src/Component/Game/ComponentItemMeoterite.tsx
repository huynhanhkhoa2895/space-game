import React, { Component, createRef } from 'react';
import thienthach from "../../assets/thienthach.png"
class ComponentItemMeoterite extends Component<any, any> {
    innerRef: any = createRef();
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {
            meteorite: props.meteorite,
            speed:props.meteorite.getSpeed(),
            spaceMap: props.spaceMap,
        }
    }
    componentDidMount() {
        this.goToDown();
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.setState = (state, callback) => {
            return;
        };
    }
    goToDown = () => {
        this.setState({ meteorite: this.state.meteorite.goToDown(this.state.speed) }, () => {
            if (this.state.meteorite.getTop() < 500) {
                const target = this.state.spaceMap.checkImpact(this.state.meteorite)
                if (target == null) {
                    setTimeout(() => {
                        this.goToDown()
                    })
                } else {
                    this.props.impactTarget(this.state.meteorite, target)
                }

            } else {
                this.props.removeMeteorite(this.state.meteorite)
            }
        })

    }
    render() {
        return (
            <div ref={this.innerRef} className="box-meteorite" style={{ left: this.state.meteorite.getLeft(), top: this.state.meteorite.getTop() }} >
                <img src={thienthach} />
            </div>
        )
    }
}
export default ComponentItemMeoterite