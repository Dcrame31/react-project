import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CampgroundContainer from '../containers/CampgroundContainer';

export default function CampgroundList(props) {

    return (
        <div>
            <h1>campground list</h1>
            <CampgroundContainer id={props.match.params.id} />
        </div>
    )

}
