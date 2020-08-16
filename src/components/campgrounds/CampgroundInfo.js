import React, { Component } from 'react'
import { deleteCampground, fetchCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';


class CampgroundInfo extends Component {


    componentDidMount() {
        const id = parseInt(this.props.match.params.id)
        this.props.fetchCampground(id)
    }

    handleEdit = e => {
    }

    handleDelete = e => {

        const onDeleteSuccess = () => {
            this.props.history.push("/campgrounds")
        }
        this.props.deleteCampground(e.target.value, onDeleteSuccess)

    }

    render() {
        const id = parseInt(this.props.match.params.id)
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.description}</p>
                <p>Cost: ${this.props.cost}/day</p>
                {/* <p><a href={campground.link} target="_blank">Click for more info</a></p> */}

                <button
                    value={id}
                    onClick={this.handleEdit}>Edit Campground</button>

                <button
                    value={id}
                    onClick={this.handleDelete}>Delete Campground</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const campground = state.manageCampgrounds.campgroundInfo || {}
    return {
        name: campground.name,
        description: campground.description,
        cost: campground.cost,
        link: campground.link
    }
}

export default connect(mapStateToProps, { deleteCampground, fetchCampground })(CampgroundInfo);