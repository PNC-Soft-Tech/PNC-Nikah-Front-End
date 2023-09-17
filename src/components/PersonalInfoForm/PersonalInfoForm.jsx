/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import {
  fiqhOptions,
  personalCategoryOptions,
} from "./personalInfoForm.constant";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";

const PersonalInfoForm = ({ setUserForm, userForm }) => {
  const [cloth, setCloth] = useState("");
  const [isDeenContribution, setIsDeenContribution] = useState("");
  const [mazar, setMazar] = useState("");
  const [fiqh, setFiqh] = useState("");
  const [personalCategory, setPersonalCategory] = useState("");
  const [salatKaza, setSalatKaza] = useState("");
  const [fromWhenBeard, setFromWhenBeard] = useState("");
  const [fromWhenNikhab, setFromWhenNikhab] = useState("");
  const [uponTakhno, setUponTakhno] = useState("");
  const [isFiveSalat, setIsFiveSalat] = useState("");
  const [isMahram, setIsMahram] = useState("");
  const [isNatok, setIsNatok] = useState("");
  const [isPureRecite, setIsPureRecite] = useState("");
  const [isDisease, setIsDisease] = useState("");
  const [books, setBooks] = useState("");
  const [scholars, setScholars] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [acceptIslam, setAcceptIslam] = useState("");
  const [phone, setPnoe] = useState("");

  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-5">
      <FormTitle title="ব্যক্তিগত তথ্য" />
      <form action="">
        <Input
          title="ঘরের বাহিরে সাধারণত কি ধরণের পোষাক পরেন?"
          value={cloth}
          setValue={setCloth}
          required
        />
        <Input
          title=" কবে থেকে নিকাব সহ পর্দা করছেন?"
          value={fromWhenNikhab}
          setValue={setFromWhenNikhab}
          required
        />
        <Input
          title=" সুন্নতি দাড়ি আছে কি না? কবে থেকে রেখেছেন?"
          value={fromWhenBeard}
          setValue={setFromWhenBeard}
          required
        />

        <Input
          title="টাখনুর উপরে কাপড় পরেন? "
          value={uponTakhno}
          setValue={setUponTakhno}
          required
        />

        <Input
          title="প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়েন কি? কবে থেকে পড়ছেন? "
          value={isFiveSalat}
          setValue={setIsFiveSalat}
          required
        />
        <Input
          title="সাধারণত সপ্তাহে কত ওয়াক্ত নামায আপনার কাযা হয়?"
          value={salatKaza}
          setValue={setSalatKaza}
          required
        />
        <Input
          title=" মাহরাম/নন-মাহরাম মেনে চলেন কি?"
          value={isMahram}
          setValue={setIsMahram}
          required
        />
        <Input
          title="শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?"
          value={isPureRecite}
          setValue={setIsPureRecite}
          required
        />
        <Select
          title="কোন ফিকহ অনুসরণ করেন?"
          options={fiqhOptions}
          value={fiqh}
          setValue={setFiqh}
        />

        <Input
          title="নাটক / সিনেমা / সিরিয়াল / গান এসব দেখেন বা শুনেন?"
          value={isNatok}
          setValue={setIsNatok}
          required
        />

        <Input
          title="আপনার মানসিক বা শারীরিক কোনো রোগ আছে?"
          value={isDisease}
          setValue={setIsDisease}
          required
        />
        <Input
          title="দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন? "
          value={isDeenContribution}
          setValue={setIsDeenContribution}
          required
        />
        <Input
          title="মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি? "
          value={mazar}
          setValue={setMazar}
          required
        />
        <Input
          title="আপনার পড়া হয়েছে এমন অন্তত ৩ টি ইসলামি বই এর নাম লিখুন "
          value={books}
          setValue={setBooks}
          required
        />

        <Input
          title="আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন"
          value={scholars}
          setValue={setScholars}
          required
        />
        <Select
          title="আপনার ক্ষেত্রে প্রযোজ্য হয় এমন ক্যাটাগরি সিলেক্ট করুন। (অন্যথায় ঘরটি ফাঁকা রাখুন) "
          options={personalCategoryOptions}
          value={personalCategory}
          setValue={setPersonalCategory}
        />
        <Textarea
          title="নিজের সম্পর্কে কিছু লিখুন "
          value={aboutMe}
          required
          setValue={setAboutMe}
        />
        <Textarea
          title="আপনার ইসলাম গ্রহণের সময় ও ঘটনা উল্লেখ করুন"
          value={acceptIslam}
          setValue={setAcceptIslam}
          required
        />
        <Input
          title="পাত্রীর মোবাইল নাম্বার"
          value={phone}
          setValue={setPnoe}
          required
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

export default PersonalInfoForm;
