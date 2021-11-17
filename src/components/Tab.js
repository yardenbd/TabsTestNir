import "../App.css";
import React from "react";
import Renderer from "./Renderer";
const Tab = (props) => {
  const title = props.tabData.title;
  const components = props.tabData.components;
  return (
    <div className="content-tabs">
      <div className="content  active-content">
        <h2>{title}</h2>
        <hr />
        <div className='display'>
         {components.map(config => Renderer(config))}
         </div>
      </div>
    </div>
  );
};

export default Tab;
