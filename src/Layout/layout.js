import React from 'react';
import Aux from '../hoc/Auxiliary/auxiliary'
import classes from './layout.module.css';
import Navbar from '../UI/Navbar/navbar';

/*
Dictate the layout of constant or near-constant page elements like navbars, headers, etc.
*/
const layout = (props) => {
    return (
        <Aux>
            <Navbar />
            <div style={{"height": "2000px"}}>fudge</div>
        </Aux>
    );
}

export default layout;