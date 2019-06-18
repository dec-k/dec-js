import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary'
import classes from './header.module.css'

const header = (props) => {
    return (
        <Aux>
            <h1 className={classes.PrimaryHeader}>50/50 Layout Test</h1>
            <h2 className={classes.SecondaryHeader}>Split via pure css</h2>
        </Aux>
    );
}

export default header;