import "./BioRequests.css";
import { Button } from "@material-tailwind/react";
import { FaEye, FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { BioChoiceDataServices } from "../../services/bioChoiceData";
import { getToken } from "../../utils/cookies";
import { Colors } from "../../constants/colors";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
const MyBioRequests = () => {
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["bio-share"],
		queryFn: async () => {
			return await BioChoiceDataServices.getBioChoiceShare(getToken().token);
		},
	});
	console.log(data);
	return (
		<div className="py-12 mx-auto ">
			<div className="">
				{/*<!-- End of Left Sidebar -->*/}
				<div className="col right-sidebar-main my-favs">
					<div className="my-favs-info border-t-2 w-auto rounded shadow">
						<h5 className="card-title text-center text-2xl mt-3">
							আমার কাছে শেয়ার করা বায়োডাটার অনুরোধসমূহ
						</h5>
						<h6 className="text-xs py-4" style={{ color: Colors.siteGlobal }}>
							প্রথম ধাপে আপনার নিকট যেসকল পাত্র/পাত্রী তাদের নিজেদের বায়োডাটা
							শেয়ার করেছেন, তাদের তালিকা,ফিডব্যাক ও অবস্থা
						</h6>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="border-b border-t">
										<th className="px-4 py-2 text-center w-1/7">SL</th>
										<th className="px-4 py-2 text-center w-1/7">বায়োডাটা নং</th>
										<th className="px-4 py-2 text-center w-1/7">অ্যাড্রেস</th>
										<th className="px-4 py-2 text-center w-1/7">স্ট্যাটাস</th>
										<th className="px-4 py-2 text-center w-1/7">
											বায়ো ডিটেইলস
										</th>
										<th className="px-4 py-2 text-center w-1/7">ফিডব্যাক</th>

										<th className="px-4 py-2 text-center w-1/7">অপশন</th>
									</tr>
								</thead>
								<tbody>
									{isLoading ? (
										<LoadingCircle />
									) : (
										data?.data?.length > 0 &&
										data?.data?.map((item, index) => {
											return (
												<tr key={index} className="border-b">
													<td className="px-4 py-2 text-center w-1/10 border-l">
														{index}
													</td>
													<td className="px-4 py-2 text-center w-1/7 border-l">
														{item?.user_id}
													</td>
													<td className="px-4 py-2 text-center w-1/7 border-l">
														Barisal City Corporation,Barisal
													</td>
													<td className="px-4 py-2 text-center w-1/7 border-l">
														{item?.status}
													</td>
												</tr>
											);
										})
									)}

									<tr className="border-b">
										<td className="px-4 py-2 text-center w-1/7 border-l">1</td>

										<td className="px-4 py-2 text-center w-1/7 border-l">
											Pending
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center cursor-pointer items-center">
												<FaInfoCircle color="gray" size={22} />
											</div>
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center cursor-pointer">
												<MdFeedback color="gray" size={22} />
											</div>
										</td>

										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center cursor-pointer">
												<MdFeedback color="blue" size={22} />
											</div>
										</td>

										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center">
												<Button color="blue" size="xs" className="mr-2">
													<FaEye size={12} />
												</Button>
												<Button color="green" size="xs" className="mr-2">
													<FaCheck size={12} />
												</Button>
												<Button color="red" size="xs">
													<FaTimes size={12} />
												</Button>
											</div>
										</td>
									</tr>
									<tr className="border-b">
										<td className="px-4 py-2 text-center w-1/7 border-l">2</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											345
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											Dhaka North City Corporation,Dhaka
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											Approved
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center cursor-pointer items-center">
												<FaInfoCircle color="gray" size={22} />
											</div>
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center cursor-pointer">
												<MdFeedback color="gray" size={22} />
											</div>
										</td>

										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center cursor-pointer">
												<MdFeedback color="blue" size={22} />
											</div>
										</td>

										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center">
												<Button color="blue" size="xs" className="mr-2">
													<FaEye size={12} />
												</Button>
												<Button color="green" size="xs" className="mr-2">
													<FaCheck size={12} />
												</Button>
												<Button color="red" size="xs">
													<FaTimes size={12} />
												</Button>
											</div>
										</td>
									</tr>
									<tr className="border-b">
										<td className="px-4 py-2 text-center w-1/7 border-l">3</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											321
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											Sylhet City Corporation,Sylhet
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											Rejected
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center cursor-pointer items-center">
												<FaInfoCircle color="gray" size={22} />
											</div>
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											<div className="flex justify-center items-center cursor-pointer">
												<MdFeedback color="gray" size={22} />
											</div>
										</td>

										<td className="px-4 py-2 text-center flex w-1/7 border-l">
											<div className="flex justify-center items-center">
												<Button color="blue" size="xs" className="mr-2">
													<FaEye size={12} />
												</Button>
												<Button color="green" size="xs" className="mr-2">
													<FaCheck size={12} />
												</Button>
												<Button color="red" size="xs">
													<FaTimes size={12} />
												</Button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyBioRequests;
