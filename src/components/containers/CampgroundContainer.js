import React, { Component } from 'react'
// import CampgroundForm from '../components/campgrounds/CampgroundForm';
import Campgrounds from '../campgrounds/Campgrounds';
// import Campground from './Campground';
import CampgroundForm from '../campgrounds/CampgroundForm';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../../actions/campgroundActions';


class CampgroundContainer extends Component {

    state = {
        showForm: false
    }

    componentDidMount() {
        this.props.fetchCampgrounds(this.props.id);
    }

    handleOnClick = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    onCreateSuccess = () => {
        this.setState({ showForm: false })
    }

    render() {
        const campground = {
            name: '',
            description: '',
            location_id: 0,
            cost: 0,
            link: ''
        }

        return (
            <div>
                {this.state.showForm && <CampgroundForm onCreateSuccess={this.onCreateSuccess} campground={campground} />}
                <button
                    class="button"
                    onClick={this.handleOnClick}>{this.state.showForm === true ? 'Hide Form' : 'Add New Campground'}</button>
                {/* <Link to="/new-campground">Add New Campground</Link> */}
                <br />
                <br />
                <br />
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
