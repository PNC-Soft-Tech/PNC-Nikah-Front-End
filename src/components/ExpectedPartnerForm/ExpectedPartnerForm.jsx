/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";

import {
	educationOptionsMultiple,
	financialOptionsMultiple,
	maritalStatusMultiple,
	professionMultiple,
	screenColorOptionsMultiple,
} from "./expectedPartnerForm.constant";

import "./expectedPartner.css";
import DoubleRangeSlider from "../DoubleRangeSlider/DoubleRangeSlider";
import MultipleSelect from "../MultitpleSelect/MultipleSelect";
import { useQuery } from "@tanstack/react-query";
import { BioDataServices } from "../../services/bioData";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";
import {
	dataToMultiple,
	dataToRange,
	getDataFromMultipleInput,
	getDataFromRange,
} from "../../utils/form";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { userServices } from "../../services/user";
import { useEffect } from "react";
import { getToken } from "../../utils/cookies";
import toast from "react-hot-toast";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const ExpectedPartnerForm = ({ userForm, setUserForm }) => {
	const [zilla, setZilla] = useState([]);
	const [screenColor, setScreenColor] = useState([]);
	const [height, setHeight] = useState({
		min: 5.0,
		max: 6.0,
	});

	const [educationExpected, setEducationExpected] = useState([]);
	const [age, setAge] = useState({
		min: 20,
		max: 30,
	});
	const [profession, setProfession] = useState([]);
	const [maritalStatus, setMaritalStatus] = useState([]);
	const [financial, setFinancial] = useState([]);
	const [expected, setExpected] = useState("");
	const { userInfo, logOut } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	console.log(dataToRange(getDataFromRange(height)), getDataFromRange(height));
	console.log(
		getDataFromMultipleInput(screenColor),
		dataToMultiple(getDataFromMultipleInput(screenColor))
	);

	const { data: districtsOptions = [] } = useQuery({
		queryKey: ["districts"],
		queryFn: async () => {
			return await BioDataServices.getAllDistricts("");
		},
	});
	const { data: expectedPartnerInfo = null } = useQuery({
		queryKey: ["contact-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getExpectedLifePartnerByUserId(
				userInfo?.data[0]?.id
			);
		},
	});
	useEffect(() => {
		if (expectedPartnerInfo?.data) {
			const {
				age,
				height,
				color,
				zilla,
				marital_status,
				expected_characteristics,
				educational_qualifications,
				occupation,
				economical_condition,
			} = expectedPartnerInfo.data;
			setAge(dataToRange(age));
			setHeight(dataToRange(height));
			setScreenColor(dataToMultiple(color));
			setZilla(dataToMultiple(zilla));
			setMaritalStatus(dataToMultiple(marital_status));
			setProfession(dataToMultiple(occupation));
			setFinancial(dataToMultiple(economical_condition));
			setExpected(expected_characteristics);
			setEducationExpected(dataToMultiple(educational_qualifications));
		}
	}, [expectedPartnerInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		let expectedPartnerInfoData = {
			age: getDataFromRange(age),
			color: getDataFromMultipleInput(screenColor),
			height: getDataFromRange(height),
			educational_qualifications: getDataFromMultipleInput(educationExpected),
			zilla: getDataFromMultipleInput(zilla),
			marital_status: getDataFromMultipleInput(maritalStatus),
			occupation: getDataFromMultipleInput(profession),
			economical_condition: getDataFromMultipleInput(financial),
			expected_characteristics: expected,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		console.log(expectedPartnerInfoData);

		try {
			if (expectedPartnerInfo?.success === true) {
				setLoading(true);
				const data = await userServices.updateExpectedLifePartner(
					expectedPartnerInfoData,
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
				const data = await userServices.createExpectedLifePartner(
					{ ...expectedPartnerInfoData, user_form: userForm },
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
			// await logOut();
			// navigate("/");
			console.log(error);
		}
	};

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};
	return (
		<div>
			<FormTitle title="প্রত্যাশিত জীবনসঙ্গী" />
			<form onSubmit={submitHandler} action="">
				<label className="text-left text-gray-500 mt-4 mb-5 font-bold block">
					বয়স
				</label>
				<DoubleRangeSlider value={age} setValue={setAge} />

				<MultipleSelect
					title="গাত্রবর্ণ"
					subtitle="নিজের মত লিখতে পারবেন পাশাপাশি একাধিক সিলেক্ট করতে পারবেন।"
					options={screenColorOptionsMultiple}
					value={screenColor}
					setValue={setScreenColor}
				/>
				<br />

				<DoubleRangeSlider
					value={height}
					setValue={setHeight}
					maxValue={7.0}
					minValue={4.5}
					step={0.1}
					title="উচ্চতা"
					subtitle="5.1 বোঝায় ৫ ফুট ১ ইঞ্চি "
				/>

				<MultipleSelect
					title="শিক্ষাগত যোগ্যতা "
					placeholder=""
					options={educationOptionsMultiple}
					value={educationExpected}
					setValue={setEducationExpected}
				/>
				<br />
				<MultipleSelect
					title="জেলা"
					placeholder=""
					options={districtsOptions}
					value={zilla}
					setValue={setZilla}
				/>
				<br />
				<MultipleSelect
					title="বৈবাহিক অবস্থা"
					placeholder=""
					options={maritalStatusMultiple}
					value={maritalStatus}
					setValue={setMaritalStatus}
				/>
				<br />
				<MultipleSelect
					title="পেশা"
					placeholder=""
					options={professionMultiple}
					value={profession}
					setValue={setProfession}
				/>
				<br />
				<MultipleSelect
					title="অর্থনৈতিক অবস্থা"
					placeholder=""
					options={financialOptionsMultiple}
					value={financial}
					setValue={setFinancial}
				/>
				<br />
				<Textarea
					value={expected}
					setValue={setExpected}
					required
					title="জীবনসঙ্গীর যেসব বৈশিষ্ট্য বা গুণাবলী প্রত্যাশা করেন"
					subtitle=" আপনার প্রত্যাশা বিস্তারিত লিখতে পারেন। কোন বিশেষ শর্ত থাকলে উল্লেখ করতে পারেন।"
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
						{loading ? <LoadingCircle /> : "Save & Next"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ExpectedPartnerForm;
