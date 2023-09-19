import { useState } from "react";
import "../../assets/styles/home.css";
import { useNavigate } from "react-router-dom";
import {  Colors } from '../../constants/colors'; 
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
  const [personTypeClicked, setPersonTypeClicked] = useState(true);
  const [selectedPersonType, setSelectedPersonType] = useState("সকল");
  const [marriageTypeClicked, setMarriageTypeClicked] = useState(true);
  const [selectedMarriageType, setSelectedMarriageType] = useState("সকল");
  const navigate = useNavigate();

  const searchButtonHandler = () => {
    navigate(
      `/biodatas?personType= ${selectedPersonType}&marriageType=${selectedMarriageType}`
    );
  };

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>বাংলাদেশী ইসলামিক</h1>
        <h1>ম্যাট্রিমনি</h1>
      </div>
      <div className="home-subtitle">
        <h3>নিজ উপজেলায় দ্বীনদার পাত্রপাত্রী খোঁজা এখন সহজ</h3>
      </div>
      <div className="home-desc">
        <p className="content">
          যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
          অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
        </p>
        <p className="ref">(বায়হাকী, শু&rsquo;আবুল ঈমান - ৫৪৮৬)</p>
      </div>

      <div className="search-container">
        <div className="persion-type custom-select">
          <label htmlFor="">আমি খুঁজছি</label>
          <div className="custom-select-body">
            <p
              className="title-value"
              onClick={() => setPersonTypeClicked(!personTypeClicked)}
            >
              {selectedPersonType}
            </p>
            {personTypeClicked && (
              <>
                <p
                  className="all"
                  onClick={() => {
                    setSelectedPersonType("সকল");
                    setPersonTypeClicked(false);
                  }}
                >
                  সকল
                </p>
                <p
                  className="male"
                  onClick={() => {
                    setSelectedPersonType("পাত্রের বায়োডাটা");
                    setPersonTypeClicked(false);
                  }}
                >
                  পাত্রের বায়োডাটা
                </p>
                <p
                  className="female"
                  onClick={() => {
                    setSelectedPersonType("পাত্রীর বায়োডাটা");
                    setPersonTypeClicked(false);
                  }}
                >
                  পাত্রীর বায়োডাটা
                </p>
              </>
            )}
          </div>
        </div>
        <div className="persion-type custom-select">
          <label htmlFor="">বৈবাহিক অবস্থা</label>
          <div className="custom-select-body">
            <p
              className="title-value"
              onClick={() => setMarriageTypeClicked(!marriageTypeClicked)}
            >
              {selectedMarriageType}
            </p>
            {marriageTypeClicked && (
              <>
                <p
                  onClick={() => {
                    setSelectedMarriageType("সকল");
                    setMarriageTypeClicked(false);
                  }}
                >
                  সকল
                </p>
                <p
                  onClick={() => {
                    setSelectedMarriageType("অবিবাহিত");
                    setMarriageTypeClicked(false);
                  }}
                >
                  অবিবাহিত
                </p>
                <p
                  onClick={() => {
                    setSelectedMarriageType("বিবাহিত");
                    setMarriageTypeClicked(false);
                  }}
                >
                  বিবাহিত
                </p>
                <p
                  onClick={() => {
                    setSelectedMarriageType("ডিভোর্সড");
                    setMarriageTypeClicked(false);
                  }}
                >
                  ডিভোর্সড
                </p>
                <p
                  onClick={() => {
                    setSelectedMarriageType("বিধবা");
                    setMarriageTypeClicked(false);
                  }}
                >
                  বিধবা
                </p>
                <p
                  onClick={() => {
                    setSelectedMarriageType("বিপত্নীক");
                    setMarriageTypeClicked(false);
                  }}
                >
                  বিপত্নীক
                </p>
              </>
            )}
          </div>
        </div>
        <div className="persion-type custom-select">
          <label htmlFor="">স্থায়ী ঠিকানা</label>
          <div className="custom-select-body">
            <p className="title-value">সকল</p>
            {/* <p className='all'>সকল</p>
            <p className='male'>পাত্রের বায়োডাটা</p>
            <p className='male'>পাত্রীর বায়োডাটা</p> */}
          </div>
        </div>
        <div className="search-button custom-select">
          <label htmlFor=""></label>
          <div className="custom-select-body" style={{
            background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
          }}>
            <button     onClick={searchButtonHandler}>খুঁজুন</button>
          </div>
        </div>
      </div>

      <div className="create-biodata">
        <h2 className="biodata-title">
          <span className="pink">অর্ধেকদ্বীনে</span>
          <span className="d-purple">অর্ধেকদ্বীনে</span>
        </h2>
      </div>
      <div className="featured-biodata">
          {isLoading ? <LoadingBioData /> : <FeaturedBioDataGrid />}
      </div>
      <h2 className="text-2xl text-blue-700 my-4 text-center">বিয়ে সম্পর্কিত কুরআনের কিছু আয়াত ও কিছু হাদিসঃ</h2>
   <div className="hadith-card flex justify-center items-center mt-2">
      <div className="rounded-lg border border-blue-500 w-[55%] px-4 bg-white">
        <h3 className="text-xl pt-8">হে যুব সম্প্রদায়! তোমাদের মধ্যে যারাই স্ত্রীর অধিকার আদায়ে সামর্থ্য রাখে, তারা যেন অবশ্যই বিয়ে বন্ধনে আবদ্ধ হয়।</h3>
        <h4 className="text-sm pt-2 pb-4 text-blue-500">(সূরা রুম : আয়াত ২১)</h4>
      </div>
       </div>
   <div className="hadith-card flex justify-center items-center mt-2">
      <div className="rounded-lg border border-blue-500 w-[55%] px-4 bg-white">
        <h3 className="text-xl pt-8">“আর এক নিদর্শন এই যে, তিনি তোমাদের জন্যে তোমাদের মধ্য থেকে তোমাদের সঙ্গিনীদের সৃষ্টি করেছেন, যাতে তোমরা তাদের কাছে শান্তিতে থাক এবং তিনি তোমাদের মধ্যে পারস্পরিক স¤প্রীতি ও দয়া সৃষ্টি করেছেন।”</h3>
        <h4 className="text-sm pt-2 pb-4 text-blue-500">সহীহ - মুত্তাফাকুন ‘আলাইহি (বুখারী ও মুসলিম)।</h4>
      </div>
       </div>
   <div className="hadith-card flex justify-center items-center mt-2">
      <div className="rounded-lg border border-blue-500 w-[55%] px-4 bg-white">
        <h3 className="text-xl pt-8">`বিয়ে হলো আমার সুন্নাত যে ব্যক্তি আমার সুন্নাত তরিকা ছেড়ে চলবে সে আমার দলভুক্ত নয়।’</h3>
        <h4 className="text-sm pt-2 pb-4 text-blue-500">(বুখারি)</h4>
      </div>
       </div>
   <div className="hadith-card flex justify-center items-center mt-2">
      <div className="rounded-lg border border-blue-500 w-[55%] px-4 bg-white">
        <h3 className="text-xl pt-8">`হে যুবসমাজ! তোমাদের মধ্যে যারা বিয়ের সামর্থ্য রাখে, তাদের বিয়ে করা কর্তব্য, কেননা বিয়ে দৃষ্টি নিয়ন্ত্রণকারী, যৌন অঙ্গের পবিত্রতা রক্ষাকারী।’ </h3>
        <h4 className="text-sm pt-2 pb-4 text-blue-500">(মিশকাত)</h4>
      </div>
       </div>
   <div className="hadith-card flex justify-center items-center mt-2">
      <div className="rounded-lg border border-blue-500 w-[55%] px-4 bg-white">
        <h3 className="text-xl pt-8">“তারা (স্ত্রীগণ) তোমাদের পোশাক এবং তোমরা (স্বামীগণ) তাদের পোশাকস্বরূপ।”</h3>
        <h4 className="text-sm pt-2 pb-4 text-blue-500">(সূরা বাকারা : আয়াত ১৮৭)</h4>
      </div>
       </div>
<h2 className="text-center text-4xl mt-8 mb-2 text-uppercase font-bold" style={{
            color: Colors.titleText
          }}>এক নজরে আমাদের সাইটঃ</h2>
       <div className="grid md:grid-cols-4">
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
