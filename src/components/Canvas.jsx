import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';

const Canvas = () => {
    const viewBox = [window.innerWidth/-2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return(
        <svg 
        id="shooter-game"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
        >
        <Sky />
        <Ground />
        <CannonBase/>
        </svg>
    );
};

export default Canvas;