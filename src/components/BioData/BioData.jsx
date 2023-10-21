/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import { Colors } from "../../constants/colors";
import { formatDate, getDateMonthYear } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../constants/ScrolltoTop";
import { FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { LikesServices } from "../../services/likes";
import { getToken } from "../../utils/cookies";
import { Toast } from "../../utils/toast";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const BioData = ({ biodata }) => {
	const navigate = useNavigate();
	const { userInfo } = useContext(UserContext);

	const { data, refetch } = useQuery({
		queryKey: ["like", "count", biodata.user_id],
		queryFn: async () => {
			return LikesServices.getLikes(biodata.user_id);
		},
	});

	const { data: userData, refetch: userRefetch } = useQuery({
		queryKey: ["like", "user", "count", userInfo?.data[0]?.id, biodata.user_id],
		queryFn: async () => {
			return LikesServices.getUserLikes(userInfo?.data[0]?.id, biodata.user_id);
		},
	});

	const bioDataHandler = () => {
		navigate(`/biodata/${biodata.user_id}`);
	};

	// ? FOR GIVING REACTION
	const likeButtonHandler = async () => {
		if (!userInfo?.data[0]?.id) {
			Toast.errorToast("Please,Login First");
			return;
		}

		try {
			const data = await LikesServices.createLikes(
				{ bio_id: biodata?.user_id },
				getToken().token
			);
			if (data?.success) {
				await refetch();
				await userRefetch();
				Toast.successToast("আপনার রিয়াকশন যুক্ত করা হয়েছে");
			}
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(data);
	console.log(userInfo?.data[0]?.id, biodata.user_id, userData?.data?.type);

	return (
		<div className="my-5 hover:shadow-2xl transition-all  duration-300 ease-in rounded-md border-2">
			<ScrollToTop />
			<div
				style={{
					backgroundColor: Colors.pncPrimaryColor,
				}}
				className="h-[200px] flex relative  flex-col justify-center rounded-t-md text-white"
			>
				<img
					className="w-16 h-16 mx-auto rounded-full "
					src={biodata?.gender === "মহিলা" ? female : male}
					alt=""
				/>
				<h4 className="my-2"> বায়োডাটা নং </h4>
				<h3>
					{biodata?.gender === "মহিলা" ? "PNCF-" : "PNCM-"}
					{biodata.user_id}
				</h3>
				{/* view icons */}
				<div className="flex absolute top-2 left-2">
					<FaEye className="w-6 h-6 mr-2" />
					{biodata?.views}
				</div>
				{/* like icons */}
				<div
					onClick={likeButtonHandler}
					className=" absolute flex items-center bottom-2 left-2 cursor-pointer"
				>
					{userData?.data?.type === "like" && biodata ? (
						<FaHeart className="w-6 h-6 " />
					) : (
						<FaRegHeart className="w-6 h-6 text-white" />
					)}{" "}
					{data?.count > 0 && <span className="ml-1 ">{data?.count}</span>}
				</div>
			</div>
			<div className="mx-2 mt-4">
				<table className="min-w-full divide-y divide-gray-200 border-0 border-gray-300">
					<tbody className="bg-white divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r border-t border-b">
								জন্মসন
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap border-b border-t">
								{/* {getDateMonthYear(biodata.date_of_birth)} */}
								{formatDate(getDateMonthYear(biodata.date_of_birth))}
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r  border-b">
								উচ্চতা{" "}
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b">
								<span>{biodata.height}</span>
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap border-r border-b">
								গাত্রবর্ন{" "}
							</td>
							<td className="px-6 py-4 whitespace-nowrap border-b">
								{biodata.screen_color}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="my-4">
				<Button
					onClick={bioDataHandler}
					className=" rounded-3xl"
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
				>
					{" "}
					সম্পূর্ন বায়োডাটা{" "}
				</Button>
			</div>
		</div>
	);
};

export default BioData;
