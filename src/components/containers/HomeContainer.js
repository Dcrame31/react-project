import React from 'react'
import tent from '../../tent.png';

const HomeContainer = () => {

    return (
        <div class="homeContainer">
            <h1>California Campgrounds</h1>
            <h3>"In every walk with nature one receives far more than he seeks."</h3>
            <img class="image" src={tent} />
        </div>
    )
}

export default HomeContainer;