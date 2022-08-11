import React,{useState} from "react";
import { State } from "../../App";
import Modal from "../modal/Modal";
import classes from "./Inputform.module.css";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allHabitAction } from "../Store/Store";

function InputForm(props) {
  const state = useContext(State);
const [showDay, setshowDay] = useState(null);
const [frequency, setfrequency] = useState(null);
const [formate, setformate] = useState("");
const [Specific, setSpecific] = useState("there")
// form input
////////////////////////////////////////////////////////////////////////////////////
const {habits}=useSelector(state=>state);
console.log(habits);
const dispatch=useDispatch();

const [Input,setInput]=useState({
  habit:"",
  Description:"",
  status:"",
  startDate:"",
  timeOfTheDay:"",
  frequency:"",
  specificDay:"",
  Counter:"",
})
// fillform
const fillForm=(e)=>{
  if(e.target.id==="habit"){
    setInput(prev=>{
      return {...prev,habit:e.target.value}
    })
  }
  if(e.target.id==="Description"){
    setInput(prev=>{
      return {...prev,Description:e.target.value}
    })
  }
  if(e.target.id==="startDate"){
    let date=e.target.value;
    console.log(date)
    date=new Date(date).toLocaleDateString();
    setInput(prev=>{
      return {...prev,startDate:e.target.value}
    })
  }
  if(e.target.id==="frequency"){
    if(e.target.value==="Specific day"){
      console.log("under specific");
      setshowDay(true);
      setInput(prev=>{
        prev.frequency="Specific day";
        return{...prev}
      })
      }  
      else setshowDay(false);   
  
  
  if(e.target.value.includes("#")){
    if(e.target.value==="# per week"){
      console.log("under week")
      setInput(prev=>{
      prev.frequency="# per week";
      return{...prev}
      })
      setformate('Week');

      }
    else{
      setInput(prev=>{
        prev.frequency="# per month";
        return{...prev}
        })
      setformate('Month');

    }
    setfrequency(true)
  }
  if(e.target.value==="daily"){
    console.log("under daily")
    setfrequency(false);
    setInput(prev=>{
      prev.frequency="daily";
      return{...prev}
      })
  }
}
if(e.target.id==="time"){
  setInput(prev=>{
    prev.timeOfTheDay=e.target.value;
    return{...prev}
  })
}
}
console.log(Input.startDate)
console.log(Input)
const formValidation=()=>{
  dispatch(allHabitAction.AddHabit({Input}))
}
  return (
    <Modal >
      <form className={classes.form}>
      <div className={classes.habitTitle}>  <label htmlFor='habit'>Habit Title</label>
        <input type="text" id="habit" value={Input.habit_title} onChange={(e)=>{fillForm(e)}} placeholder='Habit Title'/></div>
        <div className={classes.habitDescription}>  <label htmlFor='Description'>Description</label>
        <textarea type="text" id="Description"  value={Input.Description} onChange={(e)=>{fillForm(e)}} placeholder='(optional)'/></div>
        <div className={classes.startDate}>
  <label id="startDate">start</label>
  <input type="date" id="startDate" value={Input.startDate} onChange={(e)=>fillForm(e)}/>
</div>
        <div className={classes.habitDescription}>  <label htmlFor='frequency' style={{display:"block"}}>frequency</label>
        <select  onChange={(e)=>fillForm(e)} id="frequency" value={Input.frequency} style={{display:"inline"}} >
  <option value="daily">daily</option>
  <option value="Specific day">Specific day</option>
  <option value="# per week" ># per week</option>
  <option value="# per month"># per month</option>
</select>
{showDay &&<div onClick={(e)=>{
  if(e.target.getAttribute("value")==="week"){
    setInput(prev=>{
     
      if(prev.specificDay.includes(e.target.innerHTML)){
        prev.specificDay=prev.specificDay.replace(e.target.innerHTML,"");
        console.log("repeat")
      }
      else{
      prev.specificDay=prev.specificDay+" "+e.target.innerHTML;
    }
    return(prev)
      
      })
  }
  
}} className={classes.days}>
<span value={"week"} >Su</span>
<span value={"week"} >Mo</span>
<span value={"week"} >Tu</span>
<span value={"week"} >We</span>
<span value={"week"} >Th</span>
  <span value={"week"}>Fr</span>
  <span value={"week"} >Sa</span>
</div>} 
{ frequency && <div style={{display:"inline"}} className={classes.frequency} >
        <input style={{display:"inline" ,width:"10%"}} max={(formate==="Week"?7:30)} onInput={(e)=>{
          setInput(prev=>{
            console.log(prev)
            prev.Counter=e.target.value;
            return{...prev}
          })
        }} type="number"></input>/{formate}
  </div>}
</div>
<div className={classes.time}>
  <label htmlFor="time">Time of The Day</label>
  <select name='time'  id="time" onChange={(e)=>fillForm(e)} value={Input.timeOfTheDay}>
    <option vlaue='morning'>morning</option>
    <option vlaue='afternoon'>afternoon</option>
    <option vlaue='evening'>evening</option>
    <option vlaue='night'>night</option>
  </select>
</div>

<div>
<button onClick={(e)=>{
  e.preventDefault();
  formValidation();
  state.setshowInputForm(false)}} className={classes.submit}>Submit</button>

</div>
      </form>
      <div className={classes.icon}></div>

    </Modal>
  )
}

export default InputForm