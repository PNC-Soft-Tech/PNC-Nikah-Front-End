import "../../assets/styles/home.css";
import { Colors } from "../../constants/colors";
import FeaturedBioDataGrid from "../../components/FeaturedBioDataGrid/FeaturedBioDataGrid";
import LoadingBioData from "../../components/LoadingBioData/LoadingBioData";
import HadithSlider from "../../components/HadithSlider/HadithSlider";
import { useState, useContext, useEffect } from "react";
import BioContext from "../../contexts/BioContext";
import { BioDataServices } from "../../services/bioData";
import { useNavigate } from "react-router-dom";
import { convertToQuery } from "../../utils/query";
import Select from "react-select";
//End Bio grid Import

const Home = () => {
	const navigate = useNavigate();
	const { bioLoading } = useContext(BioContext);
	const [selectedDivisions, setSelectedDivisions] = useState([]);
	const [selectedDistricts, setSelectedDistricts] = useState([]);
	const [divisionOptions, setDivisionOptions] = useState([]);
	const [districtOptions, setDistrictOptions] = useState([]);

	useEffect(() => {
		//! Fetch division options when the component mounts
		const fetchDivisionOptions = async () => {
			const divisions = await BioDataServices.getAllDivisions();
			if (divisions) {
				const allDivisionsOption = {
					value: "All Divisions",
					label: "All Divisions",
				};
				const formattedDivisionOptions = divisions.map((division) => ({
					value: division.value,
					label: division.value,
				}));
				formattedDivisionOptions.unshift(allDivisionsOption);
				setDivisionOptions(formattedDivisionOptions);
			}
		};

		fetchDivisionOptions();
	}, []);

	useEffect(() => {
		//! Fetch district options based on selected divisions
		const fetchDistrictOptions = async () => {
			const selectedDivisionValues = selectedDivisions.map(
				(division) => division.value
			);

			if (selectedDivisionValues.includes("All Divisions")) {
				// If "All Divisions" is selected, set all districts as selected
				const allDistricts = await BioDataServices.getAllDistricts(null);
				const allDistrictsOption = {
					value: "All Districts",
					label: "All Districts",
				};
				const formattedAllDistricts = allDistricts.map((district) => ({
					value: district.value,
					label: district.label,
				}));
				formattedAllDistricts.unshift(allDistrictsOption);
				setDistrictOptions(formattedAllDistricts);
			} else if (selectedDivisionValues.length === 0) {
				// Clear district options and add "All Districts" as an initial option
				const allDistrictsOption = {
					value: "All Districts",
					label: "All Districts",
				};
				setDistrictOptions([allDistrictsOption]);
			} else {
				// Fetch district options for selected divisions
				const districtPromises = selectedDivisionValues.map((divisionValue) => {
					return BioDataServices.getAllDistricts(divisionValue);
				});

				Promise.all(districtPromises).then((results) => {
					const formattedDistrictOptions = results.flatMap(
						(districts, index) => {
							return districts.map((district) => ({
								value: district.value,
								label: district.label,
								division: selectedDivisionValues[index],
							}));
						}
					);

					// Add "All Districts" as an initial option
					const allDistrictsOption = {
						value: "All Districts",
						label: "All Districts",
					};
					formattedDistrictOptions.unshift(allDistrictsOption);

					setDistrictOptions(formattedDistrictOptions);
				});
			}
		};

		fetchDistrictOptions();
	}, [selectedDivisions]);

	const handleDivisionChange = (selectedOptions) => {
		setSelectedDivisions(selectedOptions);

		if (selectedOptions.some((option) => option.value === "All Divisions")) {
			//! If "All Divisions" is selected, clear selected districts
			setSelectedDistricts([]);
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		const marital_status = form.marital_status.value;
		const bio_type = form.bio_type.value;

		//! Handle "All Divisions" and "All Districts" selections
		let divisionValues = selectedDivisions.map((division) => division.value);
		let districtValues = selectedDistricts.map((district) => district.value);

		if (divisionValues.includes("All Divisions")) {
			// divisionValues.splice(0, divisionValues.length);
			//! If "All Divisions" is selected, set the selected districts to include all districts
			// districtValues = districtOptions
			// 	.filter((district) => !districtValues.includes(district.value))
			// 	.map((district) => district.value);
			divisionValues = [];
		}
		if (districtValues.includes("All Districts")) {
			districtValues.splice(0, districtValues.length);
			//! Add all districts for selected divisions
			const selectedDivisionValues = selectedDivisions.map(
				(division) => division.value
			);
			const allDistricts = districtOptions
				.filter((district) =>
					selectedDivisionValues.includes(district.division)
				)
				.map((district) => district.value);
			districtValues.push(...allDistricts);
		}
		console.log(districtValues, divisionValues);
		const query = convertToQuery({
			marital_status,
			bio_type,
			zilla: districtValues.join(","),
		});
		// navigate(`/biodatas?${query}`);
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
			{/* Advertisement Starts  */}
			<div
  style={{
    background: `linear-gradient(to right, ${Colors.lnLeft}, ${Colors.lnRight})`,
  }}
  class="mx-auto my-4 max-w-screen-lg bg-blue-500 py-4 px-8 text-white md:flex md:items-center md:justify-around md:p-16 lg:rounded-xl relative"
>
  <div class="mr-10 mb-10 md:mb-0">
    <h2 class="mb-8 max-w-lg text-3xl font-bold sm:text-3xl">
      PNC Soft Tech - একটি সফটওয়্যার ডেভেলপমেন্ট কম্পানি
    </h2>
    <ul class="flex max-w-xl flex-wrap gap-4">
      <li class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6 text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-gray-100">ব্যক্তিগত ওয়েবসাইট/অ্যাপ</p>
      </li>
      <li class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6 text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-gray-100">ব্যবসায়ীক ওয়েবসাইট/অ্যাপ</p>
      </li>
      <li class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6 text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-gray-100">কম্পানির ওয়েবসাইট/অ্যাপ</p>
      </li>
      <li class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6 text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-gray-100">শিক্ষা প্তিষ্ঠানের ওয়েবসাইট/অ্যাপ</p>
      </li>
      <li class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6 text-green-300"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p class="text-gray-100">ই-কমার্স ওয়েবসাইট/অ্যাপ</p>
      </li>
    </ul>
  </div>
  <div class="whitespace-nowrap">
    <button class="focus:outline-4 rounded-xl bg-emerald-400 px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-emerald-500">
      মেসেজ দিন
    </button>
  </div>
  <a
    href="https://pncsofttech.xyz"
    target="_blank"
    class="absolute bottom-4 right-4 text-white text-sm"
  >
    আমাদের ওয়েবসাইট
  </a>
  <div class="bg-orange-500 text-white px-2 py-1 text-xs font-bold absolute top-0 right-0 ">
    <span class="uppercase">Ad</span>
  </div>
</div>



			{/* Advertisement Ends  */}
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
						className="block w-full lg:w-auto p-2 border bg-gray-100 border-gray-300 rounded-md md:px-8 md:py-4"
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
						className="block w-full lg:w-auto p-2 bg-gray-100 border border-gray-300 rounded-md md:px-8 md:py-4"
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
				<div className="mb-4 lg:max-w-[410px] lg:mb-0">
					<label
						className="block text-xl md:text-2xl lg:text-2xl mb-4 lg:inline-block lg:mb-0 lg:mr-4"
						style={{
							color: Colors.titleText,
						}}
					>
						স্থায়ী ঠিকানা:
					</label>
					<div className="md:h-2"></div>

					<Select
						className="px-8 pb-2"
						options={divisionOptions}
						onChange={handleDivisionChange}
						value={selectedDivisions}
						placeholder="Select Division(s)"
						isMulti
					/>
					<Select
						className="px-8 pb-4"
						options={districtOptions}
						onChange={setSelectedDistricts}
						value={selectedDistricts}
						placeholder="Select District(s)"
						isMulti
					/>
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
