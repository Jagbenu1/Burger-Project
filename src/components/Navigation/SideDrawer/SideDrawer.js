import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
return(
    <Auxilliary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </Auxilliary>
);
};

export default sideDrawer;