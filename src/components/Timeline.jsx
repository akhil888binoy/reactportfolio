import React from 'react'
import data from "../assets/data.json"

function Timeline() {
  return (
    <div id='timeline'>
        <div className="timelineBox">

        </div>
    
    </div>
  )
}
const TimelineItem=({heading,text, index})=>{
    <div className= {`timelineItem ${
        index%2===0}? "leftTimeline" : "rightTimeline"`}>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
}

export default Timeline