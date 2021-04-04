import React, { useState } from 'react';
import "./Navbar.css";
import Logo from './ttlogo.PNG';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

    /*setting the content shown upon clicking list button
    const [content, setContent] = useState(false); */

    const [modalState, setModalState] = useState(false)

    const manageState = () => {
        setModalState(!modalState)
    }

    return ( 
        <div className="Navbar"> 

            <div className="left">
                <img src= {Logo} width="200" />
            </div>

            <div className="right">

                <div className={`modalBackground modalShowing-${modalState}`}>
                    <div className="modalInside">
                        <div className="modalContent">
                            <h2>Table Tallies</h2>
                            <p>The purpose of this web application is to provide users with the opportunity to improve their diet plan. 
                                Table Tallies aims to assist users with efficiently acquiring the dietary information that they need, regardless of knowledge level on this subject. 
                                With this application, users will be able discover and easily follow recipes that fit into their diet goals, while keeping track of nutritional information. 
                                Table Tallies will separate itself from similar services due to the many specific diet options and filters that give users the easiest path to their objective. 
                            </p>
                            <p>Currently, obesity is a significant problem in the U.S. The prevalence of obesity was 42.4% as of 2018, compared to just 30.5% in 2000. 
                            In this same period, severe obesity climbed to 9.2%, starting at 4.7%. This may stem from lack of access to the proper information that is needed to be healthy. 
                            </p>
                            <p>By providing an application that is easy to use and quickly provides users with meals that will fit into their diet plans, 
                                Table Tallies can give more people the opportunity to transition to a healthier lifestyle.
                            </p>


                        </div>
                    </div>
                </div>


                 <button onClick={() => manageState()}>About Table Tallies</button>

                </div>
                
            </div>
    
        )
    }

export default Navbar;
