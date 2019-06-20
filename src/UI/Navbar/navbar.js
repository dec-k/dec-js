import React from 'react';
import Header from '../../UI/Header/header'
import Aux from '../../hoc/Auxiliary/auxiliary'
import classes from './navbar.module.css';

const navbar = (props) => {
    return (
        <Aux>

            <div className={classes.NavBar}>
                <Header />
                <a href='/'>Home</a>
                <a href='https://github.com/dec-k' target='_blank'>Github</a>
                <a href='/'>Lootsim</a>
            </div>
        </Aux>
    );
}

export default navbar;