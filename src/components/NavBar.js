import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    border: 'solid 5px',
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    textDecoration: 'none',
    color: 'white',
}
class NavBar extends React.Component {
    render() {
        return (
            <div className="button">
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'pink'
                    }}
                >Home</NavLink>

                <NavLink
                    to="/locations"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'pink'
                    }}
                >Locations</NavLink>

                <NavLink
                    to="/campgrounds"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'pink'
                    }}
                >Campgrounds</NavLink>
            </div>
        )
    }
}

export default NavBar;