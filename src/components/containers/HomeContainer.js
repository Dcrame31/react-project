import React from 'react'
import tent from '../../tent.png';

const HomeContainer = () => {

    return (
        <div class="homeContainer">
            <h1>California Campgrounds</h1>
            <h3>"In every walk with nature one receives far more than he seeks."</h3>
            <img class="image" src={tent} />
            <div class="form">
                <p>The history of recreational camping is often traced back to Thomas Hiram Holding, a British travelling tailor, but it was actually first popularised in the UK on the river Thames. By the 1880s large numbers of visitors took part in the pastime, which was connected to the late Victorian craze for pleasure boating.</p>
            </div>
        </div>
    )
}

export default HomeContainer;