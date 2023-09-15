/* eslint-disable no-unused-vars */
import { BiSolidDashboard , BiEdit , BiListCheck, BiListUl , BiSolidAddToQueue , } from 'react-icons/bi';

import {BsFlag} from 'react-icons/bs'

import { FiSettings, FiLogOut} from 'react-icons/fi'
import { Colors } from './colors';

const sidebarDetails = [
	{ 
        icon: <BiSolidDashboard className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "ড্যাশবোর্ড",
	},
	{
        icon: <BiEdit className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "বায়োডাটা এডিট করুন",
	},
	{
        icon: <BiListCheck className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "পছন্দের তালিকা ",
	},
	{
        icon: <BiListUl className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "অপছন্দের তালিকা ",
	},
	{
        icon: <BiSolidAddToQueue className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `}/>,
		title: "আমার ক্রয়সমূহ ",
	},
	{
        icon: <BsFlag className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "সাপোর্ট & রিপোর্ট ",
	},
	{
        icon: <FiSettings className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "সেটিংস ",
	},
    {
        icon: <FiLogOut className={`h-8 w-8 text-[12px] text-[${Colors.pncPrimaryColor}] p-1 bg-gray-100 rounded-md `} />,
		title: "লগাউট ",
	},
];

export {sidebarDetails}