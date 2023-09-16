/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cart from "./Cart";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";

const DropdownForm = () => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [bioType, setBioType] = useState("");
  const [status, setStatus] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("40 kg");
  const [blood, setBlood] = useState("");
  const [nationality, setNationality] = useState("");

  const bioDataTypes = ["পাত্রের বায়োডাটা ", "পাত্রীর বায়োডাটা  "];
  const maritalStatus = [
    "অবিবাহিত",
    "বিবাহিত",
    "ডিভোর্সড",
    "বিধবা",
    "বিপত্নীক ",
  ];
  const screenColors = [
    "কালো",
    "শ্যমলা",
    "উজ্জ্বল শ্যামলা",
    "ফর্সা",
    "উজ্জ্বল ফর্সা ",
  ];
  const bloodGroup = ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"];
  const nationalities = ["বাংলাদেশী", "পাকিস্তানী", "ভারতীয়", "অন্যান্য "];
  const heights = [
    "৪ ফুটের কম ",
    "৪'",
    "৪'১'",
    "৪'২'",
    "৪'৩'",
    "৪'৪'",
    "৪'৫'",
    "৪'৬'",
    "৪'৭'",
    "৪'৮'",
    "৪'৯'",
    "৫'",
    "৫'১'",
    "৫'২'",
    "৫'৩'",
    "৫'৪'",
    "৫'৫'",
    "৫'৬'",
    "৫'৭'",
    "৫'৮'",
    "৫'৯'",
    "৬'",
    "৬'২'",
    "৬'৩'",
    "৬'৪'",
    "৬'৫'",
    "৬'৫' ফুটের বেশি ",
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

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-semibold mb-3">সাধারণ তথ্য</h1>
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

        <div className="mt-6 flex flex-row justify-evenly gap-8 ">
          <button
            type="submit"
            className="h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 "
          >
            Back
          </button>

          <button
            type="submit"
            className="h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DropdownForm;
