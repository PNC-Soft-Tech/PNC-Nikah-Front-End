/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Select from "../Select/Select";
import { Colors } from "../../constants/colors";
import { useQuery } from "@tanstack/react-query";
import { userServices } from "../../services/user";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getToken } from "../../utils/cookies";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const OngikarNamaForm = ({ userForm, setUserForm }) => {
	const [isAgree, setIsAgree] = useState("");
	const [isTrue, setIsTrue] = useState("");
	const [isFamilyKnow, setIsFamilyKnow] = useState("");
	const { userInfo, logOut } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const { data: ongikarNamaInfo = null } = useQuery({
		queryKey: ["professional-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getOngikarNamaByUserId(userInfo?.data[0]?.id);
		},
	});

	useEffect(() => {
		if (ongikarNamaInfo?.data) {
			const { is_family_know, isTrueData, isAgree } = ongikarNamaInfo.data;
			setIsAgree(isAgree);
			setIsTrue(isTrueData);
			setIsFamilyKnow(is_family_know);
		}
	}, [ongikarNamaInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		let ongikarNamaInfoData = {
			isAgree: isAgree,
			isTrueData: isTrue,
			is_family_know: isFamilyKnow,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		console.log(ongikarNamaInfoData);

		try {
			if (ongikarNamaInfo?.success === true) {
				setLoading(true);
				const data = await userServices.updateOngikarNama(
					ongikarNamaInfoData,
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
				const data = await userServices.createOngikarNama(
					{ ...ongikarNamaInfoData, user_form: userForm },
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

	const conditionOptions = [
		{
			value: "হ্যা",
		},
		{
			value: "না",
		},
	];
	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};
	return (
		<div>
			<FormTitle title="অঙ্গীকারনামা" />
			<form action="" onSubmit={submitHandler}>
				<Select
					required
					value={isFamilyKnow}
					setValue={setIsFamilyKnow}
					options={conditionOptions}
					title="OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন, তা আপনার অভিভাবক জানেন?"
				/>

				<Select
					required
					value={isTrue}
					setValue={setIsTrue}
					options={conditionOptions}
					title="আল্লাহ &#039;র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব সত্য?"
				/>

				<Select
					required
					value={isAgree}
					setValue={setIsAgree}
					options={conditionOptions}
					title="কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের দায়ভার OrdhekDeen.com কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?"
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

export default OngikarNamaForm;
