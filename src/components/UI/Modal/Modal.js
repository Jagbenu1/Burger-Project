import React, { Component } from 'react';
import classes from './Modal.module.css';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';

class Modal extends Component{
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log('[Modal] willUpdate');  
    }

    render(){
        return(
        <Auxilliary>
            <Backdrop  show={this.props.show} clicked={this.props.modalClosed}/>
            <div 
                className={classes.Modal}
                style = {{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}> 
                {this.props.children}
            </div>
        </Auxilliary>
        );
    }
}; 
export default Modal;