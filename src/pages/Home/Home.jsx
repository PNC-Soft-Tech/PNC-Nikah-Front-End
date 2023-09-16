import { useState } from "react";
import "../../assets/styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
          <div className="custom-select-body">
            <button onClick={searchButtonHandler}>খুঁজুন</button>
          </div>
        </div>
      </div>

      <div className="create-biodata">
        <h2 className="biodata-title">
          <span className="pink">অর্ধেকদ্বীনে</span>
          <span className="d-purple">অর্ধেকদ্বীনে</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
