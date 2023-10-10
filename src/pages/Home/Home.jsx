// import { useState } from "react";
import "../../assets/styles/home.css";
// import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
// Biodata Grid  import Starts
import { useQuery } from "@tanstack/react-query";

import FeaturedBioDataGrid from "../../components/FeaturedBioDataGrid/FeaturedBioDataGrid";

import { BioDataServices } from "../../services/bioData";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import { useContext, useEffect } from "react";
import BioContext from "../../contexts/BioContext";

//End Bio grid Import

const Home = () => {
	// biogrid starts

	const { setBioDatas } = useContext(BioContext);
	const { isLoading, error, data } = useQuery({
		queryKey: ["bioData", "generalInfo"],
		queryFn: async () => {
			return await BioDataServices.getALLGeneralInfo();
		},
	});

	useEffect(() => {
		if (data && data?.data) {
			setBioDatas(data?.data?.data);
		}
	}, [data, setBioDatas]);
	if (error) {
		console.log(error);
	}
	// biogrid ends
	// const [personTypeClicked, setPersonTypeClicked] = useState(true);
	// const [selectedPersonType, setSelectedPersonType] = useState("সকল");
	// const [marriageTypeClicked, setMarriageTypeClicked] = useState(true);
	// const [selectedMarriageType, setSelectedMarriageType] = useState("সকল");
	// const navigate = useNavigate();

	// const searchButtonHandler = () => {
	// 	navigate(
	// 		`/biodatas?personType= ${selectedPersonType}&marriageType=${selectedMarriageType}`
	// 	);
	// };

	return (
		<div className="home-container">
			<div className="home-titlee text-4xl md:text-6xl lg:text-7xl font-bold pt-6">
				<h1>বাংলাদেশী ইসলামিক</h1>
				<h1>ম্যাট্রিমনি</h1>
			</div>
			<div className="home-subtitlee text-3xl md:text-4xl lg:text-5xl mt-4 mb-4">
				<h3>নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ</h3>
			</div>
			<div className="home-desc">
				<p className="content text-xl md:text-2xl lg:text-3xl">
					যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
					অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
				</p>
				<p className="ref text-sm md:text-xl lg:text-2xl">(বায়হাকী, শু&rsquo;আবুল ঈমান - ৫৪৮৬)</p>
			</div>
  <div className="search-filter mt-4 rounded-2xl bg-white container mx-auto p-4 lg:p-8 lg:flex lg:items-center lg:justify-between">
      {/* Dropdown 1 */}
      <div className="mb-4 lg:mb-0">
        <label className="block mb-2 lg:inline-block lg:mb-0 lg:mr-4">
          আমি খুঁজছি:
        </label>
        <select className="block w-full lg:w-auto p-2 border rounded-lg">
          <option value="all_bio" selected>সকল</option>
          <option value="male_bio">পাত্রের বায়োডাটা</option>
          <option value="female_bio">পাত্রীর বায়োডাটা</option>
        </select>
      </div>

      {/* Dropdown 2 */}
      <div className="mb-4 lg:mb-0">
        <label className="block mb-2 lg:inline-block lg:mb-0 lg:mr-4">
         বৈবাহিক অবস্থা:
        </label>
        <select className="block w-full lg:w-auto p-2 border rounded-lg">
                <option value="all_marital_status" selected>সকল</option>
          <option value="unmarried">অবিবাহিত</option>
          <option value="married">বিবাহিত</option>
          <option value="divorced">ডিভোর্সড</option>
          <option value="widow">বিধবা</option>
          <option value="others">বিপত্নীক</option>
        </select>
      </div>

      {/* Dropdown 3 */}
      <div className="mb-4 lg:mb-0">
        <label className="block mb-2 lg:inline-block lg:mb-0 lg:mr-4">
          স্থায়ী ঠিকানা:
        </label>
        <select className="block w-full lg:w-auto p-2 border rounded-lg">
             <option value="all_permanent_address" selected>সকল</option>
          <option value="female">Barisal</option>
          <option value="others">Khulna</option>
          <option value="female">Dhaka</option>
          <option value="others">Cumilla</option>
          <option value="female">Rajhshahi</option>
          <option value="others">Sylhet</option>
        </select>
      </div>

      {/* Filter Button */}
      <button className="block w-full lg:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg" 	style={{
							background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
						}}>
        খুঁজুন
      </button>
    </div>
		
			<div className="featured-biodata">
				{isLoading ? <LoadingBioData /> : <FeaturedBioDataGrid />}
			</div>
			<h2 className="text-xl md:text-2xl lg:text-4xl text-blue-700 my-4 text-center">
				বিয়ে সম্পর্কিত কুরআনের কিছু আয়াত ও কিছু হাদিসঃ
			</h2>
			<div className="hadith-card flex justify-center items-center mt-2">
				<div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
					<h3 className="text-sm md:text-md lg:text-xl pt-8">
						হে যুব সম্প্রদায়! তোমাদের মধ্যে যারাই স্ত্রীর অধিকার আদায়ে সামর্থ্য
						রাখে, তারা যেন অবশ্যই বিয়ে বন্ধনে আবদ্ধ হয়।
					</h3>
					<h4 className="text-sm pt-2 pb-4 text-blue-500">
						(সূরা রুম : আয়াত ২১)
					</h4>
				</div>
			</div>
			<div className="hadith-card flex justify-center items-center mt-2">
				<div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
					<h3 className="text-sm md:text-md lg:text-xl pt-8">
						“আর এক নিদর্শন এই যে, তিনি তোমাদের জন্যে তোমাদের মধ্য থেকে তোমাদের
						সঙ্গিনীদের সৃষ্টি করেছেন, যাতে তোমরা তাদের কাছে শান্তিতে থাক এবং
						তিনি তোমাদের মধ্যে পারস্পরিক স¤প্রীতি ও দয়া সৃষ্টি করেছেন।”
					</h3>
					<h4 className="text-sm pt-2 pb-4 text-blue-500">
						সহীহ - মুত্তাফাকুন ‘আলাইহি (বুখারী ও মুসলিম)।
					</h4>
				</div>
			</div>
			<div className="hadith-card flex justify-center items-center mt-2">
				<div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
					<h3 className="text-sm md:text-md lg:text-xl pt-8">
						`বিয়ে হলো আমার সুন্নাত যে ব্যক্তি আমার সুন্নাত তরিকা ছেড়ে চলবে সে
						আমার দলভুক্ত নয়।’
					</h3>
					<h4 className="text-sm pt-2 pb-4 text-blue-500">(বুখারি)</h4>
				</div>
			</div>
			<div className="hadith-card flex justify-center items-center mt-2">
				<div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
					<h3 className="text-sm md:text-md lg:text-xl pt-8">
						`হে যুবসমাজ! তোমাদের মধ্যে যারা বিয়ের সামর্থ্য রাখে, তাদের বিয়ে করা
						কর্তব্য, কেননা বিয়ে দৃষ্টি নিয়ন্ত্রণকারী, যৌন অঙ্গের পবিত্রতা
						রক্ষাকারী।’{" "}
					</h3>
					<h4 className="text-sm pt-2 pb-4 text-blue-500">(মিশকাত)</h4>
				</div>
			</div>
			<div className="hadith-card flex justify-center items-center mt-2">
				<div className="rounded-lg border border-blue-500 w-[95%] lg:w-[90%] px-4 bg-white">
					<h3 className="text-sm md:text-md lg:text-xl pt-8">
						“তারা (স্ত্রীগণ) তোমাদের পোশাক এবং তোমরা (স্বামীগণ) তাদের
						পোশাকস্বরূপ।”
					</h3>
					<h4 className="text-sm pt-2 pb-4 text-blue-500">
						(সূরা বাকারা : আয়াত ১৮৭)
					</h4>
				</div>
			</div>
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
