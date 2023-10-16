/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import { Colors } from "../../constants/colors";
import { getDateMonthYear } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../constants/ScrolltoTop";
import { format, parse } from "date-fns";
import { FaEye, FaRegHeart } from "react-icons/fa";
function formatHeight(height) {
	if (height === "") {
		return ""; // Handle empty input
	}

	const parts = height.toString().split(".");
	let feet = parts[0];
	let inches = parts[1] || "0";

	if (feet === "") {
		feet = "0";
	}

	// Define an array to map numeric digits to Bengali digits
	const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

	// Convert numeric digits to Bengali digits
	feet = feet
		.split("")
		.map((digit) => bengaliDigits[digit])
		.join("");
	inches = inches
		.split("")
		.map((digit) => bengaliDigits[digit])
		.join("");

	return `${feet}'${inches}"`;
}

function formatDate(dateStr) {
	// Parse the input date string (assuming it's in the format "9-1-1998")
	const parsedDate = parse(dateStr, "d-M-yyyy", new Date());

	// Format the parsed date as "9th Jan 1998"
	return format(parsedDate, "do MMM yyyy");
}
const BioData = ({ biodata }) => {
	const navigate = useNavigate();

	const bioDataHandler = () => {
		navigate(`/biodata/${biodata.user_id}`);
	};
	return (
		<div className="my-5 hover:shadow-2xl transition-all  duration-300 ease-in rounded-md border-2">
			<ScrollToTop />
			<div
				style={{
					backgroundColor: Colors.pncPrimaryColor,
				}}
				className="h-[200px] flex relative  flex-col justify-center rounded-t-md text-white"
			>
				<img
					className="w-16 h-16 mx-auto rounded-full "
					src={biodata?.gender === "মহিলা" ? female : male}
					alt=""
				/>
				<h4 className="my-2"> বায়োডাটা নং </h4>
				<h3>
					{biodata?.gender === "মহিলা" ? "PNCF-" : "PNCM-"}
					{biodata.user_id}
				</h3>
				<div className="flex absolute top-2 left-2">
					<FaEye className="w-6 h-6 mr-2" />
					{biodata?.views}
				</div>
				<div className=" absolute bottom-2 left-2 cursor-pointer">
					<FaRegHeart className="w-6 h-6 text-white" />
					{/* <FaHeart className="w-6 h-6 text-white" /> */}
				</div>
			</div>
			<div className="mx-2 mt-4">
				<table className="min-w-full divide-y divide-gray-200 border-0 border-gray-300">
					<tbody className="bg-white divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r border-t border-b">
								জন্মসন
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap border-b border-t">
								{/* {getDateMonthYear(biodata.date_of_birth)} */}
								{formatDate(getDateMonthYear(biodata.date_of_birth))}
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r  border-b">
								উচ্চতা{" "}
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b">
								<span>{biodata.height}</span>
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r border-b">
								গাত্রবর্ন{" "}
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b">
								{biodata.screen_color}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="my-4">
				<Button
					onClick={bioDataHandler}
					className=" rounded-3xl"
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
				>
					{" "}
					সম্পূর্ন বায়োডাটা{" "}
				</Button>
			</div>
		</div>
	);
};

export default BioData;
