import React, { Component } from 'react';
import Location from '../locations/Location';

export default class Locations extends Component {



    render() {
        const locations = this.props.locations
            .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
            .map((location, id) => <Location key={id} location={location} />)

        return (
            <div>
                {locations}
            </div>
        )
    }
}
