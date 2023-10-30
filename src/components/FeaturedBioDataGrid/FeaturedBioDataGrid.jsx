import { useContext } from "react";
import BioData from "../BioData/BioData";
import BioContext from "../../contexts/BioContext";
import { Colors } from "../../constants/colors";

const FeaturedBioDataGrid = () => {
	const { bios } = useContext(BioContext);

	return (
		<div className="w-full">
			<h1
				style={{ color: Colors.titleText }}
				className="mb-2 text-3xl font-semibold text-gray-700"
			>
				ফিচারড বায়োডাটা সমূহ
			</h1>
			{bios && bios.length <= 0 && (
				<p className="text-gray-500">কোনো ফিচারড বায়োডাটা নেই</p>
			)}
			{/* <div className="w-[200px] text-right ml-auto">
        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="নতুন">নতুন</option>
          <option value="পুরাতন">পুরাতন</option>
        </select>
      </div> */}
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
				{bios?.length > 0 &&
					bios.map((biodata, index) => {
						return <BioData key={index} biodata={biodata} />;
					})}
			</div>
		</div>
	);
};

export default FeaturedBioDataGrid;
