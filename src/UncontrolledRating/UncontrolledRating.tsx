import React, {useState} from 'react';


type RatingPropsType ={

}


const UncontrolledRating = (props: RatingPropsType) => {
    console.log('Rating rendering')

    let [value, setValue] = useState(0);

    return (
        <div>
            <div>
                <Star selected={value > 0} /><button onClick={()=>{setValue(1)}}>1</button>
                <Star selected={value > 1} /><button onClick={()=>{setValue(2)}}>2</button>
                <Star selected={value > 2} /><button onClick={()=>{setValue(3)}}>3</button>
                <Star selected={value > 3} /><button onClick={()=>{setValue(4)}}>4</button>
                <Star selected={value > 4} /><button onClick={()=>{setValue(5)}}>5</button>

            </div>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => (props.selected === true) ? (<span><b>Star </b></span>) :  <span>Star</span>



export default UncontrolledRating;