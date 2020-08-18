import React, { Component } from 'react';
import Reviews from '../reviews/Reviews';
import ReviewForm from '../reviews/ReviewForm';
import { fetchReviews } from '../../actions/reviewsActions';
import { connect } from 'react-redux';

class ReviewContainer extends Component {

    state = {
        showReviews: false,
        showForm: false
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.id)
    }

    onReviewSuccess = () => {
        this.setState({ showForm: false })
    }

    handleReview = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        console.log(this.props.reviews)
        const toggleForm = this.state.showForm && <ReviewForm onReviewSuccess={this.onReviewSuccess} id={this.props.id} />
        const displayReviews = this.props.reviews.length > 0 ? <Reviews reviews={this.props.reviews} /> : <p>No one has reviewed this campground.</p>
        return (
            <div>
                <button
                    onClick={this.handleReview}>{this.state.showForm == true ? "Hide Review" : "Add Review"}</button>

                {toggleForm, displayReviews}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.manageReviews.reviews
    }
}

export default connect(mapStateToProps, { fetchReviews })(ReviewContainer);