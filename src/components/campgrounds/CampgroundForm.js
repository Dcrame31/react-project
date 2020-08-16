import React, { Component } from 'react'
// import Locations from '../locations/Locations'
import { addCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';

class CampgroundForm extends Component {

    state = {
        campground: {
            name: '',
            description: '',
            location_id: 0,
            cost: 0,
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
        e.preventDefault();

        const campground = { campground: this.state.campground }
        this.props.addCampground(campground)
        // this.setState({
        //     campground: {
        //         name: '',
        //         description: '',
        //         location_id: '',
        //         cost: '',
        //         link: ''
        //     }
        // })
    }

    handleChange = e => {
        this.setState({
            campground: { ...this.state.campground, [e.target.name]: e.target.value }
        })
    }

    render() {
        // console.log(this.state.campground)
        const locationOptions = this.state.locations
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((location, id) => <option key={id} value={location.id}>{location.name}</option>)

        return (
            <>
                <h1>Submit a Campground</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Name: <input name="name" type="text"
                        value={this.state.campground.name}
                        onChange={this.handleChange} /></p>

                    <p>Description: <textarea name="description"
                        value={this.state.campground.description}
                        onChange={this.handleChange} /></p>

                    <p>Location: <select name="location_id" id="type"
                        value={this.state.campground.location_id}
                        onChange={this.handleChange}>
                        <option value="" select>Select a location</option>
                        {locationOptions}
                    </select></p>

                    <p>Cost: <input type="number" name="cost"
                        value={this.state.campground.cost}
                        onChange={this.handleChange} /></p>

                    <p>Link: <input type="text" name="link"
                        value={this.state.campground.link}
                        onChange={this.handleChange} /></p>

                    <p><input type="submit" value="Submit" /></p>
                </form>
            </>
        )
    }
}

export default connect(null, { addCampground })(CampgroundForm);