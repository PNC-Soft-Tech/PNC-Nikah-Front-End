import "./MyPurchases.css";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrash, FaInfo } from "react-icons/fa";
import { BioChoiceDataServices } from "../../services/bioChoiceData";
import { getToken } from "../../utils/cookies";
import { MdFeedback } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { FeedbackModal } from "../../components/FeedbackModal/FeedbackModal";
import { BioDetailsModal } from "../../components/BioDetailsModal/BioDetailsModal";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { PayDetailsModal } from "../../components/PayDetailsModal/PayDetailsModal";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
const MyPurchases = () => {
	const { userInfo } = useContext(UserContext);
	const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
	const [bioDetailsModal, setBioDetailsModal] = useState(false);
	const [payDetailsModal, setPayBioDetailsModal] = useState(false);
	const [qA, setQa] = useState('"');
	const [feedback, setFeedback] = useState("");
	const navigate = useNavigate();

	const {
		data: bioChoiceFirstStep,
		isLoading: bioChoiceFirstStepLoading,
		refetch: bioChoiceFirstStepRefetch,
	} = useQuery({
		queryKey: ["bio-choice-data", "first-step"],
		queryFn: async () => {
			return await BioChoiceDataServices.getBioChoiceDataFirstStep(
				getToken().token
			);
		},
	});

	const {
		data: bioChoiceSecondStep,
		isLoading: bioChoiceSecondStepLoading,
		refetch: bioChoiceSecondStepRefetch,
	} = useQuery({
		queryKey: ["bio-choice-data", "second-step"],
		queryFn: async () => {
			return await BioChoiceDataServices.getBioChoiceDataSecondStep(
				getToken().token
			);
		},
	});
	const bioDetailsOpenModalHandler = (text) => {
		setQa(text);
		setBioDetailsModal(true);
	};

	const feedbackDetailsModalHandler = (item) => {
		setIsFeedbackDialogOpen(true);
		setFeedback(item);
	};

	const payButtonHandler = () => {
		const points = userInfo?.data[0]?.points;

		console.log(points);
	};

	const viewBioIdHandler = (bioId) => {
		navigate(`/biodata/${bioId}`);
	};
	console.log("bio-choice-second-step~", bioChoiceSecondStep);
	console.log("bio-choice-first-step~", bioChoiceFirstStep);

	return (
		<>
			<div className="py-12 mx-auto ">
				<div className="">
					{/*<!-- End of Left Sidebar -->*/}
					<div className="col right-sidebar-main my-favs">
						<div className="w-auto border-t-2 rounded shadow my-favs-info">
							<h5 className="mt-3 text-2xl text-center card-title">
								আমার শেয়ার করা বায়োডাটার অবস্থা (১ম স্টেপ)
							</h5>
							<h6 className="py-4 text-xs">
								প্রথম ধাপে আপনার নিজের বায়োডাটা যেসকল পাত্র/পাত্রীর সাথে শেয়ার
								করেছেন তাদের তালিকা,ফিডব্যাক ও অবস্থা
							</h6>
							<div className="overflow-x-auto">
								<table className="w-full table-auto">
									<thead>
										<tr className="border-t border-b">
											<th className="px-4 py-2 text-center w-1/10">SL</th>
											<th className="px-4 py-2 text-center w-1/10">
												বায়োডাটা নং
											</th>
											<th className="px-4 py-2 text-center w-1/10">
												অ্যাড্রেস
											</th>
											<th className="px-4 py-2 text-center w-1/10">
												স্ট্যাটাস
											</th>
											<th className="px-4 py-2 text-center w-1/10">
												Bio Details
											</th>
											<th className="px-4 py-2 text-center w-1/10">ফিডব্যাক</th>
											<th className="px-4 py-2 text-center w-1/10">
												অ্যাপ্রুভাল রেট
											</th>
											<th className="px-4 py-2 text-center w-1/10">
												রিজেকশন রেট
											</th>
											<th className="px-4 py-2 text-center w-1/10">
												পেইন্ডিং সংখ্যা
											</th>
											<th className="px-4 py-2 text-center w-1/10">অপশন</th>
										</tr>
									</thead>
									<tbody>
										{bioChoiceFirstStepLoading ? (
											<LoadingCircle />
										) : (
											bioChoiceFirstStep?.data?.length > 0 &&
											bioChoiceFirstStep?.data?.map((item, index) => {
												return (
													<tr key={index} className="border-b">
														<td className="px-4 py-2 text-center border-l w-1/10">
															{index + 1}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.bio_id}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.city},{item?.division}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.status}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															<div
																onClick={() =>
																	bioDetailsOpenModalHandler(item?.bio_details)
																}
																className="flex items-center justify-center cursor-pointer"
															>
																<FaInfo color="gray" size={22} />
															</div>
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															<div
																onClick={() =>
																	feedbackDetailsModalHandler(item?.feedback)
																}
																className="flex items-center justify-center cursor-pointer"
															>
																<MdFeedback color="gray" size={22} />
															</div>
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{(item?.approval_rate * 1).toFixed(2)}%
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{(item?.rejection_rate * 1).toFixed(2)}%
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.pending_count}
														</td>
														<td className="flex items-center px-4 py-2 text-center border-l w-1/10">
															{item?.status === "Accepted" && (
																<>
																	<Button
																		onClick={() =>
																			payButtonHandler(item?.bio_id)
																		}
																		size="xs"
																		className="mr-2"
																		style={{
																			background: `linear-gradient(to right,${Colors.lnRight},${Colors.lnLeft} )`,
																		}}
																	>
																		Pay
																	</Button>
																	<AiFillQuestionCircle
																		onClick={() => setPayBioDetailsModal(true)}
																		className="w-6 h-6 mr-2 text-red-700 cursor-pointer hover:text-red-900"
																	/>
																</>
															)}
															<Button
																onClick={() => viewBioIdHandler(item?.bio_id)}
																color="green"
																size="xs"
																className=""
															>
																<FaEye />
															</Button>
														</td>
													</tr>
												);
											})
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="h-5 lg:h-12"></div>
					<div className="col right-sidebar-main my-favs">
						<div className="w-auto border-t-2 rounded shadow my-favs-info">
							<h5 className="mt-3 text-2xl text-center card-title">
								আমার ফাইনাল বায়োডাটা ক্রয়সমূহ (২য় স্টেপ)
							</h5>
							<h6 className="py-4 text-xs">
								প্রথম ধাপে আপনার নিজের বায়োডাটা পাত্র/পাত্রীর সাথে শেয়ার করার পর
								আপ্রুভাল পেয়ে ২য় ধাপে অভিভাবকের কনটাক্ট নাম্বার যাদের
								পেয়েছেন,তাদের তালিকা
							</h6>
							<div className="overflow-x-auto">
								<table className="w-full table-auto">
									<thead>
										<tr className="border-t border-b">
											<th className="w-1/12 px-4 py-2 text-center">SL</th>
											<th className="w-1/12 px-4 py-2 text-center">
												বায়োডাটা নং
											</th>
											<th className="w-1/12 px-4 py-2 text-center">Name</th>
											<th className="w-1/12 px-4 py-2 text-center">
												জন্ম তারিখ
											</th>
											<th className="w-1/12 px-4 py-2 text-center">ঠিকানা</th>
											<th className="w-1/12 px-4 py-2 text-center">
												যোগাযোগের নাম্বার
											</th>
											<th className="w-1/12 px-4 py-2 text-center">সম্পর্ক</th>
											<th className="w-1/12 px-4 py-2 text-center">
												টোটাল পেয়েছে
											</th>
											<th className="w-1/12 px-4 py-2 text-center">
												অ্যাপ্রুভাল রেট
											</th>
											<th className="w-1/12 px-4 py-2 text-center">
												রিজেকশন রেট
											</th>
											<th className="w-1/12 px-4 py-2 text-center">
												পেইন্ডিং সংখ্যা
											</th>
											<th className="w-1/12 px-4 py-2 text-center">অপশন</th>
										</tr>
									</thead>
									<tbody>
										{bioChoiceSecondStepLoading ? (
											<LoadingCircle />
										) : (
											bioChoiceSecondStep?.data?.length > 0 &&
											bioChoiceSecondStep?.data?.map((item, index) => {
												return (
													<tr key={index} className="border-b">
														<td className="px-4 py-2 text-center border-l w-1/10">
															{index + 1}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.bio_id}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.full_name}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.date_of_birth}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.present_address}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.family_number}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.relation}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.total_count}
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{(item?.approval_rate * 1).toFixed(2)}%
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{(item?.rejection_rate * 1).toFixed(2)}%
														</td>
														<td className="px-4 py-2 text-center border-l w-1/10">
															{item?.pending_count}
														</td>
														<td className="flex px-4 py-2 text-center border-l w-1/10">
															<Button color="green" size="xs" className="mr-2">
																<FaEye size={12} />
															</Button>
															<Button color="red" size="xs">
																<FaTrash size={12} />
															</Button>
														</td>
													</tr>
												);
											})
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			{qA && (
				<BioDetailsModal
					open={bioDetailsModal}
					setOpen={setBioDetailsModal}
					title="Bio Details"
					text={qA}
				/>
			)}
			{isFeedbackDialogOpen && (
				<FeedbackModal
					open={isFeedbackDialogOpen}
					setOpen={setIsFeedbackDialogOpen}
					feedbackData={feedback}
					purchase={true}
				/>
			)}
			{payDetailsModal && (
				<PayDetailsModal
					open={payDetailsModal}
					setOpen={setPayBioDetailsModal}
				/>
			)}
		</>
	);
};

export default MyPurchases;
