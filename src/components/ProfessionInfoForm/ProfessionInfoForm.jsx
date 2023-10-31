/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import { occupationOptions } from "./professionInfoForm.constant";
import { Colors } from "../../constants/colors";
import UserContext from "../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { userServices } from "../../services/user";
import toast from "react-hot-toast";
import { getToken, removeToken } from "../../utils/cookies";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { useNavigate } from "react-router-dom";
import MultipleSelect from "../MultitpleSelect/MultipleSelect";
import { dataToMultiple, getDataFromMultipleInput } from "../../utils/form";
import { verifyToken } from "../../services/verifyToken";

const ProfessionInfoForm = ({ userForm, setUserForm }) => {
	const [occupation, setOccupation] = useState();
	const [income, setIncome] = useState("");
	const [occupationInfo, setOccupationInfo] = useState();
	const { userInfo, logOut } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};
	const { data: professionalInfo = null } = useQuery({
		queryKey: ["professional-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getOccupationInfoByUserId(
				userInfo?.data[0]?.id
			);
		},
	});

	useEffect(() => {
		verifyToken(
			userInfo?.data[0]?.id,
			logOut,
			"professional-info-verify-token"
		);
	}, [logOut, userInfo?.data]);

	useEffect(() => {
		if (professionalInfo?.data) {
			const { occupation, occupation_details, monthly_income } =
				professionalInfo.data;
			setOccupation(dataToMultiple(occupation));
			setOccupationInfo(occupation_details);
			setIncome(monthly_income);
		}
	}, [professionalInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		let professionalInfoData = {
			occupation: getDataFromMultipleInput(occupation),
			occupation_details: occupationInfo,
			monthly_income: income,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		console.log(professionalInfoData);

		try {
			if (professionalInfo?.success === true) {
				setLoading(true);
				const data = await userServices.updateOccupation(
					professionalInfoData,
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
				const data = await userServices.createOccupation(
					{ ...professionalInfoData, user_form: userForm },
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
			const errorMsg = error?.response?.data?.message || "Something Went wrong";
			toast.success(errorMsg, {
				position: "bottom-right",
				duration: 3000,
				style: { backgroundColor: "#FF0000", color: "#fff" },
			});

			//! for token error redirect to logout
			if (errorMsg.includes("You are not authorized")) {
				await logOut();
				removeToken();
				navigate("/");
			}
		}
	};
	return (
		<div>
			<FormTitle title="পেশাগত তথ্য" />
			<form onSubmit={submitHandler} action="">
				<Select
					title="পেশা "
					value={occupation}
					options={occupationOptions}
					setValue={setOccupation}
					required
				/>
				<MultipleSelect
					title="পেশা"
					options={occupationOptions}
					value={occupation}
					setValue={setOccupation}
					required
				/>
				<Textarea
					title="পেশার বিস্তারিত বিবরণ"
					value={occupationInfo}
					setValue={setOccupationInfo}
					subtitle=" আপনার কর্মস্থল কোথায়, আপনি কোন প্রতিষ্ঠানে কাজ করছেন, আপনার উপার্জন হালাল কি না ইত্যাদি লিখতে পারেন।"
					required
				/>
				<Input
					title="মাসিক আয়"
					type="number"
					value={income}
					setValue={setIncome}
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
						disabled={loading}
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

export default ProfessionInfoForm;
