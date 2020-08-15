import React, { Component } from 'react'
// import CampgroundList from './CampgroundList';
import Campground from './Campground';
import { Link } from 'react-router-dom';

export default class Campgrounds extends Component {
    render() {
        const campgrounds = this.props.campgrounds
            .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
            .map((campground, id) => <Campground key={id} campground={campground} />)
        return (
            <div>
                {campgrounds}
                <br />
                <button>Add New Campground</button>
            </div>
        )
    }
}
