import React from 'react';


type StarPropsType = {
    selected: true | false
}


const Star = (props:StarPropsType) => {
    if(props.selected = true){
        return (
            <strong>
                Star
            </strong>
        );
    } else {
        return (
            <div>
                Star
            </div>
        );
    }

};

export default Star;