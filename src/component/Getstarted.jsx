import React from "react";
import "../css/getStarted.css";
// import { Outlet, NavLink } from "react-router-dom";
function GetStarted() {
    return (
        <>
            <div className="getStarted">
                <div className="text_started">
                    <div className="heading_started">
                        <h1>Clear your concepts.</h1>
                    </div>
                    <div className="para_started">
                        <p>
                            This is a place where you can get all your notes
                            what u want to study.
                        </p>
                        <p>
                            You can also help other students by uploading your
                            notes.
                        </p>
                    </div>
                    <div className="get_started">
                        <button >get_started</button>
                        {/* <NavLink to='/contact' style={{ textDecoration: 'none' }} ><li>Get Started</li></NavLink> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetStarted;