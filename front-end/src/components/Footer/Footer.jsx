/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BiLogoFacebook , BiSolidAddToQueue, BiLogoLinkedin, BiLogoGmail, BiLogoWhatsapp } from 'react-icons/bi';
import { BsTelephoneInbound } from 'react-icons/bs'

const Footer = () => {
  const [impLinks, setImpLinks] = useState([])
  const [contactInfo, setContactInfo] = useState({})



  return (
    <div className=" bg-gradient-to-r from-[#0b1d58] to-[#071952] mt-[10px] text-white font-serif text-sm leading-4 sm:p-[0] sm:m-[0] sticky  ">
      <div className="flex flex-col justify-between gap-8 px-10 py-10 lg:flex-row md:px-20 md:gap-12">
          
          <div className=" w-[100%] lg:w-[25%] flex flex-col gap-4 ">
              <h1 className="text-[25px] mb-4 text-[#ffff] font-semibold tracking-widest" >PNC Soft Tech</h1>
              <p className=" text-[18px] text-[#fff] font-normal leading-[25px] ">PNC Soft Tech is a mobile app and web development company that offers a wide range of services and features using various technologies
              </p>
          </div>

          <div className="flex flex-col  gap-4 w-[100%] lg:w-[25%] ">
            <h1 className="text-[25px] mb-4 text-[#ffff] font-semibold tracking-widest" >Quick Contact</h1>
             <div className="flex flex-row gap-2 ">
                <h3 className=" flex flex-row gap-3 text-[15px]  text-[#fff] font-bold p-0 m-0 ">
                  <p className="text-[18px] text-[#fff] font-normal ">
                    <BsTelephoneInbound />
                  </p>
                </h3>
                <p className="text-[18px] text-[#fff] font-normal ">+880 1793-278360</p>
              </div>

              <div className="flex flex-row gap-3 ">
                <h3 className=" flex flex-row gap-1 text-[15px] text-[#fff] font-bold p-0 m-0 ">
                  <p className="text-[18px] text-[#fff] font-normal ">
                    <BiLogoGmail />
                  </p>
                </h3>
                <p className="text-[18px] text-[#fff] font-normal " >pncsofttech@gmail.com</p>
              </div>

              <div className="flex flex-row gap-3">
                   <p className="text-[18px]">
                    <BiLogoWhatsapp />
                   </p>
                   <p>+880 1793278360</p>
              </div>
          </div>



          <div className=" flex flex-col  gap-4  sm:flex-row w-[100%] lg:w-[25%] ">
            <div className="box-border flex flex-col gap-4 w-84 ">
              <h1 className="text-[25px] mb-4 text-[#ffff] font-semibold tracking-widest" >Other Page</h1>

              <div className="flex flex-row gap-3 ">
                  <div className=" text-[18px] ">
                    <BiSolidAddToQueue />
                  </div>
                  <Link to = '/services' className=" text-[18px] ">Services</Link>
              </div>

              <div className="flex flex-row gap-3 ">
                  <div className=" text-[18px] ">
                    <BiSolidAddToQueue />
                  </div>
                  <Link to = '/faq' className=" text-[18px] ">FAQ</Link>
              </div>

              <div className="flex flex-row gap-3 ">
                  <div className=" text-[18px] ">
                    <BiSolidAddToQueue />
                  </div>
                  <Link to = '/team' className=" text-[18px] ">Team</Link>
              </div>

            </div>
          </div>

          <div className=" w-[100%] lg:w-[25%] flex flex-col gap-2 item-center ">
          <h1 className="text-[25px] text-[#ffff] mb-4 font-semibold tracking-widest" >Our Social Media</h1>

            <a href="https://www.facebook.com/pncsoft.tech"  className="flex flex-row gap-3 cursor-pointer ">
                <p  className='cursor-pointer bg-[#505e96]  p-2 border-solid border-[0px] border-[#fff]  hover:bg-[#fff] rounded-full transition ease-in duration-700 '>
                          <BiLogoFacebook className='text-[18px] text-[#fff] hover:text-[#ff5e14] ' />
                </p>
                <p className="text-[18px] hover:text-[#ff5e14] transition ease-in duration-700 text-[#fff] p-2 ">Facebook</p>
            </a>

            <a href="https://www.linkedin.com/company/pnc-soft-tech/"  className="flex flex-row gap-3 cursor-pointer ">
                <p  className='cursor-pointer bg-[#505e96]  p-2 border-solid border-[0px] border-[#fff]  hover:bg-[#fff] rounded-full transition ease-in duration-700 '>
                          <BiLogoLinkedin className='text-[18px] text-[#fff] hover:text-[#ff5e14] ' />
                </p>
                <p className="text-[18px] hover:text-[#ff5e14] transition ease-in duration-700 text-[#fff] p-2 ">Linkedin</p>
            </a>

            <a href=""  className="flex flex-row gap-3 cursor-pointer ">
                <p  className='cursor-pointer bg-[#505e96]  p-2 border-solid border-[0px] border-[#fff]  hover:bg-[#fff] rounded-full transition ease-in duration-700 '>
                          <BiLogoWhatsapp className='text-[20px] text-[#fff] hover:text-[#ff5e14] ' />
                </p>
                <p className="text-[18px] hover:text-[#ff5e14] transition ease-in duration-700 text-[#fff] p-2 ">Whatsapp</p>
            </a>


          </div>
      </div>

      <div className="bg-[#081643] p-[20px]  text-[15px] text-[#f2f2f2] ">
        <p className="text-center text-[#fff] text-[17px] leading-[30px] tracking-widest "> Copyright © 2023 by PNC Soft Tech </p>
      </div>
    </div>
  )
}

export default Footer
