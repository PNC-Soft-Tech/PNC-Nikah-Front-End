/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import {
  financialOptions,
  isFatherAliveOptions,
  quantityOptions,
} from "./familyInfoForm.constant";
import { Colors } from "../../constants/colors";

const FamilyInfoForm = ({ setUserForm, userForm }) => {
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [isFatherAlive, setIsFatherAlive] = useState("");
  const [isMotherAlive, setIsMotherAlive] = useState("");
  const [numOfBrother, setNumOfBrother] = useState("");
  const [numOfSister, setNumOfSister] = useState("");
  const [brothersInfo, setBrothersInfo] = useState("");
  const [sistersInfo, setSistersInfo] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [motherJob, setMotherJob] = useState("");
  const [economicInfo, setEconomicInfo] = useState("");
  const [economicStatus, setEconomicStatus] = useState("");
  const [uncleInfo, setUncleInfo] = useState("");
  const [familyDeen, setFamilyDeen] = useState("");
  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div>
      <FormTitle title="পারিবারিক তথ্য" />
      <form action="">
        <Input
          title="পিতার নাম"
          subtitle="শুধুমাত্র কর্তৃপক্ষের জন্য"
          value={fatherName}
          setValue={setFatherName}
          required
        />
        <Select
          title="আপনার পিতা কি জীবিত?"
          value={isFatherAlive}
          setValue={setIsFatherAlive}
          options={isFatherAliveOptions}
          required
        />

        <Input
          title="পিতার পেশার বিবরণ"
          subtitle="চাকরীজীবি হলে প্রতিষ্ঠানের ধরণ এবং পদবী, আর ব্যবসায়ী হলে কী ধরণের ব্যবসা করেন/করতেন ইত্যাদি বিস্তারিত লিখবেন।"
          value={fatherJob}
          setValue={setFatherJob}
          required
        />

        <Input
          title="মাতার নাম "
          subtitle="শুধুমাত্র কর্তৃপক্ষের জন্য"
          value={motherName}
          setValue={setMotherName}
          required
        />
        <Select
          title="আপনার মাতা কি জীবিত?"
          value={isMotherAlive}
          setValue={setIsMotherAlive}
          options={isFatherAliveOptions}
          required
        />

        <Input
          title="মাতার পেশার বিবরণ"
          value={motherJob}
          setValue={setMotherJob}
          required
        />
        <Select
          title="আপনার কতজন ভাই আছে?"
          value={numOfBrother}
          setValue={setNumOfBrother}
          options={quantityOptions}
          required
        />

        <Textarea
          title="ভাইদের তথ্য"
          subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
          value={brothersInfo}
          setValue={setBrothersInfo}
          required
        />
        <Select
          title="আপনার কতজন বোন আছে?"
          value={numOfSister}
          setValue={setNumOfSister}
          options={quantityOptions}
          required
        />
        <Textarea
          title="বোনদের তথ্য "
          subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
          value={sistersInfo}
          setValue={setSistersInfo}
          required
        />

        <Textarea
          title="চাচা মামাদের পেশা "
          subtitle="শিক্ষাগত যোগ্যতা, বৈবাহিক অবস্থা এবং পেশা লিখবেন। একাধিক ভাই থাকলে কমা দিয়ে নিচের লাইনে লিখবেন।"
          value={uncleInfo}
          setValue={setUncleInfo}
          required
        />

        <Select
          title="পারিবারিক অর্থনৈতিক অবস্থা "
          value={economicStatus}
          setValue={setEconomicStatus}
          options={financialOptions}
          required
        />

        <Textarea
          title="অর্থনৈতিক অবস্থার বর্ণনা "
          value={economicInfo}
          setValue={setEconomicInfo}
          required
        />
        <Textarea
          title="পারিবারিক দ্বীনি পরিবেশ কেমন?"
          value={familyDeen}
          setValue={setFamilyDeen}
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

export default FamilyInfoForm;
