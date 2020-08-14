import React, { Component } from 'react'
// import CampgroundContainer from './CampgroundContainer'
import Locations from '../components/locations/Locations';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/campgroundActions';

class LocationContainer extends Component {

    componentDidMount() {
        this.props.fetchLocations()
    }

    /* location onClick renders list of campgrounds */

    render() {
        const locations = this.props.locations.map((location, id) => <li>{location.name}</li>)
        return (
            <div>
                {/* <CampgroundContainer location={this.state.location} /> */}
                <Locations locations={this.props.locations} />
                {/* {locations} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.manageLocations.locations,
        loading: state.manageLocations.loading
    }
}



export default connect(mapStateToProps, { fetchLocations })(LocationContainer)