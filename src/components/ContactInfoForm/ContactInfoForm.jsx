/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import { Colors } from "../../constants/colors";
import { useQuery } from "@tanstack/react-query";
import { userServices } from "../../services/user";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useEffect } from "react";
import { getToken } from "../../utils/cookies";
import toast from "react-hot-toast";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const ContactInfoForm = ({ userForm, setUserForm }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [relation, setRelation] = useState("");
	const { userInfo, logOut } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const { data: generalInfo = null } = useQuery({
		queryKey: ["general-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getGeneralInfoByUserId(userInfo?.data[0]?.id);
		},
	});
	const gender = generalInfo?.data?.gender || "";

	const backButtonHandler = () => {
		if (userForm > 1) {
			setUserForm((prev) => prev - 1);
		}
	};
	const { data: contactInfo = null } = useQuery({
		queryKey: ["contact-info", userInfo?.data[0]?.id],
		queryFn: async () => {
			return await userServices.getContactByUserId(userInfo?.data[0]?.id);
		},
	});
	useEffect(() => {
		if (contactInfo?.data) {
			const { full_name, family_number, relation, bio_receiving_email } =
				contactInfo.data;
			setFullName(full_name);
			setPhone(family_number);
			setRelation(relation);
			setEmail(bio_receiving_email);
		}
	}, [contactInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		let contactInfoData = {
			full_name: fullName,
			family_number: phone,
			relation: relation,
			bio_receiving_email: email,
		};

		if (!getToken()?.token) {
			alert("Please logout and try again");
			return;
		}

		if (!userInfo?.data[0].id) {
			alert("Please login and try again");
			return;
		}

		console.log(contactInfoData);

		try {
			if (contactInfo?.success === true) {
				setLoading(true);
				const data = await userServices.updateContact(
					contactInfoData,
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
				const data = await userServices.createContact(
					{ ...contactInfoData, user_form: userForm },
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
			<FormTitle title="যোগাযোগ" />
			<form onSubmit={submitHandler} action="">
				{gender === "মহিলা" ? (
					<Input
						title="পাত্রীর নাম"
						required
						value={fullName}
						setValue={setFullName}
						subtitle="পূর্ণ নাম লিখুন"
					/>
				) : (
					gender === "পুরুষ" && (
						<Input
							title="পাত্রের নাম "
							required
							value={fullName}
							setValue={setFullName}
							subtitle="পূর্ণ নাম লিখুন"
						/>
					)
				)}

				<Input
					title="অভিভাবকের মোবাইল নাম্বার  "
					required
					value={phone}
					setValue={setPhone}
					subtitle="কেউ আপনার অভিভাবকের সাথে যোগাযোগ করতে চাইলে এই নাম্বারটি দেয়া হবে। এই নাম্বারে কল দিয়ে ভেরিফাই করার পর বায়োডাটা এপ্রুভ করা হবে। এখানে <b>বন্ধু, কলিগ, কাজিন বা পাত্রপাত্রীর নিজের নাম্বার </b>
        লিখলে বায়োডাটা স্থায়ীভাবে ব্যান করা হবে।"
				/>

				<Input
					title="অভিভাবকের সাথে সম্পর্ক "
					required
					value={relation}
					setValue={setRelation}
					subtitle="উক্ত অভিভাবক আপনার সম্পর্কে কি হয় তা লিখুন। যেমনঃ বাবা।"
				/>

				<Input
					title="বায়োডাটা গ্রহণের ই-মেইল "
					required
					value={email}
					setValue={setEmail}
					subtitle="অনাকাঙ্ক্ষিত ঘটনা এড়াতে, সম্ভব হলে অভিভাবকের মেইল এড্রেস লিখুন।"
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

export default ContactInfoForm;
