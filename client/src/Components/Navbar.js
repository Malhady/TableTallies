import React, {useState} from "react";
import "./Navbar.css";
import Logo from './ttlogo.PNG';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

    /*setting the content shown upon clicking list button*/
    const [content, setContent] = useState(false);

    return ( 
        <div className="Navbar"> 

            <div className="left">
                <img src= {Logo} width="200" />
            </div>

            <div className="right">
                <div className="content" id={content ? "hide" : ""}>

                    <a href="/about"> About Table Tallies</a>
                    <a href="/recipe"> Recipe Guide</a>

                </div>
                <button onClick={() => setContent(!content)}> <ReorderIcon/> </button>
            </div>
    
        </div>

        );
    }

export default Navbar;
