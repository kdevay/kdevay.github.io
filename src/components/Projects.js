import React from "react";
import Sketch from "../projects/sketch.png";
import Froot from "../projects/froot.png";
import Weather from "../projects/weather.png";
import Dash from "../projects/dash.png";
import SignUp from "../projects/signUp.png";

export default function Projects() {
    return (
        <div id="workDiv">
            <div className='row'>
                    <div className='tile'>
                        <a target="_blank" href='https://kdevay.github.io/Etch-a-Sketch/'>
                            <img className='page' src={Sketch} alt='Screenshot of an etch-a-sketch emulator webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Etch-a-Sketch</h2>
                        <h3 className='ProjBody'>This Etch-a-Sketch emulator allows users to draw images with the swipe of a mouse.</h3>
                        <h3 className='ProjBody'>Each element, aside from the root container, was created solely with javascript.</h3>
                        <h3 className='ProjBody'>The sketch-area of the emulator is a grid of divs, the dimenstions of which range from 10 x 10 to 100 x 100.</h3>
                        <h3 className='ProjBody'>When the mouse swipes or hovers over a div, its color scheme changes from light to dark blue, mimicking the action of an etched line.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className='tile'>
                        <a target="_blank" href='https://kdevay.github.io/odin-shopping-cart/'>
                            <img className='page' src={Froot} alt='Screenshot of a shopping webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Froot Store</h2>
                        <h3 className='ProjBody'>The Froot Store utilizes React's client-side routing to emulate a responsive online retail environment.</h3>
                        <h3 className='ProjBody'>This app's development was fully test-driven with the aid of Jest and the React testing library.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className='tile'>
                        <a target="_blank" href='https://kdevay.github.io/odin-weather/'>
                            <img className='page' src={Weather} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Weather</h2>
                        <h3 className='ProjBody'>This project allows users to search for a specific location to get the local weather conditions, by querying OpenWeather's geocoding and weather API.</h3>
                        <h3 className='ProjBody'>The page styling changes to reflect the weather, and whether it is day or night.</h3>
                        <h3 className='ProjBody'>A "loading" component displays from the moment the form is submitted until the requested information comes back from the API.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className='tile'>
                        <a target="_blank" href='https://kdevay.github.io/sign-up/'>
                            <img className='page' src={SignUp} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Sign Up</h2>
                        <h3 className='ProjBody'>This is a generic sign-up page to practice form validation, using external fonts, and layering semi-transparent elements.</h3>
                        <h3 className='ProjBody'>It was built using entirely vanilla CSS, JavaScript, and HTML.</h3>
                    </div>
            </div>
            <div className='row'>
                    <div className='tile'>
                        <a target="_blank" href='https://kdevay.github.io/dash-odin/'>
                            <img className='page' src={Dash} alt='Screenshot of a weather webpage'></img>
                        </a>
                    </div>
                    <div className='description'>
                        <h2 className='resSubDiv'>Dashboard</h2>
                        <h3 className='ProjBody'>This project is purely design driven, with a particular focus on CSS grid and flexbox.</h3>
                        <h3 className='ProjBody'>The page is Twin Peaks themed, and in service of that, I created several custom icons which echo some of the symbols referenced in the show.</h3>
                    </div>
            </div>
                
        </div>
    );
}