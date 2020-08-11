import React, { Component } from 'react'
import CampgroundContainer from './CampgroundContainer'
import { connect } from 'react-redux';

export default class LocationContainer extends Component {

    state = {
        location: ''
    }

    // componentDidMount() {
    /* use fetchMethod here to render list of locations */
    // }

    /* location onClick renders list of campgrounds */
    render() {
        return (
            <div>
                {/* <CampgroundContainer location={this.state.location} /> */}
            </div>
        )
    }
}
