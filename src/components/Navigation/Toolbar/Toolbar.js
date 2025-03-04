import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from './Menu/Menu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu appear={props.disappear} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
);

export default toolbar;