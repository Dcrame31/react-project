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

    componentDidUpdate(prevState) {
        // let searchTerm = parseInt(this.props.searchTerm)
        if (prevState.searchTerm !== this.props.searchTerm) {
            this.fetchCampgrounds('2')
        }
        // console.log(this.state.searchTerm)

        // this.fetchCampgrounds(this.state.searchTerm)
    }

    fetchCampgrounds = (id = '') => {
        if (id !== '') {
            fetch(`http://localhost:3001/locations/2}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        campgrounds: data.campgrounds,
                        searchTerm: id
                    })
                })
        }
        // } else {
        //     fetch(`http://localhost:3001/campgrounds`)
        //         .then(res => res.json())
        //         .then(data => {
        //             this.setState({
        //                 campgrounds: data,
        //             })
        //         })
        // }
    }

    handleOnClick = event => {
        fetch("")
    }

    render() {
        return (
            <div>
                {/* <CampgroundForm /> */}
                <Campgrounds campgrounds={this.state.campgrounds} />
                {/* {this.props.campgrounds} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campgrounds: state.manageCampgrounds.campgrounds
    }
}

export default connect(null, { fetchCampgrounds })(CampgroundContainer);
