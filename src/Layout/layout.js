import React from 'react';
import Header from '../UI/Header/header'
import Aux from '../hoc/Auxiliary/auxiliary'
import classes from './layout.module.css';

/*
Dictate the layout of constant or near-constant, static page elements like navbars, headers, etc.
*/
const layout = (props) => {
    return (
        <Aux>
            <div className={classes.Container}>
                <Header />
            </div>
        </Aux>
    );
}

export default layout;