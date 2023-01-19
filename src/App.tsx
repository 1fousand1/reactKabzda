import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating/UncontrolledRating";


function App(props: any) {
    return (
        <div className={"App"}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            {/*        <PageTitle ={"this is App component"} />
        <PageTitle ={"My friends"} />
        <Accordion titleValue={'Menu'} collapsed={true} />
        <Accordion titleValue={'Users'} collapsed={false}/>*/}
        </div>
    );
}

////test12

export default App;
