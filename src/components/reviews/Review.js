import React, { Component } from 'react'

const Review = (props) => {

    return (
        <div>
            <p>{props.review.name} said:</p>
            <p>{props.review.comment}</p>
        </div>
    )

}

export default Review;