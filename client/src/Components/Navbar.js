import "./Navbar.css";
import Logo from './ttlogo.PNG';
import Popup from './About';
import Plan from './Plan';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableRow } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';


function Navbar() {

    const [aboutPopup, setAboutPopup] = useState(false);
    const [planPopup, setPlanPopup] = useState(false);

    return ( 
        <div className="Navbar"> 

            <div className="left">
                <a href="/"><img src= {Logo} width="130" alt="" /></a>
            </div>

            <div className="right">
                <main>
                    <button className="openButton" onClick={() => setAboutPopup(true)}
                    >About Table Tallies</button>
                </main>

                <Popup trigger={aboutPopup} setTrigger={setAboutPopup}>
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
                        <p>Visit <a>cdc.gov/nutrition/data-statistics</a> for more nutritional information and statistics.
                        </p>

                </Popup>
                <main>
                    <button className="openButton" onClick={() => setPlanPopup(true)}>Calorie Planning</button>
                </main>
            
                <Plan trigger={planPopup} setTrigger={setPlanPopup}>
                        <h3>Recommended Calorie Consumption per WebMD</h3>
                        
                        <Table className="calorie-table">
                            <TableHead>
                                <TableRow className="row"> 
                                    <TableCell></TableCell>
                                    <TableCell align="center">Age (years)</TableCell>
                                    <TableCell align="center">Calories (Inactive)</TableCell>
                                    <TableCell align="center">Calories (Active)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Female</TableCell>
                                    <TableCell align="center">9 - 13</TableCell>
                                    <TableCell align="center">1600</TableCell>
                                    <TableCell align="center">1800 - 2200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">14 - 18</TableCell>
                                    <TableCell align="center">1800</TableCell>
                                    <TableCell align="center">2400</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">19 - 30</TableCell>
                                    <TableCell align="center">2000</TableCell>
                                    <TableCell align="center">2400</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">31 - 50</TableCell>
                                    <TableCell align="center">1800</TableCell>
                                    <TableCell align="center">2200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">51 +</TableCell>
                                    <TableCell align="center">1600</TableCell>
                                    <TableCell align="center">2000 - 2200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Male</TableCell>
                                    <TableCell align="center">9 - 13</TableCell>
                                    <TableCell align="center">1800</TableCell>
                                    <TableCell align="center">2000 - 2600</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">14 - 18</TableCell>
                                    <TableCell align="center">2200</TableCell>
                                    <TableCell align="center">2800 - 3200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">19 - 30</TableCell>
                                    <TableCell align="center">2400</TableCell>
                                    <TableCell align="center">3000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">31 - 50</TableCell>
                                    <TableCell align="center">2200</TableCell>
                                    <TableCell align="center">2800 - 3000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">51 +</TableCell>
                                    <TableCell align="center">2000</TableCell>
                                    <TableCell align="center">2400 - 2800</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        
                </Plan>
            </div>
        </div>
    
        )
    }

export default Navbar;
