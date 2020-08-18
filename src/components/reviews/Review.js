import React, { Component } from 'react';
import moment from 'moment';

const Review = (props) => {

    return (
        <div class="form">
            <p><strong>{props.review.name} said:</strong></p>
            <p><em>{props.review.comment}</em></p>
            <p>
                Submitted on {moment(props.review.created_at).format('MMMM Do YYYY, h:mm a')}
            </p>
        </div>
    )

}

export default Review;