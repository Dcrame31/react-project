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
        showList: false,
        searchTerm: ''
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

    // handleSearch = e => {
    //     e.preventDefault();


    //     this.setState({
    //         result: result
    //     })
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const campground = {
            name: '',
            description: '',
            location_id: 0,
            cost: 0,
            link: ''
        }

        const searchResults = this.props.campgrounds.filter(campground => campground.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        const toggleForm = this.state.showForm && <CampgroundForm onCreateSuccess={this.onCreateSuccess} campground={campground} />
        const toggleList = this.state.showList && <Campgrounds campgrounds={searchResults} />
        return (
            <div>
                <form>
                    <input type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange} />
                </form>
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
