import React, { Component } from 'react'
import Campground from './Campground';
// import CampgroundForm from './CampgroundForm';

const Campgrounds = (props) => {


    const campgrounds = props.campgrounds
        .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
        .map((campground, id) => <Campground key={id} campground={campground} />)


    return (
        <div>
            {campgrounds}
        </div>
    )
}

export default Campgrounds;