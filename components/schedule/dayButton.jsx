import React from 'react'

function DayButton(props) {
    return ( 
        <div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
        }} className='day-button' onClick={
            () => {
                props.setPageIndex(props.index)
            }
        }>
            {props.before}
            <h1 className='flex flex-row justify-center items-center text-xl sm:text-2xl' style={{
            height: "100%",
            backgroundColor: props.color,
            position: "relative",
            flexGrow: 1,
            // fontSize: "30px",
            fontWeight: "700",
            }}
            >
                Day {Number(props.index) + 1}
            </h1>
            {props.after}
        </div>
        
     );
}

export default DayButton;