import { useEffect, useState } from "react";
import toPersianNumber from "../services/toPersianNumber";

/* eslint-disable react/prop-types */
function Timer({ finishTime, bgColor = "white", color = "black" , colonColor = "white" , size = "15px" , width = "26px" ,height = "26px" }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const now = Date.now();
  const fTime = new Date(finishTime).getTime();
  const persianZero = toPersianNumber(0);

  function timerFormFunction() {
      if(seconds <= 0 && minutes > 0){
        setMinutes(minutes - 1);
        setSeconds(59)
      }
      if(minutes <= 0 && hours > 0){
        setHours(hours - 1);
        setMinutes(59);
      }
      if(hours === 0 && minutes === 0 && seconds === 0){
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
  }

  useEffect(function(){
    const timerCount = Math.floor((fTime - now)/1000) ;
    setHours(Math.floor(timerCount / 3600));
    setMinutes(Math.floor((timerCount%3600) / 60));
    setSeconds(Math.floor(timerCount % 60));
  },[])

  useEffect(
    function () {
      const timer = setInterval(function () {
        setSeconds((seconds) => seconds - 1);
        timerFormFunction();
      }, 1000);

      return () => clearInterval(timer);
    },
    [seconds],
  );

  return (
    <div className={`flex items-center gap-1 font-bold`} style={{ color: color, fontSize: size }}>
      <span className={`rounded-md flex items-center justify-center`} style={{ backgroundColor: bgColor , width : width , height : height }}>
        {String(toPersianNumber(seconds)).padStart(2, `${persianZero}`)}
      </span>
      <span style={{color : colonColor}}> : </span>
      <span className={`rounded-md flex items-center justify-center`} style={{ backgroundColor: bgColor , width : width , height : height }}>
        {String(toPersianNumber(minutes)).padStart(2, `${persianZero}`)}
      </span>
      <span style={{color : colonColor}}> : </span>
      <span className={`rounded-md flex items-center justify-center`} style={{ backgroundColor: bgColor , width : width , height : height }}>
        {String(toPersianNumber(hours)).padStart(2, `${persianZero}`)}
      </span>
    </div>
  );
}

export default Timer;
