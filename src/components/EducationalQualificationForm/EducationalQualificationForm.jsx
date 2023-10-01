/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import {
	afterSscOptions,
	classType,
	deenStatusOptions,
	educationOptions,
	educationTypeOptions,
	group,
	hscOptions,
	qawmiEducationOptions,
	qawmiResult,
	result,
} from "./educationQualification.constant";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { userServices } from "../../services/user";
import { useEffect } from "react";
import { getToken } from "../../utils/cookies";
import toast from "react-hot-toast";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const EducationalQualificationForm = ({ setUserForm, userForm }) => {
	const [eduType, setEduType] = useState("");
	const [status, setStatus] = useState("");
	const [maxEdu, setMaxEdu] = useState("");
	const [selectedClass, setSelectedClass] = useState("");
	const [othersEdu, setOthersEdu] = useState("");
	const [sscPassYear, setSscPassYear] = useState("");
	const [sscGroup, setSscGroup] = useState("");
	const [sscResult, setSscResult] = useState("");
	const [hscRunning, setHscRunning] = useState("");
	const [hscPassYear, setHscPassYear] = useState("");
	const [hscGroup, setHscGroup] = useState("");
	const [hscResult, setHscResult] = useState("");
	const [diplomaInst, setDiplomaInst] = useState("");
	const [diplomaSub, setDiplomaSub] = useState("");
	const [diplomaYear, setDiplomaYear] = useState("");
	const [diplomaPassYear, setDiplomaPassYear] = useState("");
	const [afterSsc, setAfterSsc] = useState("");
	const [bscInst, setBscInst] = useState("");
	const [bscSub, setBscSub] = useState("");
	const [bscYear, setBscYear] = useState("");
	const [bscPassYear, setBscPassYear] = useState("");
	const [mscPassYear, setMscPassYear] = useState("");
	const [mscSub, setMscSub] = useState("");
	const [mscInst, setMscInst] = useState("");
	const [phdSub, setPhdSub] = useState("");
	const [phdInst, setPhdInst] = useState("");
	const [phdPassYear, setPhdPassYear] = useState("");
	const [ibtiInst, setIbtiInst] = useState("");
	const [ibtiPassYear, setIbtiPassYear] = useState("");
	const [ibtiResult, setIbtiResult] = useState("");
	const [mutawasInst, setMutawasInst] = useState("");
	const [mutawasResult, setMutawasResult] = useState("");
	const [mutawasPassYear, setMutawasPassYear] = useState("");
	const [sanabiyaInst, setSanaInst] = useState("");
	const [sanabiyaPassYear, setSanabiyaPassYear] = useState("");
	const [sanabiyaResult, setSanabiyaResult] = useState("");
	const [fozilatInst, setFozilatInst] = useState("");
	const [fozilatPassYear, setFozilatPassYear] = useState("");
	const [fozilatResult, setFozilatResult] = useState("");
	const [takmilInst, setTakmilInst] = useState("");
	const [takmilPassYear, setTakmilPassYear] = useState("");
	const [takmilResult, setTakmilResult] = useState("");
	const [takhassusInst, setTakhassusInst] = useState("");
	const [takhassusResult, setTakhassusResult] = useState("");
	const [takhassusPassYear, setTakhassusPassYear] = useState("");
	const [takhassusSub, setTakhassusSub] = useState("");
	const { userInfo } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const { data: educationalQualification = null } = useQuery({
		queryKey: ["educational-qualification", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getEducationalQualificationByUserId(
				userInfo?.data[0]?.id
			);
		},
	});

	console.log(educationalQualification);

	useEffect(() => {
		if (educationalQualification?.data) {
			const {
				education_medium,
				highest_edu_level,
				others_edu,
				before_ssc,
				deeni_edu,
				ssc_year,
				ssc_group,
				ssc_result,
				after_ssc_running,
				after_ssc_result,
				after_ssc_group,
				after_ssc_year,
				diploma_running_year,
				diploma_sub,
				diploma_inst,
				diploma_pass_year,
				hons_inst,
				hons_year,
				hons_sub,
				after_ssc_medium,
			} = educationalQualification.data;
			if (education_medium) {
				setEduType(education_medium);
			}
			if (highest_edu_level) {
				setMaxEdu(highest_edu_level);
			}
			if (others_edu) {
				setOthersEdu(others_edu);
			}
			if (before_ssc) {
				setSelectedClass(before_ssc);
			}
			if (deeni_edu) {
				setStatus(deeni_edu);
			}
			if (ssc_year) {
				setSscPassYear(ssc_year);
			}

			if (ssc_group) {
				setSscGroup(ssc_group);
			}

			if (after_ssc_running) {
				setHscRunning(after_ssc_running);
			}
			if (ssc_result) {
				setSscResult(ssc_result);
			}
			if (after_ssc_result) {
				setHscResult(after_ssc_result);
			}
			if (after_ssc_group) {
				setHscGroup(after_ssc_group);
			}
			if (after_ssc_year) {
				setHscPassYear(after_ssc_year);
			}
			if (diploma_running_year) {
				setDiplomaYear(diploma_running_year);
			}
			if (diploma_inst) {
				setDiplomaInst(diploma_inst);
			}
			if (diploma_sub) {
				setDiplomaSub(diploma_sub);
			}
			if (diploma_pass_year) {
				setDiplomaPassYear(diploma_pass_year);
			}
			if (hons_sub) {
				setBscSub(hons_sub);
			}

			if (hons_year) {
				setBscYear(hons_year);
			}

			if (hons_inst) {
				setBscInst(hons_inst);
			}
			if (after_ssc_medium) {
				setAfterSsc(after_ssc_medium);
			}
		}
	}, [educationalQualification?.data]);

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};
	const submitButtonHandler = async (e) => {
		e.preventDefault();
		let educationQualificationData = {
			education_medium: eduType,
			highest_edu_level: maxEdu,
			others_edu: othersEdu,
			deeni_edu: status,
		};
		// জেনারেল  এস.এস.সি'র নিচে
		if (
			maxEdu === "এস.এস.সি'র নিচে" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				before_ssc: selectedClass,
			};
		} else if (
			maxEdu === "এস.এস.সি" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				ssc_year: sscPassYear,
				ssc_group: sscGroup,
				ssc_result: sscResult,
				after_ssc_running: hscRunning,
			};
		} else if (
			maxEdu === "এইচ.এস.সি" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				ssc_year: sscPassYear,
				ssc_group: sscGroup,
				ssc_result: sscResult,
				after_ssc_result: hscResult,
				after_ssc_year: hscPassYear,
				after_ssc_group: hscGroup,
			};
		} else if (
			maxEdu === "ডিপ্লোমা চলমান" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				ssc_year: sscPassYear,
				ssc_group: sscGroup,
				ssc_result: sscResult,
				diploma_running_year: diplomaYear,
				diploma_inst: diplomaInst,
				diploma_sub: diplomaSub,
			};
		} else if (
			maxEdu === "ডিপ্লোমা" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				ssc_year: sscPassYear,
				ssc_group: sscGroup,
				ssc_result: sscResult,
				diploma_pass_year: diplomaPassYear,
				diploma_inst: diplomaInst,
				diploma_sub: diplomaSub,
			};
		} else if (
			maxEdu === "স্নাতক চলমান" &&
			afterSsc === "HSC" &&
			(eduType === "জেনারেল" || eduType === "আলিয়া")
		) {
			educationQualificationData = {
				...educationQualificationData,
				ssc_year: sscPassYear,
				ssc_group: sscGroup,
				ssc_result: sscResult,
				after_ssc_result: hscResult,
				after_ssc_year: hscPassYear,
				after_ssc_group: hscGroup,
				hons_inst: bscInst,
				hons_sub: bscSub,
				hons_year: bscYear,
				after_ssc_medium: afterSsc,
			};
		}

		try {
			if (educationalQualification?.success === true) {
				setLoading(true);
				const data = await userServices.updateEducationalQualification(
					educationQualificationData,
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
			} else {
				setLoading(true);
				const data = await userServices.createEducationalQualification(
					{ ...educationQualificationData, user_form: userForm },
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

			console.log(error);
		}
	};

	return (
		<div className="mt-5">
			<h3
				style={{ color: Colors.titleText }}
				className="text-2xl font-semibold mb-3"
			>
				শিক্ষাগত যোগ্যতা
			</h3>
			<hr />
			<form action="" onSubmit={submitButtonHandler}>
				<Select
					title="আপনার শিক্ষা মাধ্যম"
					value={eduType}
					setValue={setEduType}
					options={educationTypeOptions}
					required
				/>
				{eduType === "জেনারেল" || eduType === "আলিয়া" ? (
					<>
						<Select
							title=" সর্বোচ্চ শিক্ষাগত যোগ্যতা"
							value={maxEdu}
							setValue={setMaxEdu}
							options={educationOptions}
							required
						/>

						{maxEdu === "এস.এস.সি'র নিচে" ? (
							<Select
								title="আপনি কোন ক্লাস পর্যন্ত পড়াশুনা করেছেন?"
								value={selectedClass}
								setValue={setSelectedClass}
								options={classType}
								required
							/>
						) : maxEdu === "এস.এস.সি" ? (
							<>
								{" "}
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>
								<Select
									title=" এইচ.এস.সি / আলিম / সমমান কোন বর্ষে পড়ছেন ?"
									value={hscRunning}
									setValue={setHscRunning}
									options={hscOptions}
								/>
							</>
						) : maxEdu === "এইচ.এস.সি" ? (
							<>
								{" "}
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>
								<Input
									title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
									value={hscPassYear}
									setValue={setHscPassYear}
								/>
								<Select
									title="বিভাগ"
									value={hscGroup}
									setValue={setHscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={hscResult}
									setValue={setHscResult}
									options={result}
									required
								/>
							</>
						) : maxEdu === "ডিপ্লোমা চলমান" ? (
							<>
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>

								<Input
									title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
									value={diplomaSub}
									setValue={setDiplomaSub}
									placeholder="ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
								/>

								<Input
									title="শিক্ষাপ্রতিষ্ঠানের নাম"
									value={diplomaInst}
									setValue={setDiplomaInst}
									placeholder="ঢাকা পলিটেকনিক ইনস্টিটিউট"
								/>
								<Input
									title="  এখন কোন বর্ষে পড়ছেন?"
									value={diplomaYear}
									setValue={setDiplomaYear}
									placeholder=""
								/>
							</>
						) : maxEdu === "ডিপ্লোমা" ? (
							<>
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>

								<Input
									title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
									value={diplomaSub}
									setValue={setDiplomaSub}
									placeholder="ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
								/>

								<Input
									title="শিক্ষাপ্রতিষ্ঠানের নাম"
									value={diplomaInst}
									setValue={setDiplomaInst}
									placeholder="ঢাকা পলিটেকনিক ইনস্টিটিউট"
								/>
								<Input
									title="পাসের বছর "
									value={diplomaPassYear}
									setValue={setDiplomaPassYear}
									placeholder="২০১৬"
								/>
							</>
						) : maxEdu === "স্নাতক চলমান" ? (
							<>
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
									required
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>
								<Select
									title="SSC পরে কোন মাধ্যমে পড়াশুনা করেছেন? "
									value={afterSsc}
									setValue={setAfterSsc}
									options={afterSscOptions}
									required
								/>

								{afterSsc === "ডিপ্লোমা" ? (
									<>
										<Input
											title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
											value={diplomaSub}
											setValue={setDiplomaSub}
											placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
											required
										/>
										<Input
											title=" শিক্ষাপ্রতিষ্ঠানের নাম"
											value={diplomaInst}
											setValue={setDiplomaInst}
											placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
											required
										/>
										<Input
											title=" পাসের বছর  "
											value={diplomaPassYear}
											setValue={setDiplomaPassYear}
											placeholder=""
											required
										/>
									</>
								) : (
									<>
										<Input
											title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
											value={hscPassYear}
											setValue={setHscPassYear}
											required
										/>
										<Select
											title="বিভাগ"
											value={hscGroup}
											setValue={setHscGroup}
											options={group}
											required
										/>
										<Select
											title="ফলাফল"
											value={hscResult}
											setValue={setHscResult}
											options={result}
											required
										/>{" "}
									</>
								)}
								<Input
									title=" স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়"
									value={bscSub}
									setValue={setBscSub}
									placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
									required
								/>
								<Input
									title=" শিক্ষাপ্রতিষ্ঠানের নাম"
									value={bscInst}
									setValue={setBscInst}
									placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
									required
								/>
								<Input
									title="কোন বর্ষে পড়ছেন? "
									value={bscYear}
									setValue={setBscYear}
									placeholder=""
									required
								/>
							</>
						) : maxEdu === "স্নাতক" ? (
							<>
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
									required
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>
								<Select
									title="SSC পরে কোন মাধ্যমে পড়াশুনা করেছেন? "
									value={afterSsc}
									setValue={setAfterSsc}
									options={afterSscOptions}
									required
								/>

								{afterSsc === "ডিপ্লোমা" ? (
									<>
										<Input
											title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
											value={diplomaSub}
											setValue={setDiplomaSub}
											placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
											required
										/>
										<Input
											title=" শিক্ষাপ্রতিষ্ঠানের নাম"
											value={diplomaInst}
											setValue={setDiplomaInst}
											placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
											required
										/>
										<Input
											title=" পাসের বছর  "
											value={diplomaPassYear}
											setValue={setDiplomaPassYear}
											placeholder=""
											required
										/>
									</>
								) : (
									<>
										<Input
											title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
											value={hscPassYear}
											setValue={setHscPassYear}
											required
										/>
										<Select
											title="বিভাগ"
											value={hscGroup}
											setValue={setHscGroup}
											options={group}
											required
										/>
										<Select
											title="ফলাফল"
											value={hscResult}
											setValue={setHscResult}
											options={result}
											required
										/>{" "}
									</>
								)}
								<Input
									title=" স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়"
									value={bscSub}
									setValue={setBscSub}
									placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
									required
								/>
								<Input
									title=" শিক্ষাপ্রতিষ্ঠানের নাম"
									value={bscInst}
									setValue={setBscInst}
									placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
									required
								/>
								<Input
									title="পাসের সন "
									value={bscPassYear}
									setValue={setBscPassYear}
									placeholder="২০১৬"
									required
								/>
							</>
						) : maxEdu === "স্নাতকোত্তর" ? (
							<>
								<Input
									title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
									value={sscPassYear}
									setValue={setSscPassYear}
									required
								/>
								<Select
									title="বিভাগ"
									value={sscGroup}
									setValue={setSscGroup}
									options={group}
									required
								/>
								<Select
									title="ফলাফল"
									value={sscResult}
									setValue={setSscResult}
									options={result}
									required
								/>
								<Select
									title="SSC পরে কোন মাধ্যমে পড়াশুনা করেছেন? "
									value={afterSsc}
									setValue={setAfterSsc}
									options={afterSscOptions}
									required
								/>

								{afterSsc === "ডিপ্লোমা" ? (
									<>
										<Input
											title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
											value={diplomaSub}
											setValue={setDiplomaSub}
											placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
											required
										/>
										<Input
											title=" শিক্ষাপ্রতিষ্ঠানের নাম"
											value={diplomaInst}
											setValue={setDiplomaInst}
											placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
											required
										/>
										<Input
											title=" পাসের বছর  "
											value={diplomaPassYear}
											setValue={setDiplomaPassYear}
											placeholder=""
											required
										/>
									</>
								) : (
									<>
										<Input
											title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
											value={hscPassYear}
											setValue={setHscPassYear}
											required
										/>
										<Select
											title="বিভাগ"
											value={hscGroup}
											setValue={setHscGroup}
											options={group}
											required
										/>
										<Select
											title="ফলাফল"
											value={hscResult}
											setValue={setHscResult}
											options={result}
											required
										/>{" "}
									</>
								)}
								<Input
									title=" স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়"
									value={bscSub}
									setValue={setBscSub}
									placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
									required
								/>
								<Input
									title=" শিক্ষাপ্রতিষ্ঠানের নাম"
									value={bscInst}
									setValue={setBscInst}
									placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
									required
								/>
								<Input
									title="পাসের সন "
									value={bscPassYear}
									setValue={setBscPassYear}
									placeholder="২০১৬"
									required
								/>

								<Input
									title="স্নাতকোত্তর / কামিল পড়াশোনার বিষয়"
									value={mscSub}
									setValue={setMscSub}
									placeholder="এমএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
									required
								/>

								<Input
									title="শিক্ষাপ্রতিষ্ঠানের নাম"
									value={mscInst}
									setValue={setMscInst}
									placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
									required
								/>

								<Input
									title="পাসের সন"
									value={mscPassYear}
									setValue={setMscPassYear}
									placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
									required
								/>
							</>
						) : (
							maxEdu === "ডক্টরেট" && (
								<>
									<Input
										title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
										value={sscPassYear}
										setValue={setSscPassYear}
										required
									/>
									<Select
										title="বিভাগ"
										value={sscGroup}
										setValue={setSscGroup}
										options={group}
										required
									/>
									<Select
										title="ফলাফল"
										value={sscResult}
										setValue={setSscResult}
										options={result}
										required
									/>
									<Select
										title="SSC পরে কোন মাধ্যমে পড়াশুনা করেছেন? "
										value={afterSsc}
										setValue={setAfterSsc}
										options={afterSscOptions}
										required
									/>

									{afterSsc === "ডিপ্লোমা" ? (
										<>
											<Input
												title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
												value={diplomaSub}
												setValue={setDiplomaSub}
												placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
												required
											/>
											<Input
												title=" শিক্ষাপ্রতিষ্ঠানের নাম"
												value={diplomaInst}
												setValue={setDiplomaInst}
												placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
												required
											/>
											<Input
												title=" পাসের বছর  "
												value={diplomaPassYear}
												setValue={setDiplomaPassYear}
												placeholder=""
												required
											/>
										</>
									) : (
										<>
											<Input
												title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
												value={hscPassYear}
												setValue={setHscPassYear}
												required
											/>
											<Select
												title="বিভাগ"
												value={hscGroup}
												setValue={setHscGroup}
												options={group}
												required
											/>
											<Select
												title="ফলাফল"
												value={hscResult}
												setValue={setHscResult}
												options={result}
												required
											/>{" "}
										</>
									)}
									<Input
										title=" স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়"
										value={bscSub}
										setValue={setBscSub}
										placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
										required
									/>
									<Input
										title=" শিক্ষাপ্রতিষ্ঠানের নাম"
										value={bscInst}
										setValue={setBscInst}
										placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
										required
									/>
									<Input
										title="পাসের সন "
										value={bscPassYear}
										setValue={setBscPassYear}
										placeholder="২০১৬"
										required
									/>

									<Input
										title="স্নাতকোত্তর / কামিল পড়াশোনার বিষয়"
										value={mscSub}
										setValue={setMscSub}
										placeholder="এমএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
										required
									/>

									<Input
										title="শিক্ষাপ্রতিষ্ঠানের নাম"
										value={mscInst}
										setValue={setMscInst}
										placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
										required
									/>

									<Input
										title="পাসের সন"
										value={mscPassYear}
										setValue={setMscPassYear}
										placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
										required
									/>

									<Input
										title="ডক্টরেট অধ্যয়নের বিষয়"
										value={phdSub}
										setValue={setPhdSub}
										placeholder=""
										required
									/>

									<Input
										title="শিক্ষাপ্রতিষ্ঠানের নাম"
										value={phdInst}
										setValue={setPhdInst}
										placeholder=""
										required
									/>

									<Input
										title="পাসের সন"
										value={phdPassYear}
										setValue={setPhdPassYear}
										placeholder=""
										required
									/>
								</>
							)
						)}
					</>
				) : eduType === "কওমি" ? (
					<>
						<Select
							title=" সর্বোচ্চ শিক্ষাগত যোগ্যতা"
							value={maxEdu}
							setValue={setMaxEdu}
							options={qawmiEducationOptions}
							required
						/>

						{maxEdu === "প্রাথমিক দ্বীনি শিক্ষা" ? (
							<></>
						) : maxEdu === "ইবতিদাইয়্যাহ" ? (
							<>
								{" "}
								<Input
									title=" ইবতিদাইয়্যাহ কোন মাদ্রাসা থেকে পড়েছেন?"
									value={ibtiInst}
									required
									setValue={setIbtiInst}
								/>
								<Select
									title="ফলাফল"
									value={ibtiResult}
									setValue={setIbtiResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={ibtiPassYear}
									setValue={setIbtiPassYear}
									required
								/>
							</>
						) : maxEdu === "মুতাওয়াসসিতাহ" ? (
							<>
								{" "}
								<Input
									title="মুতাওয়াসসিতাহ কোন মাদ্রাসা থেকে পড়েছেন?"
									value={mutawasInst}
									setValue={setMutawasInst}
									required
								/>
								<Select
									title="ফলাফল"
									value={mutawasResult}
									setValue={setMutawasResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={mutawasPassYear}
									setValue={setMutawasPassYear}
									required
								/>
							</>
						) : maxEdu === "সানাবিয়া উলইয়া" ? (
							<>
								{" "}
								<Input
									title="সানাবিয়া উলইয়া কোন মাদ্রাসা থেকে পড়েছেন?"
									value={sanabiyaInst}
									setValue={setSanaInst}
									required
								/>
								<Select
									title="ফলাফল"
									value={sanabiyaResult}
									setValue={setSanabiyaResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={sanabiyaPassYear}
									setValue={setSanabiyaPassYear}
									required
								/>
							</>
						) : maxEdu === "ফযীলত" ? (
							<>
								{" "}
								<Input
									title="ফযীলত  কোন মাদ্রাসা থেকে পড়েছেন?"
									value={fozilatInst}
									setValue={setFozilatInst}
									required
								/>
								<Select
									title="ফলাফল"
									value={fozilatResult}
									setValue={setFozilatResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={fozilatPassYear}
									setValue={setFozilatPassYear}
									required
								/>
							</>
						) : maxEdu === "তাকমীল" ? (
							<>
								{" "}
								<Input
									title="তাকমীল কোন মাদ্রাসা থেকে পড়েছেন? "
									value={takmilInst}
									setValue={setTakmilInst}
									required
								/>
								<Select
									title="ফলাফল"
									value={takmilResult}
									setValue={setTakmilResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={takmilPassYear}
									setValue={setTakmilPassYear}
									required
								/>
							</>
						) : maxEdu === "তাখাসসুস" ? (
							<>
								{" "}
								<Input
									title="তাকমীল কোন মাদ্রাসা থেকে পড়েছেন? "
									value={takmilInst}
									setValue={setTakmilInst}
									required
								/>
								<Select
									title="ফলাফল"
									value={takmilResult}
									setValue={setTakmilResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={takmilPassYear}
									setValue={setTakmilPassYear}
									required
								/>
								<Input
									title="তাখাসসুস কোন মাদ্রাসা থেকে পড়েছেন? "
									value={takhassusInst}
									setValue={setTakhassusInst}
									required
								/>
								<Input
									title=" তাখাসসুসের বিষয়"
									value={takhassusSub}
									setValue={setTakhassusSub}
									required
								/>
								<Select
									title="ফলাফল"
									value={takhassusResult}
									setValue={setTakhassusResult}
									options={qawmiResult}
									required
								/>
								<Input
									title="পাসের সন"
									value={takhassusPassYear}
									setValue={setTakhassusPassYear}
									required
								/>
							</>
						) : (
							<></>
						)}
					</>
				) : (
					<></>
				)}

				<Textarea
					title="অন্যান্য শিক্ষাগত যোগ্যতা"
					value={othersEdu}
					setValue={setOthersEdu}
				/>
				<Select
					title="দ্বীনি শিক্ষাগত পদ্ববীসমূহ"
					value={status}
					setValue={setStatus}
					options={deenStatusOptions}
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
						disabled={loading}
						className=" text-xl rounded-3xl  px-5 text-white py-2 "
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

export default EducationalQualificationForm;
