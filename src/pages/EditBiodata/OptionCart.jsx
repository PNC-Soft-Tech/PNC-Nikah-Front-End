/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Colors} from '../../constants/colors'

const OptionCart = ({icon, title}) => {
  return (
    <div className='flex flex-row cursor-pointer gap-4 pl-6 py-2 mb-8 h-auto w-full hover:bg-gray-200 '>
        <p className='  '>
           {icon}
        </p>
        <h2 className={`text-[15px] text-[${Colors.pncPrimaryColor}] p-1 font-normal leading-7    `}> {title} </h2>
    </div>
  )
}

export default OptionCart