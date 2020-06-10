import React from 'react';
import classes from './Menu.module.css';

const menu = (props) =>(
    <div onClick={props.appear} className={classes.Menu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;