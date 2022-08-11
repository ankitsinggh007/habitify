import {Link} from "react-router-dom"
import React from 'react'
import classes from './Body.module.css';
import bg from "../images/background.jpg";
function Body() {
  return (
    <div className={classes.backGround}>
        <img className={classes.bg} src={bg} alt="bg"/>

        <div className={classes.absolute}>
            <div className={classes.slogan}>
                Build Golden Habits,
                Unlock Your Potential
            </div>
            <div className={classes.description}>
                Focus on what truly matters
                with Habitify.Build the best version of yourslef by  mastering your habits.
            </div>
            <div className={classes.Button}>
                <button>
<Link className={classes.Link} to="/mypro">
Get Started
</Link>
                    </button>
            </div>
        </div>
    </div>
    
  )
}

export default Body