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

    render() {
        return (
            <div>
                <Reviews />
            </div>
        )
    }
}

export default connect(null, { fetchReviews })(ReviewContainer);