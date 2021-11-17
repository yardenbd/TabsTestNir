import React from "react";
import Input from './Input'
import Button from "./Button";
import Label from "./Label";

function renderer(config) {
  switch (config.base_component) {
      case 'MyInput':
          
        return React.createElement(
            Input,
            {placeHolder:config.attributes.placeholder , id :config.id }
        )
       case 'MyButton':
           
        return React.createElement(
            Button,
            {text : config.text , id:config.id , click: config.click}
        )
       case 'MyLabel':
        return React.createElement(
            Label
            ,
            {id:config.id}
        )
      default:
          break;
  }
    ;
}
export default renderer;