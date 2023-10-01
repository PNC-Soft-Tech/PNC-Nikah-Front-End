/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import UserContext from "../../contexts/UserContext";
import { getToken } from "../../utils/cookies";

import {
	financialOptions,
	isFatherAliveOptions,
	quantityOptions,
} from "./familyInfoForm.constant";
import { Colors } from "../../constants/colors";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userServices } from "../../services/user";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const FamilyInfoForm = ({ setUserForm, userForm }) => {
	const [fatherName, setFatherName] = useState("");
	const [motherName, setMotherName] = useState("");
	const [isFatherAlive, setIsFatherAlive] = useState("");
	const [isMotherAlive, setIsMotherAlive] = useState("");
	const [numOfBrother, setNumOfBrother] = useState(0);
	const [numOfSister, setNumOfSister] = useState(0);
	const [brothersInfo, setBrothersInfo] = useState("");
	const [sistersInfo, setSistersInfo] = useState("");
	const [fatherJob, setFatherJob] = useState("");
	const [motherJob, setMotherJob] = useState("");
	const [economicInfo, setEconomicInfo] = useState("");
	const [economicStatus, setEconomicStatus] = useState("");
	const [uncleInfo, setUncleInfo] = useState("");
	const [familyDeen, setFamilyDeen] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { userInfo, logOut } = useContext(UserContext);
	const { data: familyInfo = null } = useQuery({
		queryKey: ["family-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getFamilyInfoByUserId(userInfo?.data[0]?.id);
		},
	});

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};

	useEffect(() => {
		if (familyInfo?.data) {
			const {
				father_name,
				father_occupation,
				isFatherAlive,
				mother_name,
				isMotherAlive,
				mother_occupation,
				number_of_brothers,
				brother_info,
				number_of_sisters,
				sister_info,
				uncle_info,
				family_eco_condition,
				eco_condition_type,
				family_deeni_info,
			} = familyInfo.data;
			setFatherName(father_name);
			setMotherName(mother_name);
			setFatherJob(father_occupation);
			setMotherJob(mother_occupation);
			setIsFatherAlive(isFatherAlive);
			setIsMotherAlive(isMotherAlive);
			setBrothersInfo(brother_info);
			setNumOfBrother(number_of_brothers);
			setNumOfSister(number_of_sisters);
			setFamilyDeen(family_deeni_info);
			setEconomicStatus(eco_condition_type);
			setEconomicInfo(family_eco_condition);
			setSistersInfo(sister_info);
			setUncleInfo(uncle_info);
		}
	}, [familyInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();
		
		const familyInfoData = {
			father_name: fatherName,
			father_occupation: fatherJob,
			isFatherAlive: isFatherAlive,
			mother_name: motherName,
			isMotherAlive: isMotherAlive,
			mother_occupation: motherJob,
			number_of_brothers: numOfBrother,
			brother_info: brothersInfo,
			number_of_sisters: numOfSister,
			sister_info: sistersInfo,
			uncle_info: uncleInfo,
			family_eco_condition: economicInfo,
			eco_condition_type: economicStatus,
			family_deeni_info: familyDeen,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		console.log(familyInfo);

		try {
			if (familyInfo?.success === true) {
				setLoading(true);
				const data = await userServices.updateFamilyInfo(
					familyInfoData,
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

				setLoading(false);

				// console.log(data);
			} else {
				setLoading(true);
				const data = await userServices.createFamilyInfo(
					{ ...familyInfoData, user_form: userForm },
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
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			await logOut();
			navigate("/");
			console.log(error);
		}
	};

	console.log(numOfBrother, numOfSister);

	return (
		<div>
			<FormTitle title="পারিবারিক তথ্য" />
			<form action="" onSubmit={submitHandler}>
				<Input
					title="পিতার নাম"
					subtitle="শুধুমাত্র কর্তৃপক্ষের জন্য"
					value={fatherName}
					setValue={setFatherName}
					required
				/>
				<Select
					title="আপনার পিতা কি জীবিত?"
					value={isFatherAlive}
					setValue={setIsFatherAlive}
					options={isFatherAliveOptions}
					required
				/>

				<Input
					title="পিতার পেশার বিবরণ"
					subtitle="চাকরীজীবি হলে প্রতিষ্ঠানের ধরণ এবং পদবী, আর ব্যবসায়ী হলে কী ধরণের ব্যবসা করেন/করতেন ইত্যাদি বিস্তারিত লিখবেন।"
					value={fatherJob}
					setValue={setFatherJob}
					required
				/>

				<Input
					title="মাতার নাম "
					subtitle="শুধুমাত্র কর্তৃপক্ষের জন্য"
					value={motherName}
					setValue={setMotherName}
					required
				/>
				<Select
					title="আপনার মাতা কি জীবিত?"
					value={isMotherAlive}
					setValue={setIsMotherAlive}
					options={isFatherAliveOptions}
					required
				/>

				<Input
					title="মাতার পেশার বিবরণ"
					value={motherJob}
					setValue={setMotherJob}
					required
				/>
				<Select
					title="আপনার কতজন ভাই আছে?"
					value={numOfBrother}
					setValue={setNumOfBrother}
					options={quantityOptions}
					required
				/>

				<Textarea
					title="ভাইদের তথ্য"
					subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
					value={brothersInfo}
					setValue={setBrothersInfo}
					required
				/>
				<Select
					title="আপনার কতজন বোন আছে?"
					value={numOfSister}
					setValue={setNumOfSister}
					options={quantityOptions}
					required
				/>
				<Textarea
					title="বোনদের তথ্য "
					subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
					value={sistersInfo}
					setValue={setSistersInfo}
					required
				/>

				<Textarea
					title="চাচা মামাদের পেশা "
					subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
					value={uncleInfo}
					setValue={setUncleInfo}
					required
				/>

				<Select
					title="পারিবারিক অর্থনৈতিক অবস্থা "
					value={economicStatus}
					setValue={setEconomicStatus}
					options={financialOptions}
					required
				/>

				<Textarea
					title="অর্থনৈতিক অবস্থার বর্ণনা "
					value={economicInfo}
					setValue={setEconomicInfo}
					required
				/>
				<Textarea
					title="পারিবারিক দ্বীনি পরিবেশ কেমন?"
					value={familyDeen}
					setValue={setFamilyDeen}
					required
				/>
				<div className="flex items-center justify-between my-5">
					<button
						type="button"
						onClick={backButtonHandler}
						className="px-5 py-2 text-xl text-white bg-gray-700 rounded-3xl"
					>
						Back
					</button>
					<button
						type="submit"
						className="px-5 py-2 text-xl text-white rounded-3xl"
						style={{
							background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight})`,
						}}
					>
						{loading ? <LoadingCircle /> : "Save & Next"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FamilyInfoForm;
