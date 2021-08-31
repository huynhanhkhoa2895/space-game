import React, { useState, useEffect, useRef } from 'react';
import "../../assets/main.scss"
import bullet from "../../assets/b.png"

import { unmountComponentAtNode, findDOMNode } from 'react-dom';
const BulletItem = (props: any) => {
    const [left, setLeft] = useState(props.sLeft)
    const [top, setTop] = useState(props.sTop)
    const [speed, setSpeed] = useState(5)
    let innerRef = useRef<any>(null);
    useEffect(() => {
        // subscribe event
        if (innerRef.current != null) {
            const interval = setInterval(function () {
                if (innerRef != null && innerRef.current != null) {
                    const _top = parseFloat(innerRef?.current.style.top)
                    if (_top < -10) {
                        clearInterval(interval);
                        clearBullet()
                    } else {
                        setTop((top: any) => {
                            return top - 20
                        })
                    }
                } else {
                    clearInterval(interval);
                    clearBullet()
                }

            }, 100)
        }

        // const interval = setTimeout(() =>{
        //     clearInterval(interval);
        //     clearBullet()
        // },2000)
        return () => {
            console.log(`unmount`, props.id)
            // unsubscribe event
            //   clearInterval(interval);
        };

    }, []);

    const clearBullet = () => {
        props.removeBullet(props.id)
    }
    return (
        <div ref={innerRef} className="box-bullet" style={{ left: left, top: top }}>
            <img src={bullet} />
        </div>
    )
}
export default BulletItem