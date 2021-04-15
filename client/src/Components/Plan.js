import React from 'react'
import './Plan.css'
import './About.css'


function Plan(props) {
    return (props.trigger) ? (

    <div className="plan">
        <div className="plan-inside">
            <button className="close-button" onClick={() => props.setTrigger(false)}
                >X</button>
            {props.children}
    
        </div>
    </div>

    ) : "";

}

export default Plan;

