import { Link } from 'react-router-dom';
import React, { Component } from 'react'


const Campground = (props) => {
    return (
        <div>
            <Link to={`/campgrounds/${props.campground.id}`}>{props.campground.name}</Link>
        </div>
    )
}

export default Campground;