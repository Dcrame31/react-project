import React, { Component } from 'react'
import { deleteCampground, fetchCampground, editCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';
import CampgroundForm from './CampgroundForm';


class CampgroundInfo extends Component {

    state = {
        showForm: false,
        editForm: false
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id)
        this.props.fetchCampground(id)
    }

    handleEdit = () => {
        this.setState({ showForm: !this.state.showForm, editForm: true })
    }

    handleDelete = e => {
        const onDeleteSuccess = () => {
            this.props.history.push("/campgrounds")
        }
        this.props.deleteCampground(e.target.value, onDeleteSuccess)

    }

    render() {
        const id = parseInt(this.props.match.params.id)
        // const display = this.state.editForm === true ?  this.state.showForm && <CampgroundForm /> : <h2>{this.props.name}</h2>
        // <p>{this.props.description}</p>
        // <p>Cost: ${this.props.cost}/day</p>

        return (
            <div>
                {
                    this.state.editForm === true ? this.state.showForm && <CampgroundForm campground={this.props} /> :
                        <><h2>{this.props.name}</h2>
                            <p>{this.props.description}</p>
                            <p>Cost: ${this.props.cost}/day</p>
                            <p><a href={this.props.link} target="_blank">Click for more info</a></p>
                        </>
                }
                <button
                    value={id}
                    class="button"
                    onClick={this.handleEdit}>Edit Campground</button>

                <button
                    value={id}
                    class="button"
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

export default connect(mapStateToProps, { deleteCampground, fetchCampground, editCampground })(CampgroundInfo);