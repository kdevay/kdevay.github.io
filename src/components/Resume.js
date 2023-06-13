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
                <h3 className='resBody'>JavaScript &nbsp;•&nbsp; C &nbsp;•&nbsp; Python &nbsp;•&nbsp; TypeScript &nbsp;•&nbsp; SQL &nbsp;•&nbsp; HTML &nbsp;•&nbsp; CSS &nbsp;•&nbsp; SCSS &nbsp;•&nbsp; React &nbsp;•&nbsp; Flask &nbsp;•&nbsp; Jinja &nbsp;•&nbsp; Webpack &nbsp;•&nbsp; Jest &nbsp;•&nbsp; NPM &nbsp;•&nbsp; Git &nbsp;•&nbsp; VSCode &nbsp;•&nbsp; PgAdmin</h3>
            </div>
            <div>
                <h2 className='resSubDiv'>SKILLS</h2>
                <h3 className='resBody'>Functional Programming &nbsp;•&nbsp; Object-Oriented Programming &nbsp;•&nbsp; Design &nbsp;•&nbsp; Content Writing</h3>
            </div>

            <div>
                <h2 className='resSubDiv'>EXPERIENCE</h2>
                        <div className='topLine'>
                            <h3 className='resBody bold'>BudgetSimple </h3>
                            <h3 className='tallLine'>|</h3>
                            <h4 className='resBody'>Web Developer</h4>
                        </div>
                        <h5 className='resBody spacey'>NEW ORLEANS, LA</h5>
                        <h5 className='resBody'>APR 2023&nbsp;&nbsp; ⇛ &nbsp;&nbsp;PRESENT</h5>
                        <ul>
                            <li className='resBody'>Developed a suite of financial calculators for budgeting: retirement planning, debt repayment, credit utilization, take-home pay, and college savings</li>
                            <li className='resBody'>Built componentized budget tools and using React</li>
                            <li className='resBody'>Collaborated remotely with distributed team</li>
                            <li className='resBody'>Used TypeScript to limit errors and enhance code clarity and self-documentation</li>
                            <li className='resBody'>Distilled complex financial concepts into succinct instructional content</li>
                            <li className='resBody'>Participated in regular code reviews</li>
                            <li className='resBody'>Implemented new global styles using SASS to enhance brand consistency</li>
                            <li className='resBody'>Contributed to weekly team discussions for feature development</li>
                        </ul>
                        <br></br>
                        <div className='topLine'>
                            <h3 className='resBody bold'>Chaffe & Associates</h3>
                            <h3 className='tallLine'>|</h3>
                            <h4 className='resBody'>Technical Writer / Assistant</h4>
                        </div>
                        <h5 className='resBody spacey'>NEW ORLEANS, LA</h5>
                        <h5 className='resBody'>JAN 2021&nbsp;&nbsp; ⇛ &nbsp;&nbsp;MAY 2022</h5>
                        <ul>
                            <li className='resBody'>Parsed client contact database to improve speed and IP reputation</li>
                            <li className='resBody'>Streamlined database categorization for direct marketing strategies</li>
                            <li className='resBody'>Content-edited whitepapers and form letters for mass mailing</li>
                        </ul>
            </div>
            <div>
                <h2 className='resSubDiv'>COURSES</h2>
                    <h3 className='resBody bold'>Harvard CS50x</h3>
                    <div className='courseDescription'>
                        <h4 className='resBody'>
                            CS50x is a computer science course released by Harvard University,
                            covering the basics of computer mechanics, the history and structure of the web, 
                            and a wide range of challenging programming problems. 
                        </h4>
                        <h4 className='resBody italic inset'>
                            CS50x teaches students how to think algorithmically and solve problems efficiently. 
                            Topics include abstraction, algorithms, data structures, encapsulation, resource management, 
                            security, software engineering, and web development. 
                            Languages include C, Python, SQL, and JavaScript plus CSS and HTML.
                        </h4>
                        <a className={buttonClass} target="_blank" href='https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0'>
                            <img className="courseIcon" src={mode === 'dark' ? HarvardD : Harvard} alt="Logo for Harvard University"></img>
                        </a>
                    </div>
                    <br></br>
                    <h3 className='resBody bold'>The Odin Project</h3>
                    <div className='courseDescription'>
                        <h4 className='resBody'>
                            The odin project is a free, open source curriculum for full-stack web development. 
                            The curriculum begins with basic HTML, CSS, JavaScript, and Git, 
                            then shifts to frontend with React or Ruby on Rails, 
                            and ends on the server-side with Express and MongoDB in NodeJS.
                        </h4>
                        <a className={buttonClass} target="_blank" className={buttonClass} href="https://www.theodinproject.com/about">
                            <img className="courseIcon" src={mode === 'dark' ? OdinD : Odin} alt="Logo for The Odin Project"></img>
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