import React, { Component } from 'react';
import Location from '../locations/Location';


const Locations = (props) => {

    const locations = [...props.locations]
        .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
        .map((location, id) => <Location key={id} location={location} handleOnClick={props.handleOnClick} />)

    return (
        <div>
            {locations}
        </div>
    )
}

export default Locations;