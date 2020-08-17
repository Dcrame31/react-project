import React, { Component } from 'react';
import Reviews from '../reviews/Reviews';
import ReviewForm from '../reviews/ReviewForm';

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

export default ReviewContainer;