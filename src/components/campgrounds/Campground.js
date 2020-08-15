import React from 'react'
import { Link } from 'react-router-dom';


export default function Campground(props) {
    return (
        <div>
            <Link to={`/campgrounds/${props.campground.id}`}>{props.campground.name}</Link>
        </div>
    )
}
