import React, { Component } from 'react'
import CampgroundForm from '../components/campgrounds/CampgroundForm';

export default class CampgroundContainer extends Component {

    state = {
        campground: '',
        location: ''
    }

    // componentDidMount() {
    //     const url = `http://localhost:3000/${this.props.location}`
    // }

    render() {
        return (
            <div>
                <CampgroundForm />
            </div>
        )
    }
}
