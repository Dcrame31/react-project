import React, { Component } from 'react'
// import CampgroundList from './CampgroundList';
import Campground from './Campground';
import CampgroundForm from './CampgroundForm';
import { Link } from 'react-router-dom';

export default class Campgrounds extends Component {

    state = {
        addForm: false
    }

    handleOnClick = () => {
        this.setState({ addForm: !this.state.addForm })
    }

    render() {
        const campgrounds = this.props.campgrounds
            .sort((a, b) => a["name"] > b["name"] ? 1 : -1)
            .map((campground, id) => <Campground key={id} campground={campground} />)

        return (
            <div>
                {this.state.addForm && <CampgroundForm />}
                <button
                    onClick={() => this.handleOnClick()}>{this.state.addForm === true ? 'Hide Form' : 'Add New Campground'}</button>
                {/* <Link to="/new-campground">Add New Campground</Link> */}
                <br />
                <br />
                <br />
                {campgrounds}
            </div>
        )
    }
}
