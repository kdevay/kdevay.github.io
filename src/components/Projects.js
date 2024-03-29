import React, {useState, useEffect} from "react";
import Sketch from "../images/sketch.png";
import Froot from "../images/froot.png";
import Weather from "../images/weather.png";
import Dash from "../images/dash.png";
import SignUp from "../images/signUp.png";

export default function Projects(props) {
    const {mode} = props;
    const [tileClass, setTileClass] = useState(mode === 'dark' ? 'darkTile' : 'tile');

    useEffect(() => {
        setTileClass(mode === 'dark' ? 'darkTile' : 'tile');
    }, [mode]); 

    return (
        <div id="workDiv">
            <div className='row'>
                    <div className={tileClass}>
                        <a target="_blank" href='https://kdevay.github.io/Etch-a-Sketch/'>
                            <img className='page' src={Sketch} alt='Screenshot of an etch-a-sketch emulator webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Swipe-a-Sketch</h2>
                        <h3 className='ProjBody'>This Etch-a-Sketch emulator allows users to draw images with the swipe of a mouse.</h3>
                        <h3 className='ProjBody'>Each element, aside from the root container, was created solely with JavaScript.</h3>
                        <h3 className='ProjBody'>The sketch-area is a grid of divs with adjustable dimensions, ranging from 10-by-10 to 100-by-100.</h3>
                        <h3 className='ProjBody'>When the mouse swipes or hovers over a div, its color scheme changes from light to dark blue, mimicking the action of an etched line.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className={tileClass}>
                        <a target="_blank" href='https://kdevay.github.io/odin-shopping-cart/'>
                            <img className='page' src={Froot} alt='Screenshot of a shopping webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Froot Store</h2>
                        <h3 className='ProjBody'>The Froot Store was built using React and React Router to emulate a responsive online retail environment with client-side routing.</h3>
                        <h3 className='ProjBody'>This app's development was test-driven, with the aid of Jest and the React testing library.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className={tileClass}>
                        <a target="_blank" href='https://kdevay.github.io/odin-weather/'>
                            <img className='page' src={Weather} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Weather</h2>
                        <h3 className='ProjBody'>This project allows users to view local weather conditions of a specific location, by querying OpenWeather's geocoding and weather APIs.</h3>
                        <h3 className='ProjBody'>A "loading" component displays from the time the form is submitted until the information comes back from the API.</h3>
                        <h3 className='ProjBody'>The page styling changes to reflect the weather and time of day.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className={tileClass}>
                        <a target="_blank" href='https://kdevay.github.io/sign-up/'>
                            <img className='page' src={SignUp} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Sign Up</h2>
                        <h3 className='ProjBody'>This is a generic sign-up page to practice form validation, external fonts, and layering semi-transparent elements.</h3>
                        <h3 className='ProjBody'>It was built using entirely vanilla JavaScript, HTML, and CSS.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className={tileClass}>
                        <a target="_blank" href='https://kdevay.github.io/dash-odin/'>
                            <img className='page' src={Dash} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Dashboard</h2>
                        <h3 className='ProjBody'>This project is purely design driven, with a particular focus on CSS grid and flexbox.</h3>
                        <h3 className='ProjBody'>The content is an homage to Twin Peaks, and in service of that, I used GIMP to create custom icons referencing symbols from the show.</h3>
                    </div>
            </div>
                
        </div>
    );
}