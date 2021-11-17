import React, { useState } from "react";
import "./button-group.css";

const ButtonGroup = (props) => {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <div className='displayBtn'>
      {props.tabs.map((tab, i) => (
        <button
          key={i}
          className={i === clickedId ? "customButton active" : "customButton"}
          onClick={()=>{
            setClickedId(i)
            props.getTabTitle(tab.title)}}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;