import { useEffect, useState } from "react";
import './style.css'

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
 const intervalId = setInterval(()=>{
   setTime(new Date())
 },1000)

 return()=>{
    clearInterval(intervalId)
 }
  },[])

  return (
  <>
   <div className="container">
        <div className="section">
            <span className="time" id="hours">{time.getHours().toString().padStart(2, "0")}</span>
            <span className="title">Hours</span>
        </div>
        <span className="colon">:</span>
        <div className="section">
            <span className="time" id="minutes">{time.getMinutes().toString().padStart(2, "0")}</span>
            <span className="title">Minutes</span>
        </div>
        <span className="colon">:</span>
        <div className="section">
            <span className="time" id="seconds">{time.getSeconds().toString().padStart(2, "0")}</span>
            <span className="title">Seconds</span>
        </div>
    </div>
  </>
   
  );
}

export default DigitalClock;

