/* eslint-disable no-mixed-spaces-and-tabs */
import BioContext from "../../contexts/BioContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../../contexts/UserContext";
import { Toast } from "../../utils/toast";
import BkashCreatePaymentAPICall from "../../services/bkash";
import { convertToBengaliNumerals } from "../../utils/weight";
import { getToken, removeToken } from "../../utils/cookies";
import { BioChoiceDataServices } from "../../services/bioChoiceData";
import { userServices } from "../../services/user";
import { getErrorMessage } from "../../utils/error";
const ContactInfo = () => {
	const [displayText, setDisplayText] = useState(false);
	const { bio } = useContext(BioContext);
	const { userInfo, logOut } = useContext(UserContext);
	const contact = bio?.contact || null;
	const generalInfo = bio?.generalInfo || null;
	const points = Number(userInfo?.data[0]?.points);
	// console.log({ points });
	const navigate = useNavigate();
	useEffect(() => {
		if (displayText) {
			const timeout = setTimeout(() => {
				// setDisplayText(false);
			}, 10000); // 10 seconds timeout
			return () => clearTimeout(timeout);
		}
	}, [displayText]);

	const comHandler = () => {
		if (!userInfo?.data[0]?.id) {
			Toast.errorToast("Please,Login first");
			return;
		}

		Swal.fire({
			title: "আপনি কি তথ্য দেখতে চান?",
			text: `যোগাযোগ তথ্য দেখতে আপনার ৩০ পয়েন্ট খরচ হবে 
			। ${
				points >= 30
					? convertToBengaliNumerals((points - 30).toString()) +
					  " অবশিষ্ট থাকবে"
					: "আপনার আরও " +
					  convertToBengaliNumerals((30 - points).toString()) +
					  " পয়েন্ট লাগবে"
			}`,
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Ok",
		}).then(async (result) => {
			if (!result.isConfirmed) {
				return;
			}

			try {
				//? check first step
				const token = getToken().token;
				const bioId = generalInfo?.user_id;

				const checkFirst =
					await BioChoiceDataServices.checkBioChoiceDataFirstStep(bioId, token);
				const status = checkFirst?.status;
				if (checkFirst?.count > 0) {
					if (status === "Approved") {
						Toast.successToast("আপনার প্রথম পদক্ষেপ সম্পূর্ন হয়েছে।");
						return;
					} else if (status === "Rejected") {
						Toast.successToast(
							"দুংক্ষিত ,আপনি প্রতাক্ষিত হয়েছেন এই বায়োডাটা  থেকে।"
						);
						return;
					} else {
						Toast.successToast(
							"দুংক্ষিত ,আপনি পেন্ডিং  আছেন এই বায়োডাটা  থেকে।"
						);
						return;
					}
				}

				const checkSecond =
					await BioChoiceDataServices.checkBioChoiceDataSecondStep(
						bioId,
						token
					);

				if (checkSecond?.count > 0) {
					const payment_status = checkSecond?.payment_status;
					const refund_status = checkSecond?.refund_status;

					if (payment_status === "Completed" && refund_status !== "refunded") {
						Toast.successToast("দুংক্ষিত ,আপনি এই বায়োডাটা ইতিমধ্যে কিনছেন");
						return;
					}
					if (payment_status === "Completed" && refund_status === "refunded") {
						Toast.successToast(
							"দুংক্ষিত ,আপনি এই বায়োডাটার ইতিমধ্যে প্রথম পদক্ষেপ  কিনছেন,\n আপনি দ্বিতীয় পদক্ষেপ এর জন্য টাকা পরিশোধ করুন "
						);
						return;
					}
				}
			} catch (error) {
				let msg = error?.response?.data?.message || error?.message;
				Toast.errorToast(msg);
			}

			if (result.isConfirmed && points < 30) {
				setDisplayText(true);
			} else if (result.isConfirmed) {
				navigate(`/send-form/${bio?.generalInfo?.user_id}`);
			}
		});
	};

	const buyWithBkashHandler = async (value, bioId) => {
		let response;
		// ? verification check
		try {
			response = await userServices.verifyToken(getToken()?.token);
			console.log("navbar-verify-token~", response);
			const data = response?.data;
			const user_id = userInfo?.data[0]?.id;

			if (data?.user_id !== user_id) {
				await logOut();
				removeToken();
				Toast.errorToast("You are not authorized");
				navigate("/login");
			}
		} catch (error) {
			console.error("navbar-verify-token~", error);
			let msg = getErrorMessage(error);
			Toast.errorToast(msg);
			await logOut();
			removeToken();
			navigate("/login");
		}

		// ? bkash payment api call
		const amount = parseInt(value);
		if (isNaN(amount) || +amount <= 0) {
			alert("Please enter a valid amount.");
		} else if (response?.success === true) {
			BkashCreatePaymentAPICall(amount, bioId);
		}
	};

	return (
		<div className="single-bio-contact-info rounded shadow">
			<h5 className="card-title text-center text-2xl my-3">যোগাযোগ</h5>
			<div className="paid-contact-info">
				<table className="table-auto w-full">
					<thead>
						<tr className="border-b border-t">
							<td className="px-4 py-2 text-left  w-1/2">
								{" "}
								{generalInfo?.gender === "মহিলা" ||
								generalInfo?.bio_type === "পাত্রীর বায়োডাটা"
									? "পাত্রীর নাম"
									: "পাত্রের নাম"}{" "}
							</td>
							<td className="px-4 py-2 text-left  w-1/2 border-l">
								{contact?.full_name}
							</td>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b">
							<td className="px-4 py-2 text-left  w-1/2">
								অভিভাবকের মোবাইল নাম্বার
							</td>
							<td className="px-4 py-2 text-left  w-1/2 border-l">
								{contact?.family_number}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2 text-left  w-1/2">
								অভিভাবকের সাথে সম্পর্ক
							</td>
							<td className="px-4 py-2 text-left  border-l">
								{contact?.relation}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex justify-center mt-5">
					<button className="bio-report-btn bg-red-800 text-white py-2 px-4 rounded w-93">
						রিপোর্ট করুন
					</button>
				</div>
			</div>
			<div className="pnc-bio-hidden">
				<h4 className="text-center my-4">
					এই বায়োডাটাটি হাইড অবস্থায় আছে। অর্থাৎ এই মুহুর্তে তিনি কোনো প্রস্তাব
					পেতে আগ্রহী নয়। তাই এখন এই বায়োডাটার যোগাযোগ তথ্য দেখা যাবে না।
				</h4>
			</div>
			<div className="ask-contact-info">
				<h4 className="text-center my-4">
					সতর্কতা - বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্থানীয়ভাবে খোঁজ নিয়ে
					বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
				</h4>
				<h2 className="text-center text-2xl my-5">
					এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কানেকশন খরচ
					হবে।
				</h2>
				<div className="flex justify-center flex-col items-center ">
					{displayText ? (
						<div className="pb-5">
							<p className="text-xl mb-2">আপনার একাউন্টে কোনো কানেকশন নেই!</p>
							<button
								className="bg-green-800 px-2 py-2 rounded-md hover:bg-green-900 text-white"
								onClick={() =>
									buyWithBkashHandler(30 - points, generalInfo?.user_id)
								}
							>
								{convertToBengaliNumerals((30 - points).toString())} পয়েন্ট
								কিনুন
							</button>
						</div>
					) : (
						<button
							onClick={comHandler}
							className="contact-bio-btn bg-blue-500 text-white py-2 px-4 mb-5 rounded w-93"
						>
							যোগাযোগের তথ্য দেখুন
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
