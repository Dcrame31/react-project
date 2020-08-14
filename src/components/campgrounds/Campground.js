import React from 'react'
import { Link } from 'react-router-dom';


export default function Campground(props) {
    return (
        <div>
            <ul>
                <li><Link to="/campgrounds/:id">{props.campground.name}</Link></li>
            </ul>
        </div>
    )
}
