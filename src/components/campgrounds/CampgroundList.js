import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CampgroundContainer from '../containers/CampgroundContainer';

export default class CampgroundList extends Component {
    render() {
        return (
            <div>
                <h1>campground list</h1>
                <CampgroundContainer searchTerm={this.props.match.params.id} history={this.props} />
            </div>
        )
    }
}
