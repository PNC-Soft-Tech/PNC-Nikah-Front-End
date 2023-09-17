import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { screenColorOptions } from "./expectedPartnerForm.constant";

import "./expectedPartner.css";
import DoubleRangeSlider from "../DoubleRangeSlider/DoubleRangeSlider";

const ExpectedPartnerForm = () => {
  const [zilla, setZilla] = useState("");
  const [screenColor, setScreenColor] = useState("");
  const [height, setHeight] = useState("");
  const [educationExpected, setEducationExpected] = useState("");
  const [age, setAge] = useState({
    min: 20,
    max: 30,
  });

  return (
    <div>
      <FormTitle title="প্রত্যাশিত জীবনসঙ্গী" />
      <form action="">
        <label className="text-left text-gray-500 mt-4 mb-5 font-bold block">
          বয়স
        </label>
        <DoubleRangeSlider value={age} setValue={setAge} />

        <Select
          title="গাত্রবর্ণ"
          options={screenColorOptions}
          value={screenColor}
          setValue={setScreenColor}
          subtitle="নিজের মত লিখতে পারবেন পাশাপাশি একাধিক সিলেক্ট করতে পারবেন।"
        />
        <Input
          title="উচ্চতা"
          placeholder=" 5'0'-5'14' "
          value={height}
          setValue={setHeight}
        />

        <Input
          title="শিক্ষাগত যোগ্যতা "
          placeholder=""
          value={educationExpected}
          setValue={setEducationExpected}
        />
        <Input title="জেলা" placeholder="" value={zilla} setValue={setZilla} />
      </form>
    </div>
  );
};

export default ExpectedPartnerForm;
