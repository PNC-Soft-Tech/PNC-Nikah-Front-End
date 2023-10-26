/* eslint-disable react/prop-types */
import { FcBusinessman } from "react-icons/fc";
import { sidebarDetails } from "../../constants/Sidebardata";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Colors } from "../../constants/colors";
import OptionCart from "../OptionCart/OptionCart";

const UserSidebar = ({ openSidebar }) => {
	const navigate = useNavigate();
	const { userInfo } = useContext(UserContext);
	const myBioDataHandler = () => {
		navigate(`/user/account/preview-biodata/${userInfo?.data[0]?.id}`);
	};

	return (
		<div
			className={`min-h-screen w-full bg-white shadow-xl rounded-b-lg border-l-2 border-gray-400 flex-col relative ${
				!openSidebar && "hidden"
			} `}
		>
			<div className="flex flex-col ">
				<div className="h-[80px] w-[80px] pt-2  self-center ">
					<FcBusinessman className="text-[80px] flex self-center  bg-gray-100  border-solid border-[1px] border-gray-300  rounded-full p-1" />
				</div>
				<h2 className=" text-[20px] text-[#c9c7c7df] self-center mt-2 ">
					Biodata Status
				</h2>
				<p className="text-[20px] text-green self-center  capitalize ">
					{userInfo?.data[0]?.user_status}
				</p>
				<button
					onClick={myBioDataHandler}
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
					className="h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center  mt-3 "
				>
					My Biodata
				</button>
			</div>
			<div className="mt-6 overflow-x-hidden overflow-y-auto">
				{sidebarDetails.map((data, index) => (
					<OptionCart
						key={index}
						icon={data.icon}
						title={data.title}
						path={data.path}
					/>
				))}
			</div>
		</div>
	);
};

export default UserSidebar;
