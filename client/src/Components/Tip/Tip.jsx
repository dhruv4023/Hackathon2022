import React,{useState} from "react";

import "./Tip.css";

function Tip({ tip,tf }) {
  const [display, setDisplay] = useState(tf);
  const fun=()=>{
    setTimeout(() => {
      setDisplay(false)
    }, 10000);
  }
  fun();
  return (
    <>
      {display && (
        <div className="Tip_container">
          <div className="typewriter">{tip}</div>
        </div>
      )}
    </>
  );
}

export default Tip;
