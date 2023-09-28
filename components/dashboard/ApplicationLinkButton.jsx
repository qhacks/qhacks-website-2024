import React from 'react'
import { TbEdit } from 'react-icons/tb'

function ApplicationLinkButton(props) {
    return <div className='w-[90%] min-w-fit h-16 bg-[#474747] rounded-[15px] my-2 ml-4 flex flex-row justify-between items-center px-4 text-white text-xl font-medium'>{props.title}
    {
            {
                0: <a href={props.dest} className='bg-[#3A3A3A] cursor-pointer text-white min-w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> GO </a>,
                1: <a href={props.dest} className='bg-[#FAAF40] cursor-pointer text-white min-w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> GO </a>,
                2: <a href={props.dest} className='bg-[#41AD3F] cursor-pointer text-white min-w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> <TbEdit className='w-[60%] h-[60%]' /> </a>
            }[props.status]
    }
    </div>
}

export default ApplicationLinkButton;