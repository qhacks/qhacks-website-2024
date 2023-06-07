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

function Schedule() {
    const [pageIndex, setPageIndex] = useState(0)

    return ( 
        <div className='bg-gray-950 flex flex-col justify-start text-white items-center'>
            <div className='flex flex-row justify-center items-center text-center' style={{
            width: "calc(100% - 100px)",
            minWidth: "400px",
            height: "70px",
            marginInline: "200px"
            }}>
                <DayButton index="1" color="#262261" />
                <DayButton index="2" color="#FAAF40" />
                <DayButton index="3" color="#FF0000" />
            </div>

            <div id="schedule-date" style={{
                fontWeight: "600",
                marginBlock: 30
            }}>
                <h1 className='text-white text-center text-3xl'>{dates[pageIndex]}</h1>
            </div>
            
            <PagedView id="paged-table" pageIndex={pageIndex}>
               <table id="day-1-table">
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
                    <tr>
                        <td>8:30 PM</td>
                        <td>Mitchell Hall</td>
                        <td>Opening Ceremonies</td>
                    </tr>
                    <tr>
                        <td>8:30 PM</td>
                        <td>Mitchell Hall</td>
                        <td>Dinner</td>
                    </tr>
                    <tr>
                        <td>8:30 PM</td>
                        <td>Mitchell Hall</td>
                        <td>Late Night Snack</td>
                    </tr>
                    
               </table>
            </PagedView>

        </div>
     );
}

export default Schedule;