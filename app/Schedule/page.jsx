"use client"

import React, { useState } from 'react'
import DayButton from '../../components/schedule/dayButton'
import PagedView from '../../components/schedule/PagedView'
import '../../css/schedule.css'

const dates = [
    "Friday • February 2nd",
    "Saturday • February 3rd",
    "Sunday • February 4th"
]

const rows = [
    // day 1 
    [["8:30 PM", "Mitchell Hall", "Opening Ceremonies"], ["8:30 PM", "Mitchell Hall", "Dinner"], ["8:30 PM", "Mitchell Hall", "Late Night Snack"]],
    // day 2
    [["9:30 PM", "Mitchell Hall", "Opening Ceremonies"], ["9:30 PM", "Mitchell Hall", "Dinner"], ["9:30 PM", "Mitchell Hall", "Late Night Snack"]],
    // day 3
    [["10:30 PM", "Mitchell Hall", "Opening Ceremonies"], ["10:30 PM", "Mitchell Hall", "Dinner"], ["10:30 PM", "Mitchell Hall", "Late Night Snack"]]
]

function Schedule() {
    const [pageIndex, setPageIndex] = useState(0)

    const rowComponents = rows[pageIndex].map((row, index) => {
        return (
            <tr key={"row-" + index}>
            {
                row.map((cell, index) => {
                    return (
                        <td key={"data-" + index}>{cell}</td>
                    )
                })
            }
            </tr>
        )
    })

    return ( 
        <div className='bg-gray-950 flex flex-col justify-start text-white items-center'>
            <div className='flex flex-row justify-center items-center text-center' style={{
            width: "calc(100% - 100px)",
            minWidth: "400px",
            height: "70px",
            marginInline: "200px"
            }}>
                <DayButton index="0" color="#262261" setPageIndex={setPageIndex}/>
                <DayButton index="1" color="#FAAF40" setPageIndex={setPageIndex}/>
                <DayButton index="2" color="#FF0000" setPageIndex={setPageIndex}/>
            </div>

            <div id="schedule-date" style={{
                fontWeight: "600",
                marginBlock: 30
            }}>
                <h1 className='text-white text-center text-3xl'>{dates[pageIndex]}</h1>
            </div>
            
            <div id="paged-table">

            <table id={`day-${pageIndex - 1}-table`}>
                    <tr>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Event</th>
                    </tr>
                    <tr class='decorative-row'>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                        <td>
                            <div></div>
                        </td>
                    </tr>
                    {rowComponents}
                    
                </table>
            </div>
        </div>
     );
}

export default Schedule;