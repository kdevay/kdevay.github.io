import React from "react";

export default function Resume() {
    return (
        <div id="resumeDiv">

            <div>
                <h2 className='resSubDiv'>LANGUAGES + TOOLS</h2>
                <h3 className='resBody'>JavaScript &nbsp;•&nbsp; C &nbsp;•&nbsp; Python &nbsp;•&nbsp; SQL &nbsp;•&nbsp; HTML &nbsp;•&nbsp; CSS &nbsp;•&nbsp; React &nbsp;•&nbsp; Flask &nbsp;•&nbsp; Jinja &nbsp;•&nbsp; Webpack &nbsp;•&nbsp; Jest &nbsp;•&nbsp; NPM &nbsp;•&nbsp; Git &nbsp;•&nbsp; VSCode</h3>
            </div>
            <div>
                <h2 className='resSubDiv'>SKILLS</h2>
                <h3 className='resBody'>Functional Programming &nbsp;•&nbsp; Object-oriented programming &nbsp;•&nbsp; abstraction &nbsp;•&nbsp; algorithms &nbsp;•&nbsp; data structures &nbsp;•&nbsp; resource management &nbsp;•&nbsp; software engineering</h3>
            </div>

            <div>
                <h2 className='resSubDiv'>EXPERIENCE</h2>
                <div>
                <h3 className='resBody bold'>Chaffe & Associates</h3>
                    <h4 className='resBody'>Technical Writer</h4>
                    <span>
                        <h5 className='resBody'>New Orleans</h5>
                        <p>•</p>
                        <h5 className='resBody'>Jan 2021 – May 2022</h5>
                    </span>
                    <ul>
                        <li className='resBody'>Parsed client contact database to improve speed and IP reputation</li>
                        <li className='resBody'>Coordinated with upper management to streamline client categorization for direct marketing strategies</li>
                        <li className='resBody'>Content edited whitepapers and form letters for mass mailing</li>
                        <li className='resBody'>Recorded actions in formal performance reports</li>
                    </ul>
                </div>
                <br></br>
                <div>
                    <h3 className='resBody bold'>Paladar 511</h3>
                    <h4 className='resBody'>Chef</h4>
                    <span>
                        <h5 className='resBody'>New Orleans</h5>
                        <p>•</p>
                        <h5 className='resBody'>Jun 2018 – May 2020</h5>
                    </span>
                    <ul>
                        <li className='resBody'>Recipe writing and development</li>
                        <li className='resBody'>Contributed to daily round-table discussions to improve food quality and efficiency</li>
                    </ul>
                </div>

            </div>
            <div>
                <h2 className='resSubDiv'>COURSES</h2>
                    <h3 className='resBody'>CS50 (Harvard)</h3>
                    <h3 className='resBody'>The Odin Project</h3>
            </div>
            <div>
                <h2 className='resSubDiv'>EDUCATION</h2>
                <h3 className='resBody'>Louisiana State University ｜ Baton Rouge, LA ｜ December 2020</h3>
                <h4 className='resBody'>B.A. Creative Writing, Sociology Minor</h4>
            </div>

        </div>
    );
}