"use client"

import React, { useState } from 'react'
import DayButton from '../../components/schedule/dayButton'
import PagedView from '../../components/schedule/PagedView'
import '../../css/schedule.css'
import rowData from './rows.json'

function Schedule() {
    const [pageIndex, setPageIndex] = useState(0)

    let rowComponents = Object.entries(Object.values(rowData)[pageIndex]).map(([key, value], index) => 
        <tr key={index}>
            <td>{key}</td>
            <td>{value.Location}</td>
            <td>{value.Event}</td>
        </tr>
    )

    let table = (
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
                    {rowComponents.length < 11 ? Array(11 - rowComponents.length).fill(0).map((_, index) =>
                        <tr>
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
                    ) : null}
                    <tr class='last-row'>
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
                    
                </table>
            </div>
    )

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
                <h1 className='text-white text-center text-3xl'>{Object.keys(rowData)[pageIndex]}</h1>
            </div>
            
            {table}
        </div>
     );
}

export default Schedule;