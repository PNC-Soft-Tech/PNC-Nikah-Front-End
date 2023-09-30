/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BiSidebar } from "react-icons/bi";

import Form from "../../components/Form/Form";
import { ScrollToTop } from "../../constants/ScrolltoTop";
import Numbering from "../../components/Numbering/Numbering";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useEffect } from "react";

const EditBiodata = () => {
	const [userForm, setUserForm] = useState(1);
	const { userInfo } = useContext(UserContext);
	useEffect(() => {
		if (userInfo?.data[0]?.last_edited_timeline_index) {
			setUserForm(userInfo?.data[0]?.last_edited_timeline_index + 1);
		}
	}, [userInfo?.data]);
	return (
		<div className="flex flex-row ">
			<div className="w-[30%] mx-5">
				<Numbering setUserForm={setUserForm} userForm={userForm} />
			</div>
			<div className="w-[70%]">
				<Form setUserForm={setUserForm} userForm={userForm} />
			</div>
			<ScrollToTop />
			<BiSidebar />
		</div>
	);
};

export default EditBiodata;
