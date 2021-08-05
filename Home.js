// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import React from "react";
import css from './connect4.css';

function Home () {
   
      return (
        <div id="two">
            <p>Here are the rules of Connect 4 game</p>
            <ul id="lappy">
                <li>Connect Four  is a two-player connection board(6x7) game.</li>
                <li>The players choose a color each and then take turns.</li>
                <li> The pieces fall straight down, occupying the lowest available space within the column.</li>
                <li> The player who forms a horizontal, vertical, or diagonal line of four is the <b>WINNER</b></li> 
                <br/>
                Alright! You are good to start.. All the Best :)
            </ul>
        </div>
      );
    }
 
   
export default Home;