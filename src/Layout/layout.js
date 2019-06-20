import React from 'react';
import Aux from '../hoc/Auxiliary/auxiliary'
import Navbar from '../UI/Navbar/navbar';
import classes from './layout.module.css';

/*
Dictate the layout of constant or near-constant page elements like navbars, headers, etc.
*/
const layout = (props) => {
    return (
        <Aux>
            <Navbar />
            <div className={classes.Container}>replace me with content when you have some.</div>
        </Aux>
    );
}

export default layout;