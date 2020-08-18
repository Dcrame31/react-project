import React from 'react';
import Review from './Review';

const Reviews = (props) => {

    const reviews = props.reviews.map((review, id) => <Review key={id} review={review} />)
    return (
        <div>
            <h3>Reviews</h3>
            {reviews}
        </div>
    )
}

export default Reviews;