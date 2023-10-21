/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./favorite.css";
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrash } from "react-icons/fa";
import { LikesServices } from "../../services/likes";
import { getToken } from "../../utils/cookies";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { formatDate, getDateMonthYear } from "../../utils/date";
import { BioDataServices } from "../../services/bioData";
import { useNavigate } from "react-router-dom";

const LikeItem = ({ item, index }) => {
	const navigate = useNavigate();
	const { data } = useQuery({
		queryKey: ["bio-data", "stat", item?.bio_id],
		queryFn: async () => {
			return await BioDataServices.getBioDataStatistics(item?.bio_id);
		},
	});
	const rejected = data?.results?.rejected;
	const approved = data?.results?.approved;
	const total = rejected + approved;
	let approvedRate = 0;
	let rejectedRate = 0;
	if (total) {
		approvedRate = approved / total;
		approvedRate = approvedRate.toFixed(2);
		rejectedRate = rejected / total;
		rejectedRate = rejectedRate.toFixed(2);
	}
	// console.log("favorite-item", data);
	const viewButtonHandler = () => {
		navigate(`/biodata/${item.bio_id}`);
	};
	return (
		<tr className="border-b">
			<td className="px-4 py-2 text-center w-1/9 border-l">{index}</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">{item?.bio_id}</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">
				{formatDate(getDateMonthYear(item?.date_of_birth))}
			</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">
				{item?.permanent_address}
			</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">
				{total + data?.results?.pending}
			</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">{approvedRate}%</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">{rejectedRate}%</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">
				{data?.results?.pending}
			</td>
			<td className="px-4 py-2 text-center w-1/9 border-l">
				<Button
					onClick={viewButtonHandler}
					color="green"
					size="xs"
					className="mr-2"
				>
					<FaEye size={12} />
				</Button>
			</td>
		</tr>
	);
};

const Favorite = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["likes", "user", "all"],
		queryFn: async () => {
			return await LikesServices.getUserLikesList(getToken().token);
		},
	});
	if (isLoading) {
		return <LoadingCircle />;
	}
	console.log("likes~", data);
	return (
		<div className="py-12 mx-auto ">
			<div className="">
				{/*<!-- End of Left Sidebar -->*/}
				<div className="col right-sidebar-main my-favs">
					<div className="my-favs-info border-t-2 w-auto rounded shadow">
						<h5 className="card-title text-center text-2xl my-3">
							আমার পছন্দসমুহ
						</h5>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="border-b border-t">
										<th className="px-4 py-2 text-center w-1/9">SL</th>
										<th className="px-4 py-2 text-center w-1/9">বায়োডাটা নং</th>
										<th className="px-4 py-2 text-center w-1/9">জন্ম তারিখ</th>
										<th className="px-4 py-2 text-center w-1/9">ঠিকানা</th>
										<th className="px-4 py-2 text-center w-1/9">
											টোটাল পেয়েছে
										</th>
										<th className="px-4 py-2 text-center w-1/9">
											অ্যাপ্রুভাল রেট
										</th>
										<th className="px-4 py-2 text-center w-1/9">রিজেকশন রেট</th>
										<th className="px-4 py-2 text-center w-1/9">
											পেইন্ডিং সংখ্যা
										</th>
										<th className="px-4 py-2 text-center w-1/9">অপশন</th>
									</tr>
								</thead>
								<tbody>
									{data?.data?.map((item, index) => {
										return <LikeItem item={item} index={index} key={index} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorite;
