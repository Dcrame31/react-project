import React, { Component } from 'react'

export default class CampgroundContainer extends Component {

    state = {
        campground: '',
        location: ''
    }

    componentDidMount() {
        const url = `http://localhost:3000/${this.props.location}`
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
