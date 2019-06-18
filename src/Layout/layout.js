import React from 'react';
import Header from '../UI/Header/header'
import Aux from '../hoc/Auxiliary/auxiliary'
import classes from './layout.module.css';
import Sidebar from '../UI/Sidebar/sidebar';

/*
Dictate the layout of constant or near-constant, static page elements like navbars, headers, etc.
*/
const layout = (props) => {
    return (
        <Aux>
            <div className={classes.Container}>
                <Header />
                <Sidebar />
            </div>
        </Aux>
    );
}

export default layout;