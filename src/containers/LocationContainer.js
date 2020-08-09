import React, { Component } from 'react'
import CampgroundContainer from './CampgroundContainer'

export default class LocationContainer extends Component {

    state = {
        location: ''
    }

    render() {
        return (
            <div>
                <CampgroundContainer location={this.state.location} />
            </div>
        )
    }
}
