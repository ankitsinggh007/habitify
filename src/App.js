import { useState } from "react";
import Home from "./component/pages/Home";
import {Routes,Route} from "react-router-dom";
import Navbar from "./component/Layout/Navbar";
import Habit from "./component/pages/Habit";
import { createContext } from "react";
export const State=createContext()

function App() {
const [showInputForm, setshowInputForm] = useState(null)
  return (
    <State.Provider value={{showInputForm , setshowInputForm}}>
<div>
<Navbar/>

</div>
    <Routes >
<Route path="/" element={<Home/>}></Route>
<Route path="/mypro" element={<Habit/>}></Route>
    </Routes>
    </State.Provider>

  );
}

export default App;
