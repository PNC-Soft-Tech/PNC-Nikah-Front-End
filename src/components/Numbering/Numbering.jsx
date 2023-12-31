/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the CSS for styling
import { FaCheck } from "react-icons/fa";
import { Colors } from "../../constants/colors";
import UserContext from "../../contexts/UserContext";

const Numbering = ({ setUserForm, userForm }) => {
	const { userInfo } = useContext(UserContext);

	const lastEditedIndex = userInfo?.data[0]?.last_edited_timeline_index || 1;
	const editedTimelineIndex = userInfo?.data[0]?.edited_timeline_index || 1;
	console.log("Numbering", userInfo);

	const titles = [
		"সাধারণ তথ্য",
		"ঠিকানা",
		"শিক্ষাগত যোগ্যতা",
		"পারিবারিক তথ্য",
		"ব্যাক্তিগত তথ্য ",
		"পেশাগত তথ্য",
		"বিবাহ সম্পর্কিত তথ্য ",
		"প্রত্যাশিত জীবনসঙ্গী",
		"অঙ্গীকারনামা",
		"যোগাযোগ ",
	];
	const clickableICon = (index) => {
		if (index <= editedTimelineIndex + 1) {
			setUserForm(index);
		}
	};
	return (
		<VerticalTimeline lineColor="green" className="" layout="1-column-right">
			{titles.map((title, index) => (
				<VerticalTimelineElement
					lineColor="#000"
					key={index}
					contentStyle={{ color: Colors.titleText }}
					contentArrowStyle={{}}
					iconOnClick={() => clickableICon(index + 1)}
					iconStyle={{
						background:
							index + 1 === userForm
								? "purple"
								: index + 1 <= editedTimelineIndex
								? "green"
								: Colors.pncPrimaryColor,
						color: "#fff",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: `${
							index <= editedTimelineIndex + 1 ? "pointer" : "not-allowed"
						}`,
					}}
					icon={
						index + 1 <= userForm ? (
							<div className="flex p-1 justify-center  items-center">
								<FaCheck className="w-3 h-3 " style={{ marginTop: "2px" }} />
							</div>
						) : (
							<span style={{ fontSize: "14px", fontWeight: "bold" }}>
								{index + 1}
							</span>
						)
					}
				>
					<div className=" h-2 w-[170px] mb-2  px-2 pt-2 flex content-center self-center  ">
						<h3 className="  " style={{ fontSize: "17px" }}>
							{title}
						</h3>
					</div>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

export default Numbering;
