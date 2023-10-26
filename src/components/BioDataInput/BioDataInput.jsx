import { Button, Input } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Colors } from "../../constants/colors";
const BioDataInput = () => {
	return (
		<div className="flex mt-5 flex-col  lg:w-[20rem] w-full">
			<div className="mr-8">
				<Input color="purple" className="py-5 " label="বায়োডাটা নং" />
			</div>

			<div className="grid grid-cols-2 gap-4 my-10 mr-8 ">
				<Button
					className="flex items-center px-5"
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
				>
					<AiOutlineSearch className="w-4 h-6 " /> খুজুন
				</Button>
				<Button
					className="flex items-center px-5 py-1"
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
				>
					<FaTrash className="w-4 h-6 pr-2" />
					মুছে ফেলুন
				</Button>
			</div>
		</div>
	);
};

export default BioDataInput;
