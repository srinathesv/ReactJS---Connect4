// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import React from "react";
import css from './connect4.css';

function Welcome() {
    
        return(
            <div id="ht">
                <h2>Hi there!</h2>
                <p>Welcome to Connect4 game<br/><br/>
                Navigate to <b><u>Home</u></b> page to know about the rules before starting the game.<br/><br/>
                Already knew about rules? then why late, hop-in by navigating to <b><u>Game</u></b><br/>
                </p>
            </div>

        );
    }

export default Welcome;