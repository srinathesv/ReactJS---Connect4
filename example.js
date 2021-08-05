// import react from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import css from './example.css'

const Welcome = () =>{
    return (
        <div id="one">
            <p>Welcome<br/>
            Are you excited to play the game?!<br/>
            Have fun!!<br/>
            All the best!!</p>
    
        </div>
    )
};

const Home = () => {
    return (
        <div id="two">
            <p>Here are the rules of Connect 4 game</p>
            <ul id="lappy">
                <li>Connect Four  is a two-player connection board game,in which the players choose a color and then take turns<br/> dropping colored discs into a seven-column, six-row vertically suspended grid.</li>
                <li> The pieces fall straight down, occupying the lowest available space within the column.</li>
                <li> The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.</li> 
                <li>Connect Four is a solved game. </li>
            </ul>
        </div>
    )
};
const Player = () =>{
    return(
        <div id="three">
            <p>Contact Details</p>
            <p>Phn.no: 123456789</p>
            <p>e-mail:abc@gmail.com</p>
        </div>
    )
};
function SimpleExample(){
    return (
        <Router>
            <div>
                <h1>Connect 4 game</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Welcome</Link>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>

                    </ul>
                    <ul>
                        <li>
                            <Link to="/player">Player</Link>

                        </li>

                    </ul>
                </nav>
                <Route path="/" exact component={Welcome}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/player" exact  component={Player}/>


            </div>
        </Router>
    )
}
export default SimpleExample
