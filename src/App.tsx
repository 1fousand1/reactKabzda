import React from 'react';
import './App.css';
import Accordion from "./Accordion";
import Rating from "./Rating";




function App(props:any) {
  return (
    <div className="App">
{/*        <PageTitle ={"this is App component"} />
        <PageTitle ={"My friends"} />*/}
        <Accordion titleValue={'Menu'} collapsed={true} />
        <Accordion titleValue={'Users'} collapsed={false}/>
    </div>
  );
}
////test

export default App;
