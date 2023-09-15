/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cart = ({data,handleOptionChange, options , title }) => {
  return (
    <div className="w-[100%] mb-[15px] ">
    <label className="block font-medium align-start text-start text-[18px] text-gray-700">{title} <span className='text-[#e84848] text-[20px] font-normal  '>*</span></label>
    
    {options?(<select
      value={data}
      onChange={handleOptionChange}
      className="mt-1 block w-[100%] h-[45px] p-2   border border-gray-300 rounded-md shadow-sm  text-[16px]" // Set input width to 300px
      required // Mark the input as required
    >
      <option value="">নির্বাচন করুন </option>
      { options.map((option, index) => (
        <option key={index} value={option} className='p-2'>
          {option}
        </option>
      ))}
    </select>):(
        <input  
            value={data}
            placeholder={data}
            onChange={handleOptionChange}
            type={title == 'জন্মসন '?'date':'number'}
            className="mt-1 block w-[100%] h-[45px] p-2   border border-gray-300 rounded-md shadow-sm  text-[13px]" // Set input width to 300px
            required // Mark the inp
         />
    )}

  </div>
  )
}

export default Cart