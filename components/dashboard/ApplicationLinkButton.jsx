import React from 'react'
import { TbEdit } from 'react-icons/tb'

function ApplicationLinkButton(props) {
    return <div className='w-[90%] h-16 bg-[#474747] rounded-[15px] my-2 ml-4 flex flex-row justify-between items-center px-4 text-white text-xl font-medium'>{props.title}
    {
            {
                0: <div className='bg-[#3A3A3A] cursor-pointer text-white w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> GO </div>,
                1: <div className='bg-[#FAAF40] cursor-pointer text-white w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> GO </div>,
                2: <div className='bg-[#41AD3F] cursor-pointer text-white w-[45px] h-[45px] rounded-[50%] flex justify-center items-center'> <TbEdit className='w-[60%] h-[60%]' /> </div>
            }[props.status]
    }
    </div>
}

export default ApplicationLinkButton;