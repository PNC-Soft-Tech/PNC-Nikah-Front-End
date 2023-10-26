import "./BioRequests.css";
import { Button } from "@material-tailwind/react";
import { FaEye,FaCheck,FaTimes,FaInfoCircle,MdFeedback} from "react-icons/fa";
import PaymentHistory from "../../components/PaymentHistory/PaymentHistory";
const MyBioRequests = () => {
	return (
		<div className="py-12 mx-auto ">
			<div className="">
				{/*<!-- End of Left Sidebar -->*/}
				<div className="col right-sidebar-main my-favs">
					<div className="my-favs-info border-t-2 w-auto rounded shadow">
						<h5 className="card-title text-center text-2xl mt-3">
							আমার কাছে শেয়ার করা বায়োডাটার অনুরোধসমূহ
						</h5>
						<h6 className="text-xs py-4">প্রথম ধাপে আপনার নিকট যেসকল পাত্র/পাত্রী তাদের নিজেদের বায়োডাটা শেয়ার করেছেন, তাদের তালিকা,ফিডব্যাক ও অবস্থা</h6>
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
										<th className="px-4 py-2 text-center w-1/7">
										ফিডব্যাক
										</th>
									
										<th className="px-4 py-2 text-center w-1/7">অপশন</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<td className="px-4 py-2 text-center w-1/7 border-l">1</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											2345
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
										Barisal City Corporation,Barisal
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
											Pending
										</td>
										<td className="px-4 py-2 text-center w-1/7 border-l">
                                        <div className="flex justify-center cursor-pointer items-center">
                                            <FaInfoCircle color="green" size={22} />
                                        </div>
                                        </td>
                                        <td className="px-4 py-2 text-center w-1/7 border-l">
                                        <div className="flex justify-center items-center">
                                            <MdFeedback color="blue" size={22} />
                                        </div>
                                        </td>
									
										<td className="px-4 py-2 text-center w-1/7 border-l">
                                        <Button color="blue" size="xs" className="mr-2">
												<FaEye size={12} />
											</Button>
											<Button color="green" size="xs" className="mr-2">
                                            <FaCheck size={12} />
                                            </Button>
											<Button color="red" size="xs">
                                            <FaTimes size={12} />
                                            </Button>
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
                                            <FaInfoCircle color="green" size={22} />
                                        </div>
                                        </td>
                                        <td className="px-4 py-2 text-center w-1/7 border-l">
                                        <div className="flex justify-center items-center">
                                            <MdFeedback color="blue" size={22} />
                                        </div>
                                        </td>
										
										<td className="px-4 py-2 text-center w-1/7 border-l">
                                        <Button color="blue" size="xs" className="mr-2">
												<FaEye size={12} />
											</Button>
											<Button color="green" size="xs" className="mr-2">
                                            <FaCheck size={12} />
                                            </Button>
											<Button color="red" size="xs">
                                            <FaTimes size={12} />
                                            </Button>
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
                                            <FaInfoCircle color="green" size={22} />
                                        </div>
                                        </td>
                                        <td className="px-4 py-2 text-center w-1/7 border-l">
                                        <div className="flex justify-center items-center">
                                            <MdFeedback color="blue" size={22} />
                                        </div>
                                        </td>
										
										<td className="px-4 py-2 text-center flex w-1/7 border-l">
                                        <Button color="blue" size="xs" className="mr-2">
												<FaEye size={12} />
											</Button>
											<Button color="green" size="xs" className="mr-2">
                                            <FaCheck size={12} />
                                            </Button>
											<Button color="red" size="xs">
                                            <FaTimes size={12} />
                                            </Button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			
				{/* <div className="h-5 lg:h-12"></div>
				<PaymentHistory /> */}
				
			
			</div>
		</div>
	);
};

export default MyBioRequests;
