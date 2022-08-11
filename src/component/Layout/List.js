import React,{useState} from 'react';
import classes from "./List.module.css";
import {BsThreeDotsVertical} from "react-icons/bs";
import {MdDeleteForever} from "react-icons/md"
import{useDispatch,useSelector} from "react-redux"
import { allHabitAction } from '../Store/Store';
const List = (props) => {
const Dispacth=useDispatch();
let bg=(props.habits.status);
if(bg==="skip"){
  bg="#F23A3E";
}
if(bg==="done"){
  bg="#90EE90";
}
if(bg==="none"){
  bg="#F2F2F2"
}
const Status=(e)=>{
const id=props.habits.id;
const status=e.target.value;
Dispacth(allHabitAction.AddStatus({status,id}))
}

  return (
    
    <div className={classes.list} style={{backgroundColor:`${bg}`} }>
        <div className={classes.name}>{props.habits["habit"]}</div>
        <div className={classes.frequency}><h3>Frequency</h3>{props.habits["frequency"]}</div>
        <div className={classes.frequency}><h3>start Date</h3>{props.habits["startDate"]}</div>
        <div className={classes.frequency}><h3>Timing</h3>{props.habits["timeOfTheDay"]}</div>
        <div  className={classes.icon}><BsThreeDotsVertical/>
        <select className={classes.dropDown} onChange={(e)=>Status(e)} value={props.habits.status}>
        <option  style={{backgroundColor:"#F2F2F2"}} value="none">&#x2A2F; &nbsp; none</option>
    <option style={{backgroundColor:"#90EE90"}} value="done">&#10003; Done</option>
    <option  style={{backgroundColor:"#F23A3E"}} value="skip">&#65293; Skip</option>
  </select>
        </div>
        <div>
        
        </div>
    </div>
  )
}

export default List