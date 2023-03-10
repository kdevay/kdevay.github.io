import React, {useEffect, useState} from "react";
import Harvard from "../icons/harvard.png"
import HarvardD from "../icons/harvardD.png"
import Odin from "../icons/odin.png"
import OdinD from "../icons/odinD.png"

export default function Resume(props) {
    const {mode} = props;
    const [buttonClass, setButtonClass] = useState(mode === 'dark' ? 'courseButtonD' : 'courseButton');

    useEffect(() => {
        setButtonClass(mode === 'dark' ? 'courseButtonD' : 'courseButton');
    }, [mode]);

    return (
        <div id="resumeDiv">

            <div>
                <h2 className='resSubDiv'>LANGUAGES + TOOLS</h2>
                <h3 className='resBody'>JavaScript &nbsp;•&nbsp; C &nbsp;•&nbsp; Python &nbsp;•&nbsp; SQL &nbsp;•&nbsp; HTML &nbsp;•&nbsp; CSS &nbsp;•&nbsp; React &nbsp;•&nbsp; Flask &nbsp;•&nbsp; Jinja &nbsp;•&nbsp; Webpack &nbsp;•&nbsp; Jest &nbsp;•&nbsp; NPM &nbsp;•&nbsp; Git &nbsp;•&nbsp; VSCode</h3>
            </div>
            <div>
                <h2 className='resSubDiv'>SKILLS</h2>
                <h3 className='resBody'>Functional Programming &nbsp;•&nbsp; Object-Oriented Programming &nbsp;•&nbsp; Algorithms &nbsp;•&nbsp; Data Structures &nbsp;•&nbsp; Software Engineering</h3>
            </div>

            <div>
                <h2 className='resSubDiv'>EXPERIENCE</h2>
                        <div className='topLine'>
                            <h3 className='resBody bold'>Chaffe & Associates</h3>
                            <h3 className='tallLine'>|</h3>
                            <h4 className='resBody'>Technical Writer / Assistant</h4>
                        </div>
                        <h5 className='resBody spacey'>NEW ORLEANS, LA</h5>
                        <h5 className='resBody'>JAN 2021&nbsp;&nbsp; ⇛ &nbsp;&nbsp;MAY 2022</h5>
                        <ul>
                            <li className='resBody'>Collaborated remotely with distributed team</li>
                            <li className='resBody'>Parsed client contact database to improve speed and IP reputation</li>
                            <li className='resBody'>Coordinated with upper management to streamline client categorization for direct marketing strategies</li>
                            <li className='resBody'>Content-edited whitepapers and form letters for mass mailing</li>
                        </ul>
                        <br></br>
                        <div className='topLine'>
                            <h3 className='resBody bold'>Paladar 511 </h3>
                            <h3 className='tallLine'>|</h3>
                            <h4 className='resBody'>Chef</h4>
                        </div>
                        <h5 className='resBody spacey'>NEW ORLEANS, LA</h5>
                        <h5 className='resBody'>JUN 2018&nbsp;&nbsp; ⇛ &nbsp;&nbsp;MAY 2020</h5>
                        <ul>
                            <li className='resBody'>Developed and tested recipes.</li>
                            <li className='resBody'>Contributed to daily round-table discussions to improve food quality/consistency and efficiency</li>
                        </ul>
            </div>
            <div>
                <h2 className='resSubDiv'>COURSES</h2>
                    <div className="courseRow">
                        <a className={buttonClass} target="_blank" href='https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0'>
                            <img className="courseIcon" src={mode === 'dark' ? HarvardD : Harvard} alt="Logo for Harvard University"></img>
                            <h3 className='resBody'>Harvard CS50x</h3>
                        </a>
                    
                        <a className={buttonClass} target="_blank" className={buttonClass} href="https://www.theodinproject.com/about">
                            <img className="courseIcon" src={mode === 'dark' ? OdinD : Odin} alt="Logo for The Odin Project"></img>
                            <h3 className='resBody'>The Odin Project</h3>
                        </a>                            
                    </div>
            </div>
            <div>
                <h2 className='resSubDiv'>EDUCATION</h2>
                <h3 className='resBody'>Louisiana State University ｜ Baton Rouge, LA ｜ December 2020</h3>
                <h4 className='resBody'>B.A. English, Sociology Minor</h4>
            </div>

        </div>
    );
}