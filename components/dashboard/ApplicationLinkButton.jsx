import React from 'react'
import { TbEdit } from 'react-icons/tb'

function ApplicationLinkButton(props) {
    return <div className='w-full h-[55px] bg-[#474747] rounded-[15px] my-2 flex flex-row justify-between items-center px-4 text-white text-lg lg:text-md xl:text-lg  font-medium'>{props.title}
    {
            {
                0: <div className='bg-[#3A3A3A] text-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'></div>,
                1: <a href={props.dest} className='bg-[#FAAF40] cursor-pointer text-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'> GO </a>,
                2: <a href={props.dest} className='bg-[#41AD3F] cursor-pointer text-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'> <TbEdit className='w-[60%] h-[60%]' /> </a>
            }[props.status]
    }
    </div>
}

export default ApplicationLinkButton;