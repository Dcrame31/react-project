import React, { Component } from 'react'

export default class ReviewForm extends Component {

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
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                    class="form">
                    <p>Name: <input name="name" type="text"
                        // defaultValue={campground.name || ''}
                        value={this.state.review.name}
                        onChange={this.handleChange} /></p>

                    <p>Comment: <input type="textarea" name="description"
                        // defaultValue={campground.description || ''}
                        value={this.state.review.description}
                        onChange={this.handleChange} /></p>

                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        )
    }
}
