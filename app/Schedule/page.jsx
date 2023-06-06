"use client"

import React, { useState } from 'react'
import DayButton from '../../components/schedule/dayButton'
import PagedView from '../../components/schedule/PagedView'

const dates = [
    "Friday • February 2nd",
    "Saturday • February 3rd",
    "Sunday • February 4th"
]

function Schedule() {
    const [pageIndex, setPageIndex] = useState(0)

    return ( 
        <div className='bg-gray-950 flex flex-col justify-start items-center'>
            <div className='flex flex-row justify-center items-center text-white text-center' style={{
            width: "calc(100% - 100px)",
            minWidth: "400px",
            height: "70px",
            marginInline: "200px"
            }}>
                <DayButton index="1" color="#262261" />
                <DayButton index="2" color="#FAAF40" />
                <DayButton index="3" color="#FF0000" />
            </div>
            
            <PagedView pageIndex={pageIndex}>

            </PagedView>

        </div>
     );
}

export default Schedule;