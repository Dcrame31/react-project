import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../actions/reviewsActions';

class ReviewForm extends Component {

    state = {
        review: {
            name: '',
            comment: ''
        }
    }

    handleSubmit = e => {

    }

    handleChange = e => {
        this.setState({
            review: { ...this.state.review, [e.target.name]: e.target.value }
        })
    }

    render() {
        console.log(this.state.review)
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                    class="form">
                    <p>Name: <input name="name" type="text"
                        value={this.state.review.name}
                        onChange={this.handleChange} /></p>

                    <p>Comment: <input type="textarea" name="comment"
                        value={this.state.review.comment}
                        onChange={this.handleChange} /></p>

                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        )
    }
}

export default connect(null, { addReview })(ReviewForm)