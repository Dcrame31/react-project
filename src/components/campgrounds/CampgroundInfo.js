import React, { Component } from 'react'
import { deleteCampground, fetchCampground } from '../../actions/campgroundActions';
import { connect } from 'react-redux';
import CampgroundForm from './CampgroundForm';
// import ReviewForm from '../reviews/ReviewForm';
import ReviewContainer from '../containers/ReviewContainer';


class CampgroundInfo extends Component {

    state = {
        showForm: false,
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id)
        this.props.fetchCampground(id)
    }

    handleEdit = () => {
        this.setState({ showForm: true })
    }

    handleDelete = e => {
        const onDeleteSuccess = () => {
            this.props.history.push("/campgrounds")
        }
        this.props.deleteCampground(e.target.value, onDeleteSuccess)
    }

    onEditSuccess = () => {
        this.props.history.push("/campgrounds")
    }

    render() {
        console.log(this.props.history)
        const id = parseInt(this.props.match.params.id)
        // const display = this.state.editForm === true ?  this.state.showForm && <CampgroundForm /> : <h2>{this.props.name}</h2>
        // <p>{this.props.description}</p>
        // <p>Cost: ${this.props.cost}/day</p>
        const toggleEditForm = this.state.showForm && <CampgroundForm campground={this.props} onEditPage={this.state.showForm} onEditSuccess={this.onEditSuccess} id={id} />
        return (
            <div>
                {

                    this.state.showForm === true ? toggleEditForm :
                        <>
                            <h2>{this.props.name}</h2>
                            <p>{this.props.description}</p>
                            <p>Cost: ${this.props.cost}/day</p>
                            <p><a href={this.props.link} target="_blank">Click for more info</a></p>
                            <button
                                value={id}
                                class="button"
                                onClick={this.handleEdit}>Edit Campground</button>

                            <button
                                value={id}
                                class="button"
                                onClick={this.handleDelete}>Delete Campground</button>

                            <br />
                            <br />

                            <ReviewContainer id={id} />
                        </>
                }

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