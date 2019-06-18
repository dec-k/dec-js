import React from 'react';
import classes from './navbar.module.css';

const navbar = (props) => {
    return(
        <div className={classes.NavBar}>
            <a href='/'>home</a>
            <a href='/'>github</a>
            <a href='/'>lootsim</a>
        </div>
    );
}

export default navbar;