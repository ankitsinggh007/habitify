import React,{useState} from 'react'
import classes from "./Habitnav.module.css";
import {BiSortUp} from "react-icons/bi"
import {MdOutlineArrowDropDownCircle} from "react-icons/md"
import InputForm from './InputForm';
import { useContext } from 'react';
import { State } from '../../App';
function Habitnav() {
  const state=useContext(State);
  return (
   <div className={classes.table}>
     <div className={classes.navbar}>
        <div className={classes.dayTime}>All Habits</div>
        {/* <div className={classes.order}>
            <BiSortUp style={{marginTop:"-.1rem",fontSize:"1.4rem"}}/>
            My Habits Order
            <MdOutlineArrowDropDownCircle style={{fontSize:"1.4rem",marginTop:"-.1rem"}}/>
            </div> */}
        <div className={classes.Button} onClick={()=>{state.setshowInputForm(true)}} >+ Add Habits</div>
    </div>
{state.showInputForm &&
<InputForm/>

}
   </div>
  )
}

export default Habitnav;