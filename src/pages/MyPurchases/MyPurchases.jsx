import "./MyPurchases.css";
import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrash } from "react-icons/fa";
import { BioChoiceDataServices } from "../../services/bioChoiceData";
import { getToken } from "../../utils/cookies";
import { MdFeedback} from "react-icons/md";
// import { formatDate,readableDateTime } from "../../utils/date";
import {
	
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
  } from "@material-tailwind/react";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
const MyPurchases = () => {
	
	const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);

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
	console.log(bioChoiceSecondStep);
	console.log(bioChoiceFirstStep);

	return (
		
		<div className="py-12 mx-auto ">
			<div className="">
				{/*<!-- End of Left Sidebar -->*/}
				<div className="col right-sidebar-main my-favs">
					<div className="my-favs-info border-t-2 w-auto rounded shadow">
						<h5 className="card-title text-center text-2xl mt-3">
							আমার শেয়ার করা বায়োডাটার অবস্থা (১ম স্টেপ)
						</h5>
						<h6 className="text-xs py-4">
							প্রথম ধাপে আপনার নিজের বায়োডাটা যেসকল পাত্র/পাত্রীর সাথে শেয়ার
							করেছেন তাদের তালিকা,ফিডব্যাক ও অবস্থা
						</h6>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="border-b border-t">
										<th className="px-4 py-2 text-center w-1/10">SL</th>
										<th className="px-4 py-2 text-center w-1/10">
											বায়োডাটা নং
										</th>
										<th className="px-4 py-2 text-center w-1/10">অ্যাড্রেস</th>
										<th className="px-4 py-2 text-center w-1/10">স্ট্যাটাস</th>
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
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{index}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.bio_id}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.city},{item?.division}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.status}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
													<div className="flex justify-center items-center cursor-pointer">
													<MdFeedback onClick={() => setIsFeedbackDialogOpen(true)} color="blue" size={22} /> 
													</div>
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														permitted to get contact
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
													{(item?.approval_rate*1).toFixed(2)}%
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{(item?.rejection_rate*1).toFixed(2)}%
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.pending_count}
													</td>
													<td className="px-4 py-2 text-center flex w-1/10 border-l">
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
				<Dialog
        size="sm"
        active={isFeedbackDialogOpen}
        toggler={() => setIsFeedbackDialogOpen(false)}
      >
        <DialogHeader>Feedback</DialogHeader>
        <DialogBody>
          {/* Add your feedback content here */}
          <p>This is the feedback content.</p>
        </DialogBody>
        <DialogFooter>
          <Button
            color="blue"
            buttonType="link"
            onClick={() => setIsFeedbackDialogOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
				<div className="h-5 lg:h-12"></div>
				<div className="col right-sidebar-main my-favs">
					<div className="my-favs-info border-t-2 w-auto rounded shadow">
						<h5 className="card-title text-center text-2xl mt-3">
							আমার ফাইনাল বায়োডাটা ক্রয়সমূহ (২য় স্টেপ)
						</h5>
						<h6 className="text-xs py-4">
							প্রথম ধাপে আপনার নিজের বায়োডাটা পাত্র/পাত্রীর সাথে শেয়ার করার পর
							আপ্রুভাল পেয়ে ২য় ধাপে অভিভাবকের কনটাক্ট নাম্বার যাদের
							পেয়েছেন,তাদের তালিকা
						</h6>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="border-b border-t">
										<th className="px-4 py-2 text-center w-1/11">SL</th>
										<th className="px-4 py-2 text-center w-1/11">
											বায়োডাটা নং
										</th>
										<th className="px-4 py-2 text-center w-1/11">জন্ম তারিখ</th>
										<th className="px-4 py-2 text-center w-1/11">ঠিকানা</th>
										<th className="px-4 py-2 text-center w-1/11">
											যোগাযোগের নাম্বার
										</th>
										<th className="px-4 py-2 text-center w-1/11">সম্পর্ক</th>
										<th className="px-4 py-2 text-center w-1/11">
											টোটাল পেয়েছে
										</th>
										<th className="px-4 py-2 text-center w-1/11">
											অ্যাপ্রুভাল রেট
										</th>
										<th className="px-4 py-2 text-center w-1/11">
											রিজেকশন রেট
										</th>
										<th className="px-4 py-2 text-center w-1/11">
											পেইন্ডিং সংখ্যা
										</th>
										<th className="px-4 py-2 text-center w-1/11">অপশন</th>
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
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{index+1}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.bio_id}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.date_of_birth}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.present_address}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.family_number}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.relation}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.total_count}
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{(item?.approval_rate*1).toFixed(2)}%
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{(item?.rejection_rate*1).toFixed(2)}%
													</td>
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{item?.pending_count}
													</td>
													<td className="px-4 py-2 text-center flex w-1/10 border-l">
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
	);
};

export default MyPurchases;
