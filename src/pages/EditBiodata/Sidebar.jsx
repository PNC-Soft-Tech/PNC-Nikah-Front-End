/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FcBusinessman } from 'react-icons/fc';
import { sidebarDetails } from '../../constants/Sidebardata';
import OptionCart from './OptionCart';
import Numbering from './Numbering';
import DropdownForm from './GeneralForm';

const EditBiodata = () => {
    const [status , setStatus] = useState(false)
  return (
    <div className='flex flex-row'>
        <div className='min-h-screen w-[22%] bg-white border-l-2 border-gray-400 flex-col '>
             <div className=' flex flex-col mt-4'>
                  <div className='h-[80px] w-[80px]  self-center '>
                    <FcBusinessman className='text-[80px] flex self-center  bg-gray-100  border-solid border-[1px] border-gray-300  rounded-full p-1' />
                  </div>
                  <h2 className=' text-[25px] text-[#c9c7c7df] self-center mt-2 '>Biodata Status</h2>
                  <p className='text-[20px] text-green self-center  '>
                  {
                    status?'Complete':'In-Complete'
                  }
                  </p> 
                  <button className='h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 ' >My Biodata</button>
             </div>
             <div className=' mt-6  ' >
                {
                    sidebarDetails.map((data , index) =>(
                        <OptionCart key ={index} icon ={data.icon} title = { data.title} />
                    ))
                }
             </div>
        </div>

        <div className=' min-h-screen w-[78%] bg-gray-100 px-12 pt-12 pb-8 flex flex-row gap-12 justify-evenly '>
            <div className='w-auto '>
               <Numbering />
            </div>
            <div className=' w-auto'>
              <DropdownForm />
            </div>
        </div>
    </div>
  )
}

export default EditBiodata