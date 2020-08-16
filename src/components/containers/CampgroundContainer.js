import React, { Component } from 'react'
// import CampgroundForm from '../components/campgrounds/CampgroundForm';
import Campgrounds from '../campgrounds/Campgrounds';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../../actions/campgroundActions';


class CampgroundContainer extends Component {


    componentDidMount() {
        this.props.fetchCampgrounds(this.props.id);
    }

    render() {
        return (
            <div>
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
