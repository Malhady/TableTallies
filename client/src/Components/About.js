import React from 'react'
import './About.css'


function Popup(props) {
    return (props.trigger) ? (

    <div className="about">
        <div className="about-inside">
            <button className="close-button" onClick={() => props.setTrigger(false)}
                >Close</button>
            {props.children}
    
        </div>
    </div>

    ) : "";

}

export default Popup;