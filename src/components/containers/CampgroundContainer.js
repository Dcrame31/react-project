import React, { Component } from 'react'
// import CampgroundForm from '../components/campgrounds/CampgroundForm';
import Campgrounds from '../campgrounds/Campgrounds';
// import Campground from './Campground';
import CampgroundForm from '../campgrounds/CampgroundForm';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../../actions/campgroundActions';


class CampgroundContainer extends Component {

    state = {
        showForm: false,
        showList: false
    }

    componentDidMount() {
        this.props.fetchCampgrounds(this.props.id);
        this.setState({
            showList: true
        })
    }

    handleOnClick = () => {
        this.setState({ showForm: !this.state.showForm, showList: !this.state.showList })
    }

    onCreateSuccess = () => {
        this.setState({ showForm: false, showList: !this.state.showList })
    }

    render() {
        const campground = {
            name: '',
            description: '',
            location_id: 0,
            cost: 0,
            link: ''
        }

        const toggleForm = this.state.showForm && <CampgroundForm onCreateSuccess={this.onCreateSuccess} campground={campground} />
        const toggleList = this.state.showList && <Campgrounds campgrounds={this.props.campgrounds} />
        return (
            <div>
                {toggleForm}
                <button
                    class="button"
                    onClick={this.handleOnClick}>{this.state.showForm === true ? 'Hide Form' : 'Add New Campground'}</button>
                <br />
                <br />
                <br />
                {toggleList}
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
