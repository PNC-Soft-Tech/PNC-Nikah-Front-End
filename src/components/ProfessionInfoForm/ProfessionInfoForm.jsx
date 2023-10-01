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
import { getToken } from "../../utils/cookies";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const ProfessionInfoForm = ({ userForm, setUserForm }) => {
	const [occupation, setOccupation] = useState();
	const [income, setIncome] = useState("");
	const [occupationInfo, setOccupationInfo] = useState();
	const { userInfo, logOut } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

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
		if (professionalInfo?.data) {
			const { occupation, occupation_details, monthly_income } =
				professionalInfo.data;
			setOccupation(occupation);
			setOccupationInfo(occupation_details);
			setIncome(monthly_income);
		}
	}, [professionalInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		let professionalInfoData = {
			occupation,
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
			// await logOut();
			// navigate("/");
			console.log(error);
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

				<div className="flex items-center my-5 justify-between">
					<button
						type="button"
						onClick={backButtonHandler}
						className="bg-gray-700 text-xl  px-5 text-white py-2  rounded-3xl"
					>
						Back
					</button>
					<button
						disabled={loading}
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

export default ProfessionInfoForm;