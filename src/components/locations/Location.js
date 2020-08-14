import React from 'react'
import { Link } from 'react-router-dom';


export default function Location(props) {
    return (
        <div>
            <ul>
                <li><Link
                    to={`/locations/${props.location.id}`}
                    onClick={() => props.handleOnClick(props.location.id)}
                >{props.location.name}</Link></li>
            </ul>
        </div>
    )
}
