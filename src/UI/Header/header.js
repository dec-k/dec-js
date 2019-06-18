import React from 'react';
import Aux from '../../hoc/Auxiliary/auxiliary'
import classes from './header.module.css'

const header = (props) => {
    return (
        <Aux>
            <h1 className={classes.PrimaryHeader}>declan k</h1>
            <h2 className={classes.SecondaryHeader}>aspiring web dev</h2>
        </Aux>
    );
}

export default header;