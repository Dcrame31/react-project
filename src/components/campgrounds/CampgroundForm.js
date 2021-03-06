import React, { Component } from 'react'
// import Locations from '../locations/Locations'
import { addCampground, editCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';

class CampgroundForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            campground: {
                name: props.campground.name,
                description: props.campground.description,
                location_id: props.campground.location_id,
                cost: props.campground.cost,
                link: props.campground.link
            },
            locations: []
        }
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
        e.preventDefault()
        console.log('a')
        const campground = { campground: this.state.campground }
        if (this.props.onEditPage == true) {
            this.props.editCampground(this.props.id, campground, this.props.onEditSuccess)
        } else {
            this.props.addCampground(campground)
                .then(this.props.onCreateSuccess)
        }
        console.log('g')
        this.setState({
            campground: {
                name: '',
                description: '',
                location_id: '',
                cost: '',
                link: ''
            }
        })
    }

    handleChange = e => {
        this.setState({
            campground: { ...this.state.campground, [e.target.name]: e.target.value }
        })
    }



    render() {
        const locationOptions = this.state.locations
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((location, id) => <option key={id} value={location.id}>{location.name}</option>)


        return (
            <>

                {this.props.onEditPage === true ? <h1>Edit Campground</h1> : <h1> Submit a Campground</h1>}



                <form onSubmit={this.handleSubmit}
                    class="form">
                    <p>Name: <input name="name" type="text"
                        // defaultValue={campground.name || ''}
                        value={this.state.campground.name}
                        onChange={this.handleChange} /></p>

                    <p>Description: <input type="textarea" name="description"
                        // defaultValue={campground.description || ''}
                        value={this.state.campground.description}
                        onChange={this.handleChange} /></p>

                    <p>Location: <select name="location_id" id="type"
                        // defaultValue
                        value={this.state.campground.location_id}
                        onChange={this.handleChange}>
                        <option value="" select="true">Select a location</option>
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

export default connect(null, { addCampground, editCampground })(CampgroundForm);