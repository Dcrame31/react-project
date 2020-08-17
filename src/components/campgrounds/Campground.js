import { Link } from 'react-router-dom';


const Campground = (props) => {
    return (
        <div>
            <Link to={`/campgrounds/${props.campground.id}`}>{props.campground.name}</Link>
        </div>
    )
}

export default Campground;