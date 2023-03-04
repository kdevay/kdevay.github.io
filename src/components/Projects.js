import React from "react";
import Sketch from "../projects/sketch.png";
import Froot from "../projects/froot.png";
import Weather from "../projects/weather.png";
import Dash from "../projects/dash.png";
import SignUp from "../projects/signUp.png";

export default function Projects() {
    return (
        <div id="workDiv">
            <a className='tile' target="_blank" href='https://kdevay.github.io/Etch-a-Sketch/'><img className='page' src={Sketch} alt='Screenshot of an etch-a-sketch emulator webpage'></img></a>
            <div className='tile'>
                <h2 className='resSubDiv'>Etch-a-Sketch Emulator</h2>
                <h3 className='resBody'>This emulator uses mouse swipes to draw images.</h3>
                <h3 className='resBody'>Each element, aside from the root container, was created solely with javascript.</h3>
                <h3 className='resBody'>The drawable area of the emulator is made up of a grid of divs.</h3>
                <h3 className='resBody'>When users hover their mouse over a div, it changes from light to dark blue.</h3>
            </div>
            <a className='tile' target="_blank" href='https://kdevay.github.io/odin-shopping-cart/'><img className='page' src={Froot} alt='Screenshot of a shopping webpage'></img></a>
            <div className='tile'>
                <h2 className='resSubDiv'>Froot Store</h2>
                <h3 className='resBody'>This store was a practice in test-driven development and front-end routing with React.</h3>
                <h3 className='resBody'>The app was tested with Jest and the React testing library.</h3>
            </div>
            <a className='tile' target="_blank" href='https://kdevay.github.io/odin-weather/'><img className='page' src={Weather} alt='Screenshot of a weather webpage'></img></a>
            <div className='tile'>
                <h2 className='resSubDiv'>Weather</h2>
                <h3 className='resBody'>This project allows users to search for a specific location to get the local weather conditions, by querying OpenWeather's geocoding and weather API.</h3>
                <h3 className='resBody'>The page styling changes to reflect the weather, and whether it is day or night.</h3>
                <h3 className='resBody'>A "loading" component displays from the time the form is submitted until the requested information comes back from the API.</h3>
            </div>
            
            <a className='tile' target="_blank" href='https://kdevay.github.io/sign-up/'><img className='page' src={SignUp} alt='Screenshot of a weather webpage'></img></a>
            <div className='tile'>
                <h2 className='resSubDiv'>Sign Up</h2>
                <h3 className='resBody'>This is a generic sign-up page to practice form validation, using external fonts, and layering semi-transparent elements.</h3>
                <h3 className='resBody'>It was built using entirely vanilla CSS, JavaScript, and HTML.</h3>
            </div>
            
            <a className='tile' target="_blank" href='https://kdevay.github.io/dash-odin/'><img className='page' src={Dash} alt='Screenshot of a weather webpage'></img></a>
            <div className='tile'>
                <h2 className='resSubDiv'>Dashboard</h2>
                <h3 className='resBody'>This project is purely design driven, with a particular focus on CSS grid and flexbox.</h3>
                <h3 className='resBody'>The page is Twin Peaks themed, and in service of that, I created several custom icons which echo some of the symbols referenced in the show.</h3>
                <h3 className='resBody'>I also incorporated a loading component that displays after form submission, until the requested data is received from the API.</h3>
            </div>
        </div>
    );
}