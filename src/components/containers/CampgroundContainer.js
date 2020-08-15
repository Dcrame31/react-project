import React, { Component } from 'react'
// import CampgroundForm from '../components/campgrounds/CampgroundForm';
import Campgrounds from '../campgrounds/Campgrounds';
import { connect } from 'react-redux';
import { fetchCampgrounds } from '../../actions/campgroundActions';


class CampgroundContainer extends Component {

    state = {
        campgrounds: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.fetchCampgrounds();
    }

    fetchCampgrounds = () => {
        let searchTerm = parseInt(this.props.searchTerm)
        if (this.props.searchTerm) {
            fetch(`http://localhost:3001/locations/${searchTerm}}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        campgrounds: data.campgrounds,
                        searchTerm: searchTerm
                    })
                })
        } else {
            fetch(`http://localhost:3001/campgrounds`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        campgrounds: data,
                        searchTerm: ''
                    })
                })
        }
    }

    handleOnClick = event => {
        fetch("")
    }

    render() {
        return (
            <div>
                <Campgrounds campgrounds={this.state.campgrounds} />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         campgrounds: state.manageCampgrounds.campgrounds
//     }
// }

export default connect(null, { fetchCampgrounds })(CampgroundContainer);
