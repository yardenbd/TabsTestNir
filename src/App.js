import './App.css';
import Tab from './components/Tab';

import data from './data';
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
function App() {
  const [tab,setTab] = useState(data.simulation.children)
  const [tabToDisplay,setTabToDisplay] = useState(data.simulation.children[0])
 
  const getTab=(tabTitle) =>{
    setTabToDisplay(tab.find(tab=>tab.title===tabTitle))
  }
  return (
  <div className='container'>
    <ButtonGroup tabs={tab} getTabTitle={getTab}/>
  <Tab tabData={tabToDisplay}/>
  </div>
 
  );
}

export default App;
