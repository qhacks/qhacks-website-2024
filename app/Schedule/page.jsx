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
            <div id='day-button-container'  className='flex flex-row justify-center items-center text-center' style={{
            marginInline: "200px"
            }}>
                <DayButton index="0" color="#262261" setPageIndex={setPageIndex} after={
                    <div className='triangle right-triangle' style={{
                        backgroundColor: "#262261",
                    }}></div>
                }/>
                <DayButton index="1" color="#FAAF40" setPageIndex={setPageIndex} before={
                    <div className='triangle left-triangle' style={{
                        backgroundColor: "#FAAF40",
                    }}></div>
                } after={
                    <div className='triangle right-triangle' style={{
                        backgroundColor: "#FAAF40",
                    }}></div>
                }/>
                <DayButton index="2" color="#FF0000" setPageIndex={setPageIndex} before={
                    <div className='triangle left-triangle' style={{
                        backgroundColor: "#FF0000",
                    }}/>
                }/>
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