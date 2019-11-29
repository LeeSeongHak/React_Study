import React from 'react';
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Menu = () => {
const activeStyle = {
    color: 'green',
    fontSize: '2rem'
};

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink exact to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink exact to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="about/foo">About Foo</Link></li> */}
            </ul>
            <hr />
        </div>
    );
};

export default Menu;