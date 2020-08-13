import React, { Component } from 'react'
import CampgroundContainer from './CampgroundContainer'
import Locations from '../components/locations/Locations';
import { connect } from 'react-redux';
// import { fetchLocations } from '../actions/campgroundActions';

class LocationContainer extends Component {

    state = {
        locations: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/locations")
            .then(res => res.json()
                .then(locations => {
                    this.setState({
                        locations: locations
                    })
                })
            )
    }

    /* location onClick renders list of campgrounds */

    render() {
        console.log(this.state)

        return (
            <div>
                <Locations locations={this.state.locations} />
                {/* <CampgroundContainer location={this.state.location} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}



export default connect(mapStateToProps)(LocationContainer)