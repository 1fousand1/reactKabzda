import React, {ChangeEvent, useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
    ///collapsed: boolean
}


const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)

    const onClickCollapsed = () => {
        debugger
        setCollapsed( !collapsed)
    }

      return (
          <div>
              <AccordionTitle title={props.titleValue}/>
              <button onClick={onClickCollapsed}>TOGGLE</button>
              { !collapsed  && <AccordionBody />}
          </div>
      )

};


type UncontrolledAccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
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
export default UncontrolledAccordion;