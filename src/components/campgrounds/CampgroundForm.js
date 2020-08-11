import React, { Component } from 'react'

export default class CampgroundForm extends Component {

    state = {
        campground: ''
    }

    render() {
        return (
            <>
                <h1>Submit a Campground</h1>
                <form>
                    <p>Name: <input type="text" /></p>
                    <p>Description: <textarea /></p>
                    <p>Location: <input type="text" /></p>
                    <p><input type="button" value="Submit" /></p>
                </form>
            </>
        )
    }
}
