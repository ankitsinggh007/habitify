import React,{useState} from 'react'
import classes from "./Weekdays.module.css"
const Weekdays = (props) => {
    const [showS, setshowS] = useState(false);
    const showStatus=()=>{
        setshowS(true);
    }
  return (
    <div>
    <div className={classes.day} onClick={showStatus}>{props.day}</div>
     <div className={classes.status}>
        <div className={classes.complete}>&#x2714;</div>
        <div className={classes.skip}>&#x2714;</div>
     </div>
    </div>

  )
}

export default Weekdays