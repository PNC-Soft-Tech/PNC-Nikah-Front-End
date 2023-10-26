/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import BioContext from "../../contexts/BioContext";
import BioData from "../BioData/BioData";
import { Colors } from "../../constants/colors";
import { FaFilter } from "react-icons/fa";

const BioDatasGrid = ({ sideBarDisplay, setSideBarDisplay }) => {
	const { bios } = useContext(BioContext);
	console.log(bios);

	return (
		<div className="w-full mx-5 mt-5">
			<h1
				style={{ color: Colors.titleText }}
				className="mb-2 text-3xl font-semibold text-gray-700"
			>
				বায়োডাটা সমূহ
			</h1>
			<p className="text-gray-500">{bios?.length} টি বায়োডাটা পাওয়া গেছে </p>
			<div className=" flex text-right items-center justify-between">
				<div
					onClick={() => setSideBarDisplay((prev) => !prev)}
					className="lg:hidden bg-purple-700 px-3 py-1 rounded-md hover:bg-purple-900 text-white text-xl flex items-center ml-right cursor-pointer"
				>
					<FaFilter />
					<span className="ml-1">Filter</span>
				</div>
				<select className="block  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-[200px] lg:ml-auto ml-0 sm:text-sm">
					<option value="নতুন">নতুন</option>
					<option value="পুরাতন">পুরাতন</option>
				</select>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
				{bios?.length > 0 &&
					bios.map((biodata, index) => {
						return <BioData key={index} biodata={biodata} />;
					})}
			</div>
		</div>
	);
};

export default BioDatasGrid;
