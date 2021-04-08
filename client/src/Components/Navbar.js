import "./Navbar.css";
import Logo from './ttlogo.PNG';
import Popup from './About';
import { useState } from 'react';

function Navbar() {

    const [buttonPopup, setButtonPopup] = useState(false);

    return ( 
        <div className="Navbar"> 

            <div className="left">
                <img src= {Logo} width="130" alt="" />
            </div>

            <div className="right">
                <main>
                    <button className="openButton" onClick={() => setButtonPopup(true)}>About Table Tallies</button>
                </main>

                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3>Table Tallies</h3>
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
                        <p>Visit cdc.gov/nutrition/data-statistics for more nutritional information and statistics.
                        </p>
                        
                </Popup>
            
            </div>
        </div>
    
        )
    }

export default Navbar;
