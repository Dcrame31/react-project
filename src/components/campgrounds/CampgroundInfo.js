import React, { Component } from 'react'
import { deleteCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';

class CampgroundInfo extends Component {

    state = {
        campground: '',
        params: ''
    }

    componentDidMount() {
        this.fetchCampground()
    }

    fetchCampground = () => {
        let searchTerm = parseInt(this.props.match.params.id)
        fetch(`http://localhost:3001/campgrounds/${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    campground: data,
                    params: searchTerm
                })
            })
    }

    handleEdit = e => {
    }

    handleDelete = e => {
        this.props.deleteCampground(e.target.value)

    }

    render() {
        const { campground } = this.state
        return (
            <div>
                <h2>{campground.name}</h2>
                <p>{campground.description}</p>
                <p>Cost: ${campground.cost}/day</p>
                {/* <p><a href={campground.link} target="_blank">Click for more info</a></p> */}

                <button
                    value={campground.id}
                    onClick={this.handleEdit}>Edit Campground</button>

                <button
                    value={campground.id}
                    onClick={this.handleDelete}>Delete Campground</button>
            </div>
        )
    }
}

export default connect(null, { deleteCampground })(CampgroundInfo);