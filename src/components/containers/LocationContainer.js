import React, { Component } from 'react'
// import CampgroundContainer from './CampgroundContainer'
import Locations from '../locations/Locations';
import { connect } from 'react-redux';
import { fetchLocations, fetchLocation } from '../../actions/campgroundActions';

class LocationContainer extends Component {

    state = {
        locations: []
    }

    componentDidMount() {
        this.props.fetchLocations()
    }

    componentDidUpdate() {

    }

    handleOnClick = (id) => {
        this.props.fetchLocation(id)
    }

    render() {
        return (
            <div>
                {/* <CampgroundContainer location={this.state.location} /> */}
                {this.props.loading ? <h2>Loading...</h2> : <Locations locations={this.props.locations} handleOnClick={this.handleOnClick} />}
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

export default connect(mapStateToProps, { fetchLocations, fetchLocation })(LocationContainer)