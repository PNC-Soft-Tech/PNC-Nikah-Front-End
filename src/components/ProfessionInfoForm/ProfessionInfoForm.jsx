/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import { occupationOptions } from "./professionInfoForm.constant";
import { Colors } from "../../constants/colors";

const ProfessionInfoForm = ({ userForm, setUserForm }) => {
  const [occupation, setOccupation] = useState();
  const [income, setIncome] = useState("");
  const [occupationInfo, setOccupationInfo] = useState();
  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };
  return (
    <div>
      <FormTitle title="পেশাগত তথ্য" />
      <form action="">
        <Select
          title="পেশা "
          value={occupation}
          options={occupationOptions}
          setValue={setOccupation}
          required
        />
        <Textarea
          title="পেশার বিস্তারিত বিবরণ"
          value={occupationInfo}
          setValue={setOccupationInfo}
          subtitle=" আপনার কর্মস্থল কোথায়, আপনি কোন প্রতিষ্ঠানে কাজ করছেন, আপনার উপার্জন হালাল কি না ইত্যাদি লিখতে পারেন।"
          required
        />
        <Input
          title="মাসিক আয়"
          type="number"
          value={income}
          setValue={setIncome}
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

export default ProfessionInfoForm;
