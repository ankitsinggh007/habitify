import { createSlice,configureStore } from "@reduxjs/toolkit";
import { MdNewLabel } from "react-icons/md";
const initialState={
    habits:[{
        id:1,
        habit:"running",
        status:"done",
        startDate:new  Date('2021-10-24').toLocaleDateString(),
        timeOfTheDay:"Morning",
        frequency:"Daily",
        specificDay:"",
        Counter:"",
        Description:"",
    },{
        id:2,
        habit:"cycling",
        status:"skip",
        startDate:new  Date('2020-10-24').toLocaleDateString(),
        timeOfTheDay:"Evening",
        frequency:"Daily",
        specificDay:"",
        Counter:"",
        Description:"",
    },{
        id:3,
        habit:"Study",
        status:"skip",
        startDate:new  Date('1900-10-24').toLocaleDateString(),
        timeOfTheDay:"Night",
        frequency:"Daily",
        specificDay:"",
        Counter:"",
        Description:"",
    },{
        id:4,
        habit:"game",
        status:"none",
        startDate:new  Date('1999-10-24').toLocaleDateString(),
        timeOfTheDay:"Morning",
        frequency:"Daily",
        specificDay:"",
        Counter:"",
        Description:"",

    }],
}

const allHabit=createSlice({
    name:"habit",
    initialState,
    reducers:{
        AddHabit(state,action){
            const startDate= new Date(`${action.payload.Input.startDate}`).toLocaleDateString();
            let id=state.habits.length;
            const a={
                id:++id,
                habit:action.payload.Input.habit,
                Description:action.payload.Input.Description,
                status:"",
                startDate, 
                frequency:action.payload.Input.frequency,
                specificDay:action.payload.Input.specificDay,
                Counter:action.payload.Input.Counter,
                timeOfTheDay:action.payload.Input.timeOfTheDay
            }
                state.habits.push({

                ...a})
            },
        AddStatus(state,action){
            let position=state.habits.findIndex(habit=>habit.id===action.payload.id);
            console.log(state.habits[position].status);
            state.habits[position].status=action.payload.status;
            console.log(state.habits[position].status);
        }

    }
});
export const allHabitAction=allHabit.actions;
const Store=configureStore({
reducer:allHabit.reducer
});
export default Store;