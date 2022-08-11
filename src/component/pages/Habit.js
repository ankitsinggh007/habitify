import React,{useState,useEffect} from 'react'
import Habitnav from '../Layout/Habitnav';
import List from '../Layout/List';
import { allHabitAction } from '../Store/Store';
import { useSelector } from 'react-redux';



function Habit() {
    const {habits}=useSelector(state=>state);
    console.log(habits)

    return(
    <>
    <div className='layout'></div>

    <Habitnav/>
{
    habits.map((habit,index)=>{
        return(
            <List key={index} habits={habit}/>
        )
    })
}
    </>
)

}

export default Habit