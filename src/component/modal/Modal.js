import React from 'react'
import ReactDOM  from 'react-dom';
import { State } from '../../App';
import classes from "./Modal.module.css";
import { useContext } from 'react';
const Backdrop=(props)=>{
  const state = useContext(State);

  const Hide=()=>{
    state.setshowInputForm(false);
  }
  return(
            <div className={classes.backDrops} onClick={Hide}>{props.children}</div>
        )
}

const Modal1=(props)=>{
    return(
    <div className={classes.Modal1} >{props.prop.children}</div>
    );
}
const id=document.getElementById("overlay");


function Modal(props) {
  return (
    <>
    { 
       ReactDOM.createPortal(<Backdrop/>,id)

}
  {
       ReactDOM.createPortal(<Modal1 prop={props}/>,id)

  }
    </>

  )

}







export default Modal