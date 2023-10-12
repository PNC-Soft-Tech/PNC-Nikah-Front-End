import "../../assets/styles/home.css";
import { Colors } from "../../constants/colors";
import FeaturedBioDataGrid from "../../components/FeaturedBioDataGrid/FeaturedBioDataGrid";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import HadithSlider from "../../components/HadithSlider/HadithSlider";
import { useContext } from "react";
import BioContext from "../../contexts/BioContext";
import { BioDataServices } from "../../services/bioData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { convertToQuery } from "../../utils/query";

//End Bio grid Import

const Home = () => {
	const navigate = useNavigate();
	const { bioLoading } = useContext(BioContext);
	const { isLoading, data: zillasOptions = [] } = useQuery({
		queryKey: ["districts"],
		queryFn: async () => {
			return await BioDataServices.getAllDistricts(null);
		},
	});

	const submitHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		const marital_status = form.marital_status.value;
		const bio_type = form.bio_type.value;
		const zilla = form.zilla.value;
		const query = convertToQuery({
			marital_status,
			bio_type,
			zilla,
		});
		navigate(`/biodatas?${query}`);
	};

	// console.log(zillasOptions);

	return (
		<div className="home-container">
			<div className="home-titlee text-4xl md:text-6xl lg:text-7xl font-bold pt-6">
				<h1>বাংলাদেশী ইসলামিক</h1>
				<h1
					style={{
						color: Colors.titleText,
					}}
				>
					ম্যাট্রিমনি
				</h1>
			</div>
			<div className="home-subtitlee text-3xl md:text-4xl lg:text-5xl mt-4 mb-4">
				<h3>নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ</h3>
			</div>
			<div className="home-desc">
				<p className="content text-xl md:text-2xl lg:text-3xl">
					যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
					অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
				</p>
				<p className="ref text-sm md:text-xl lg:text-2xl">
					(বায়হাকী, শু&rsquo;আবুল ঈমান - ৫৪৮৬)
				</p>
			</div>
			<form
				onSubmit={submitHandler}
				className="search-filter mt-4 rounded-2xl bg-white container mx-auto px-4 lg:px-8 lg:p-16 lg:flex lg:items-center lg:justify-between"
			>
				{/* Dropdown 1 */}
				<div className="mb-4 lg:mb-0">
					<label
						className="block text-xl md:text-2xl lg:text-2xl mb-2 lg:inline-block lg:mb-0 lg:mr-4"
						style={{
							color: Colors.titleText,
						}}
					>
						আমি খুঁজছি:
					</label>
					<div className="md:h-2"></div>
					<select
						name="bio_type"
						className="block w-full lg:w-auto p-2 border bg-gray-100 border-gray-300 rounded-xl md:px-8 md:py-4"
					>
						<option value="" selected>
							সকল
						</option>
						<option value="পাত্রের বায়োডাটা">পাত্রের বায়োডাটা</option>
						<option value="পাত্রীর বায়োডাটা">পাত্রীর বায়োডাটা</option>
					</select>
				</div>

				{/* Dropdown 2 */}
				<div className="mb-4 lg:mb-0">
					<label
						className="block text-xl md:text-2xl lg:text-2xl mb-2 lg:inline-block lg:mb-0 lg:mr-4"
						style={{
							color: Colors.titleText,
						}}
					>
						বৈবাহিক অবস্থা:
					</label>
					<div className="md:h-2"></div>
					<select
						name="marital_status"
						className="block w-full lg:w-auto p-2 bg-gray-100 border border-gray-300 rounded-xl md:px-8 md:py-4"
					>
						<option value="" selected>
							সকল
						</option>
						<option value="অবিবাহিত">অবিবাহিত</option>
						<option value="বিবাহিত">বিবাহিত</option>
						<option value="ডিভোর্সড">ডিভোর্সড</option>
						<option value="বিধবা">বিধবা</option>
						<option value="বিপত্নীক">বিপত্নীক</option>
					</select>
				</div>

				{/* Dropdown 3 */}
				<div className="mb-4 lg:mb-0">
					<label
						className="block text-xl md:text-2xl lg:text-2xl mb-4 lg:inline-block lg:mb-0 lg:mr-4"
						style={{
							color: Colors.titleText,
						}}
					>
						স্থায়ী ঠিকানা:
					</label>
					<div className="md:h-2"></div>
					<select
						name="zilla"
						className="block w-full lg:w-auto p-2 bg-gray-100 border border-gray-300 rounded-xl md:px-8 md:py-4"
					>
						<option value="" selected>
							সকল
						</option>
						{isLoading ? (
							<p>Loading...</p>
						) : (
							zillasOptions.map((item, index) => (
								<option key={index} value={item.value}>
									{item.value}
								</option>
							))
						)}
					</select>
				</div>

				{/* Filter Button */}
				<button
					className="block w-full lg:w-auto px-4 py-2 lg:px-8 lg:py-2 md:mt-8 bg-blue-500 text-white text-xl lg:text-2xl rounded-lg"
					style={{
						background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
					}}
					type="submit"
				>
					খুঁজুন
				</button>
			</form>

			<div className="featured-biodata">
				{bioLoading ? <LoadingBioData /> : <FeaturedBioDataGrid />}
			</div>

			<h2 className="text-xl md:text-2xl lg:text-4xl text-blue-700 my-4 text-center">
				বিয়ে সম্পর্কিত কুরআনের কিছু আয়াত ও কিছু হাদিসঃ
			</h2>
			<HadithSlider />

			<h2
				className="text-center text-xl md:text-2xl lg:text-4xl mt-8 mb-2 text-uppercase font-bold"
				style={{
					color: Colors.titleText,
				}}
			>
				এক নজরে আমাদের সাইটঃ
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className=" stat-card bg-white p-4 m-2 rounded-xl shadow-xl border border-blue-500 py-12">
					<h1 className="text-3xl text-center font-semibold">৪৩৪</h1>
					<h3 className="text-xl text-center ">সর্বমোট বায়োডাটা</h3>
				</div>
				<div className=" stat-card bg-white p-4 m-2 rounded-xl shadow-xl border border-blue-500 py-12">
					<h1 className="text-3xl text-center font-semibold">২০০</h1>
					<h3 className="text-xl text-center ">সর্বমোট পাত্রের বায়োডাটা</h3>
				</div>
				<div className=" stat-card bg-white p-4 m-2 rounded-xl shadow-xl border border-blue-500 py-12">
					<h1 className="text-3xl text-center font-semibold">২৩৪</h1>
					<h3 className="text-xl text-center ">সর্বমোট পাত্রীর বায়োডাটা</h3>
				</div>
				<div className=" stat-card bg-white p-4 m-2 rounded-xl shadow-xl border border-blue-500 py-12">
					<h1 className="text-3xl text-center font-semibold">৪৫</h1>
					<h3 className="text-xl text-center ">বিয়ে সম্পন্ন হয়েছে</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
