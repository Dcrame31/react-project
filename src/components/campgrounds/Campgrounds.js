import React, { Component } from 'react'
// import CampgroundList from './CampgroundList';
import Campground from './Campground';
import CampgroundForm from './CampgroundForm';
import { Link } from 'react-router-dom';

export default class Campgrounds extends Component {

    state = {
        showForm: false
    }

    handleOnClick = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    onCreateSuccess = () => {
        this.setState({ showForm: false })
    }

    render() {
        const campgrounds = this.props.campgrounds
            .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
            .map((campground, id) => <Campground key={id} campground={campground} />)

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
                {campgrounds}
            </div>
        )
    }
}
