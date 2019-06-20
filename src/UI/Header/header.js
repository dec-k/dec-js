import React from 'react';
import classes from './header.module.css'
import headerIco from '../../assets/images/headerico.PNG'

const header = (props) => {
    return (
        <img className={classes.Icon} src={headerIco} alt=""/>
    );
}

export default header;