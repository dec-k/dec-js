import React from 'react';
import classes from './sidebar.module.css';

const sidebar = (props) => {
    return(
        <nav className={classes.Sidebar}>
            <a href="/">Home</a>
            <a href="/">LootSim</a>
            <a href="/">Github</a>
        </nav>
    );
}

export default sidebar;
