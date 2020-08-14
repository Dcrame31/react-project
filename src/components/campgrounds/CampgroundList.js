import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CampgroundContainer from '../containers/CampgroundContainer';

export default class CampgroundList extends Component {
    render() {
        console.log(this.props.match.params.id)
        const campgrounds = this.props.match.params.id.campgrounds
        return (
            <div>
                <h1>campground list</h1>
                {campgrounds}
            </div>
        )
    }
}
