/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import { Colors } from "../../constants/colors";

const GeneralInfoForm = ({ userForm, setUserForm }) => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [bioType, setBioType] = useState("");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("40 kg");
  const [blood, setBlood] = useState("");
  const [nationality, setNationality] = useState("");

  const bioDataTypes = [
    { value: "পাত্রের বায়োডাটা " },
    { value: "পাত্রীর বায়োডাটা " },
  ];
  const maritalStatus = [
    { value: "অবিবাহিত" },
    { value: "বিবাহিত" },
    { value: "ডিভোর্সড" },
    { value: "বিধবা" },
    { value: "বিপত্নীক" },
  ];

  const screenColors = [
    { value: "কালো" },
    { value: "শ্যমলা" },
    { value: "উজ্জ্বল শ্যামলা" },
    { value: "ফর্সা" },
    { value: "উজ্জ্বল ফর্সা" },
  ];

  const bloodGroup = [
    { value: "A+" },
    { value: "A-" },
    { value: "AB+" },
    { value: "AB-" },
    { value: "B+" },
    { value: "B-" },
    { value: "O+" },
    { value: "O-" },
  ];
  const nationalities = [
    { value: "বাংলাদেশী" },
    { value: "পাকিস্তানী" },
    { value: "ভারতীয়" },
    { value: "অন্যান্য " },
  ];

  const heights = [
    { value: "৪ ফুটের কম " },
    { value: "৪'" },
    { value: "৪'১'" },
    { value: "৪'২'" },
    { value: "৪'৩'" },
    { value: "৪'৪'" },
    { value: "৪'৫'" },
    { value: "৪'৬'" },
    { value: "৪'৭'" },
    { value: "৪'৮'" },
    { value: "৪'৯'" },
    { value: "৫'" },
    { value: "৫'১'" },
    { value: "৫'২'" },
    { value: "৫'৩'" },
    { value: "৫'৪'" },
    { value: "৫'৫'" },
    { value: "৫'৬'" },
    { value: "৫'৭'" },
    { value: "৫'৮'" },
    { value: "৫'৯'" },
    { value: "৬'" },
    { value: "৬'২'" },
    { value: "৬'৩'" },
    { value: "৬'৪'" },
    { value: "৬'৫'" },
    { value: "৬'৫' ফুটের বেশি " },
  ];

  const handleOptionChange1 = (e) => {};

  const handleOptionChange2 = (e) => {};
  const handleOptionChange3 = (e) => {
    setDob(e.target.value);
  };
  const handleOptionChange4 = (e) => {
    setHeight(e.target.value);
  };
  const handleOptionChange5 = (e) => {
    setColor(e.target.value);
  };
  const handleOptionChange6 = (e) => {
    setWeight(e.target.value);
  };
  const handleOptionChange7 = (e) => {
    setBlood(e.target.value);
  };
  const handleOptionChange8 = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting (you can handle form submission here)
  };

  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1
        style={{ color: Colors.titleText }}
        className="text-2xl font-semibold mb-3"
      >
        সাধারণ তথ্য
      </h1>
      <div className="w-[100%] border-t-[1.8px] border-solid border-gray-300 mb-6 "></div>
      <form onSubmit={handleSubmit}>
        <Select
          title="বায়োডাটার ধরণ"
          options={bioDataTypes}
          value={bioType}
          setValue={setBioType}
          required
        />

        <Select
          title="বৈবাহিক অবস্থা "
          required
          value={status}
          setValue={setStatus}
          options={maritalStatus}
        />

        <Input
          title={"জন্মসন "}
          value={dob}
          setValue={setDob}
          required
          type="date"
        />

        <Select
          title="উচ্চতা "
          required
          value={height}
          setValue={setHeight}
          options={heights}
        />

        <Select
          title="গাত্রবর্ণ"
          required
          value={color}
          setValue={setColor}
          options={screenColors}
        />

        <Input
          title={"ওজন (KG) "}
          value={weight}
          setValue={setWeight}
          required
          type="text"
        />

        <Select
          title="রক্তের গ্রুপ "
          required
          value={blood}
          setValue={setBlood}
          options={bloodGroup}
        />
        <Select
          title="জাতীয়তা "
          required
          value={nationality}
          setValue={setNationality}
          options={nationalities}
        />

        <div className="flex items-center my-5 justify-between">
          <button
            type="button"
            onClick={backButtonHandler}
            className="bg-gray-700 text-xl  px-5 text-white py-2  rounded-3xl"
          >
            Back
          </button>
          <button
            type="submit"
            className="text-xl  px-5 text-white py-2 rounded-3xl"
            style={{
              background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight})`,
            }}
          >
            Save & Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfoForm;
