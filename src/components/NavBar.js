import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <NavLink
                    to="/"
                    exact
                    activeStyle={{
                        background: 'pink'
                    }}
                >Home</NavLink>

                <NavLink
                    to="/locations"
                    exact
                    activeStyle={{
                        background: 'pink'
                    }}
                >Locations</NavLink>

                <NavLink
                    to="/campgrounds"
                    exact
                    activeStyle={{
                        background: 'pink'
                    }}
                >Campgrounds</NavLink>
            </div>
        )
    }
}

export default NavBar;