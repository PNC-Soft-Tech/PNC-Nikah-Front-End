/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";

import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import { Colors } from "../../constants/colors";
import FormTitle from "../FormTitle/FormTitle";
import {
	bioDataTypes,
	bloodGroup,
	genderOptions,
	heights,
	maritalStatus,
	nationalities,
	screenColors,
} from "./generalInfoForm.constant";
import { userServices } from "../../services/user";
import { BioDataServices } from "../../services/bioData";
import UserContext from "../../contexts/UserContext";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getDateMonthYear, getYearMonthDate } from "../../utils/date";
import { getToken } from "../../utils/cookies";

const GeneralInfoForm = ({ userForm, setUserForm }) => {
	const { userInfo } = useContext(UserContext);
	const [bioType, setBioType] = useState("");
	const [status, setStatus] = useState("");
	const [dob, setDob] = useState("");
	const [height, setHeight] = useState("");
	const [color, setColor] = useState("");
	const [weight, setWeight] = useState("৫০");
	const [blood, setBlood] = useState("");
	const [nationality, setNationality] = useState("বাংলাদেশী");
	const [gender, setGender] = useState("");
	const [filteredMaritalStatus, setFilteredMaritalStatus] =
		useState(maritalStatus);

	const { data: generalInfo = null } = useQuery({
		queryKey: ["general-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getGeneralInfoByUserId(userInfo?.data[0]?.id);
		},
	});

	useEffect(() => {
		console.log(generalInfo?.data);
		if (generalInfo?.data) {
			const {
				gender,
				bio_type,
				date_of_birth,
				height,
				nationality,
				screen_color,
				status,
				weight,
				blood_group,
			} = generalInfo.data;

			setGender(gender);
			setBioType(bio_type);
			setStatus(status);
			setBlood(blood_group);
			setDob(getYearMonthDate(date_of_birth));
			setNationality(nationality);
			setHeight(height);
			setWeight(weight);
			setColor(screen_color);
		}
	}, [generalInfo]);

	// console.log(userInfo?.data[0]?.id);

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};

	useEffect(() => {
		if (bioType === "পাত্রের বায়োডাটা") {
			setGender("পুরুষ");
		} else if (bioType === "পাত্রীর বায়োডাটা") {
			setGender("মহিলা");
		}

		if (gender === "পুরুষ") {
			setFilteredMaritalStatus([
				{ value: "অবিবাহিত" },
				{ value: "বিবাহিত" },
				{ value: "ডিভোর্সড" },
				{ value: "বিপত্নীক" },
			]);
		} else if (gender === "মহিলা") {
			setFilteredMaritalStatus([
				{ value: "অবিবাহিত" },
				{ value: "বিবাহিত" },
				{ value: "ডিভোর্সড" },
				{ value: "বিধবা" },
			]);
		}
	}, [bioType, gender]);

	const submitGeneralFormHandler = async (event) => {
		event.preventDefault();

		const formData = {
			bio_type: bioType,
			status: status,
			date_of_birth: dob,
			height: height,
			screen_color: color,
			weight: weight,
			blood_group: blood,
			nationality: nationality,
			gender: gender,
			user_id: userInfo?.data[0]?.id,
			isMarriageDone: false,
			isFeatured: false,
			isFbPosted: false,
			views_count: 0,
			purchases_count: 0,
			user_form: userForm,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		try {
			if (generalInfo?.success) {
				const data = await userServices.updateGeneralInfo(
					formData,
					getToken().token
				);

				console.log(getToken()?.token);

				if (data.success) {
					toast.success("আপনার তথ্য আপডেট  করা হয়েছে ", {
						position: "bottom-right",
						duration: 3000,
						style: { backgroundColor: "green", color: "#fff" },
					});
					setUserForm((prev) => prev + 1);
				}

				// console.log(data);
			} else {
				const data = await BioDataServices.createGeneralInfo(
					formData,
					getToken().token
				);

				console.log(data);

				if (data.success) {
					toast.success("আপনার তথ্য সেভ করা হয়েছে ", {
						position: "bottom-right",
						duration: 3000,
						style: { backgroundColor: "green", color: "#fff" },
					});
					setUserForm((prev) => prev + 1);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(tokenInfo);

	return (
		<div className="container mx-auto mt-5">
			<FormTitle title="সাধারন তথ্য" />
			<form onSubmit={submitGeneralFormHandler}>
				<Select
					title="বায়োডাটার ধরণ"
					options={bioDataTypes}
					value={bioType}
					setValue={setBioType}
					required
				/>
				<Select
					title="লিঙ্গ"
					options={genderOptions}
					value={gender}
					setValue={setGender}
					required
				/>

				<Select
					title="বৈবাহিক অবস্থা "
					required
					value={status}
					setValue={setStatus}
					options={filteredMaritalStatus}
				/>

				<Input
					title={"জন্মসন "}
					value={dob}
					setValue={setDob}
					required
					type="date"
				/>

				<Select
					title="উচ্চতা "
					required
					value={height}
					setValue={setHeight}
					options={heights}
				/>

				<Select
					title="গাত্রবর্ণ"
					required
					value={color}
					setValue={setColor}
					options={screenColors}
				/>

				<Input
					title={"ওজন (KG) "}
					value={weight}
					setValue={setWeight}
					required
					type="text"
					placeholder="৫০"
					subtitle="বাংলা অংকে লিখুন,যেমনঃ ৫০,৫৫,৪২...।"
				/>

				<Select
					title="রক্তের গ্রুপ "
					required
					value={blood}
					setValue={setBlood}
					options={bloodGroup}
				/>
				<Select
					title="জাতীয়তা"
					required
					value={nationality}
					setValue={setNationality}
					options={nationalities}
				/>

				<div className="flex items-center my-5 justify-between">
					<button
						type="button"
						onClick={backButtonHandler}
						className="bg-gray-700 text-xl  px-5 text-white py-2  rounded-3xl"
					>
						Back
					</button>
					<button
						type="submit"
						className="text-xl  px-5 text-white py-2 rounded-3xl"
						style={{
							background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight})`,
						}}
					>
						Save & Next
					</button>
				</div>
			</form>
		</div>
	);
};

export default GeneralInfoForm;
