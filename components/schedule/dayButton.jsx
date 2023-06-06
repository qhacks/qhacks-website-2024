import React from 'react'

function DayButton(props) {
    return ( 
        <h1 className='flex flex-col justify-center items-center' style={{
            height: "100%",
            backgroundColor: props.color,
            position: "relative",
            flexGrow: 1,
            fontSize: "30px",
            cursor: "pointer"
        }}>Day {props.index}
        </h1>
     );
}

export default DayButton;