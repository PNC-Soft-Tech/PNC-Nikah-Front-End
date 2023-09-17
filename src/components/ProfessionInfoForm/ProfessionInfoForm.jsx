import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import { occupationOptions } from "./professionInfoForm.constant";

const ProfessionInfoForm = () => {
  const [occupation, setOccupation] = useState();
  const [income, setIncome] = useState("");
  const [occupationInfo, setOccupationInfo] = useState();
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
      </form>
    </div>
  );
};

export default ProfessionInfoForm;
