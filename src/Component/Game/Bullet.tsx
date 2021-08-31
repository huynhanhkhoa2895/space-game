import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import "../../assets/main.scss"
import bullet from "../../assets/b.png"
import BulletItem from './BulletItem';
import md5 from "md5";
import { concat, remove } from 'lodash';

const Bullet = (props: any) => {
    const [bulletItem, setBulletItem] = useState<any>([])
    const [leftBullet, setLeftBullet] = useState(0)
    const [topBullet, setTopBullet] = useState(0)
    const [speed, setSpeed] = useState(5)
    const innerRef = useRef<any>(null);
    useEffect(() => {
        setTopBullet(props.sTop)

    }, [props.sTop])
    useEffect(() => {
        setLeftBullet(props.sLeft)

    }, [props.sLeft])
    useEffect(() => {
        // subscribe event
        // document.addEventListener("keydown",(e)=> handleKeyPress(e,props.sTop,props.sLeft));
        return () => {
            // unsubscribe event
            //   document.removeEventListener("keydown",(e)=>handleKeyPress(e,props.sTop,props.sLeft));
        };

    }, [props.sTop, props.sLeft]);
    const handleKeyPress = (e: any, _top?: any, _left?: any) => {
        if (e.keyCode === 32) {
            setBulletItem((_bulletItem: any) => {
                const newItem = concat(_bulletItem, <BulletItem key={Math.random()} id={md5(Math.random().toString())} sTop={_top} sLeft={_left} index={_bulletItem.length} removeBullet={(index: any) => removeBullet(index)} />)
                return newItem
            })

        }
    }
    const removeBullet = (index: any) => {

        const _bulletItem = [...bulletItem]
        const newBullet = [..._bulletItem]
        setBulletItem((_bulletItem: any) => {
            remove(_bulletItem, (item: any) => item.props.id === index);
            return [..._bulletItem]
        })
        // remove(_bulletItem,(item)=>item.props.id === index);
        // if(_bulletItem.length === 0){
        //     setBulletItem([]);
        // }else{
        //     setBulletItem(_bulletItem);
        // }

        // setBulletItem((bulletItem : any)=> {
        //     bulletItem.splice(index,1);
        //     return [...bulletItem]
        // })
    }
    const renderMain = () => {

        return (
            <>
                <div tabIndex={1} id="bullet-container">
                    {bulletItem}
                </div>
            </>
        )
    }
    return (
        <>
            {renderMain()}
        </>
    )
}
export default Bullet