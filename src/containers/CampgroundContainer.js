import React, { Component } from 'react'
// import CampgroundForm from '../components/campgrounds/CampgroundForm';
import Campgrounds from '../components/campgrounds/Campgrounds';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../actions/campgroundActions';

class CampgroundContainer extends Component {

    state = {
        campground: '',
        location: ''
    }


    componentDidMount() {
        this.props.fetchCampgrounds();
    }

    render() {
        return (
            <div>
                {/* <CampgroundForm /> */}
                <Campgrounds campgrounds={this.props.campgrounds} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campgrounds: state.manageCampgrounds.campgrounds
    }
}

export default connect(mapStateToProps, { fetchCampgrounds })(CampgroundContainer);
