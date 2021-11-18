import { createContext, useContext, useState } from "react";

export const InputValue = createContext({
  getInputValue: () => {},
  clickHandler:()=>{},
  disableClick:()=>{},
});
export const useInput = () => {
  return useContext(InputValue);
};

const InputValueProvider = (props) => {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const getInputValue = (inputVal) => {
    setValue(inputVal);
  };
  const clickHandler =()=>{
    setIsClicked(true)
  }
const disableClick =()=>{
  setIsClicked(false)
}
  
  return (
    <InputValue.Provider value={{getInputValue,clickHandler,disableClick,isClicked,value}}>
      {props.children}
    </InputValue.Provider>
  );
};
export default InputValueProvider;
