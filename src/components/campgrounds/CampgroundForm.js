import React, { Component } from 'react'
import Locations from '../locations/Locations'
// import { fetchLocations } from '../../actions/campgroundActions';
import { connect } from 'react-redux';

class CampgroundForm extends Component {

    state = {
        campground: {
            name: '',
            description: '',
            location_id: '',
            cost: '',
            link: ''
        },
        locations: []
    }

    componentDidMount() {
        this.fetchLocations()
    }

    fetchLocations() {
        fetch("http://localhost:3001/locations")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    locations: data
                })
            })
    }

    handleSubmit = e => {

    }

    handleChange = () => {

    }

    render() {
        const locationOptions = this.state.locations
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((location) => <option value={location.id}>{location.name}</option>)

        return (
            <>
                <h1>Submit a Campground</h1>
                <form
                    onSubmit={() => this.handleOnSubmit}>
                    <p>Name: <input name="name" type="text" /></p>
                    <p>Description: <textarea name="description" /></p>
                    <p>Location: <select name="location_id" id="type">
                        {locationOptions}
                    </select></p>
                    <p>Cost: <input type="number" name="cost" /></p>
                    <p>Link: <input type="text" name="link" /></p>
                    <p><input type="button" value="Submit" /></p>
                </form>
            </>
        )
    }
}

export default connect()(CampgroundForm);