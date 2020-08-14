import React, { Component } from 'react'
import Campground from './Campground';

export default class Campgrounds extends Component {
    render() {
        const camgrounds = this.props.campgrounds
            .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
            .map((campground, id) => <Campground key={id} campground={campground} />)
        return (
            <div>
                {camgrounds}
            </div>
        )
    }
}
