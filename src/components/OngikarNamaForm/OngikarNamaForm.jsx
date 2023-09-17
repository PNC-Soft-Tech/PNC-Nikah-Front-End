/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Select from "../Select/Select";
import { Colors } from "../../constants/colors";

const OngikarNamaForm = ({ userForm, setUserForm }) => {
  const [isAgree, setIsAgree] = useState("");
  const [isTrue, setIsTrue] = useState("");
  const [isFamilyKnow, setIsFamilyKnow] = useState("");

  const conditionOptions = [
    {
      value: "হ্যা",
    },
    {
      value: "না",
    },
  ];
  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };
  return (
    <div>
      <FormTitle title="অঙ্গীকারনামা" />
      <form action="">
        <Select
          required
          value={isFamilyKnow}
          setValue={setIsFamilyKnow}
          options={conditionOptions}
          title="OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন, তা আপনার অভিভাবক জানেন?"
        />

        <Select
          required
          value={isTrue}
          setValue={setIsTrue}
          options={conditionOptions}
          title="আল্লাহ &#039;র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিয়েছেন সব সত্য?"
        />

        <Select
          required
          value={isAgree}
          setValue={setIsAgree}
          options={conditionOptions}
          title="কোনো মিথ্যা তথ্য প্রদান করলে দুনিয়াবী আইনগত এবং আখিরাতের দায়ভার OrdhekDeen.com কর্তৃপক্ষ নিবে না। আপনি কি সম্মত?"
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

export default OngikarNamaForm;
