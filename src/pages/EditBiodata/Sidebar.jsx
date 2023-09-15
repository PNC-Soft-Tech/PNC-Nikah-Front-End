/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FcBusinessman, FcRemoveImage } from 'react-icons/fc';
import {FiLogOut} from 'react-icons/fi'
import { sidebarDetails } from '../../constants/Sidebardata';
import OptionCart from './OptionCart';
import Numbering from './Numbering';
import DropdownForm from './GeneralForm';
import { ScrollToTop } from '../../constants/ScrolltoTop';
import { Colors } from '../../constants/colors';

const EditBiodata = () => {
    const [status , setStatus] = useState(false)
    const [onscreen, setOnscreen] = useState(false)

    const handleOnScreen = () =>{
      setOnscreen(!onscreen)
    }
  return (
    <div className='flex flex-row'>
      <ScrollToTop />
        <div className={`min-h-screen w-[22%] bg-white border-l-2 border-gray-400 flex-col ${onscreen?'block':'flex'}  `}>
            {/* <div onClick={handleOnScreen} className='h-[20px] w-[20px]  ml-[80%] mt-[10px] cursor-pointer  ' >
              <FiLogOut className='text-[30px] self-end  ' />
            </div> */}
             <div className=' flex flex-col mt-4'>
                  <div className='h-[80px] w-[80px]  self-center '>
                    <FcBusinessman className='text-[80px] flex self-center  bg-gray-100  border-solid border-[1px] border-gray-300  rounded-full p-1' />
                  </div>
                  <h2 className={` text-[25px] text-[${Colors.pncPrimaryColor}] self-center mt-2  `}>Biodata Status</h2>
                  <p className='text-[20px] text-green self-center  '>
                  {
                    status?'Complete':'In-Complete'
                  }
                  </p> 
                  <button className={`h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-[${Colors.pncPrimaryColor}] mt-3 `} >My Biodata</button>
             </div>
             <div className=' mt-6  ' >
                {
                    sidebarDetails.map((data , index) =>(
                        <OptionCart key ={index} icon ={data.icon} title = { data.title} />
                    ))
                }
             </div>
        </div>

        <div className=' min-h-screen w-[78%] bg-gray-100 px-10 pt-12 pb-8 flex flex-row gap-10 justify-evenly '>
            <div className='w-auto '>
               <Numbering />
            </div>
            <div className=' w-full'>
              <DropdownForm />
            </div>
        </div>
    </div>
  )
}

export default EditBiodata