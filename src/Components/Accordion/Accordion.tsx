import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}


const Accordion = (props: AccordionPropsType) => {

      return (
          <div>
              <AccordionTitle title={props.titleValue}/>
              { !props.collapsed  && <AccordionBody />}
          </div>
      )

};



type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3> -- {props.title} -- </h3>
    )

}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion;