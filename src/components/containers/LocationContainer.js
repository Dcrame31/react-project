import React, { Component } from 'react'
// import CampgroundContainer from './CampgroundContainer'
import Locations from '../locations/Locations';
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/campgroundActions';

class LocationContainer extends Component {


    componentDidMount() {
        this.props.fetchLocations()
    }

    render() {
        return (
            <div>
                {this.props.loading ? <h2>Loading...</h2> : <Locations locations={this.props.locations} />}
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