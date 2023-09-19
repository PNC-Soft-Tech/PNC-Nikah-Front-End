/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import { Colors } from "../../constants/colors";

const ContactInfoForm = ({ userForm, setUserForm }) => {
  const [patriName, setPatriName] = useState("");
  const [patroName, setPatroName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");

  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div>
      <FormTitle title="যোগাযোগ" />
      <form action="">
        <Input
          title="পাত্রীর নাম"
          required
          value={patriName}
          setValue={setPatriName}
          subtitle="পূর্ণ নাম লিখুন"
        />
        <Input
          title="পাত্রের নাম "
          required
          value={patroName}
          setValue={setPatroName}
          subtitle="পূর্ণ নাম লিখুন"
        />
        <Input
          title="অভিভাবকের মোবাইল নাম্বার  "
          required
          value={phone}
          setValue={setPhone}
          subtitle="কেউ আপনার অভিভাবকের সাথে যোগাযোগ করতে চাইলে এই নাম্বারটি দেয়া হবে। এই নাম্বারে কল দিয়ে ভেরিফাই করার পর বায়োডাটা এপ্রুভ করা হবে। এখানে <b>বন্ধু, কলিগ, কাজিন বা পাত্রপাত্রীর নিজের নাম্বার </b>
        লিখলে বায়োডাটা স্থায়ীভাবে ব্যান করা হবে।"
        />

        <Input
          title="অভিভাবকের সাথে সম্পর্ক "
          required
          value={relation}
          setValue={setRelation}
          subtitle="উক্ত অভিভাবক আপনার সম্পর্কে কি হয় তা লিখুন। যেমনঃ বাবা।"
        />

        <Input
          title="বায়োডাটা গ্রহণের ই-মেইল "
          required
          value={email}
          setValue={setEmail}
          subtitle="অনাকাঙ্ক্ষিত ঘটনা এড়াতে, সম্ভব হলে অভিভাবকের মেইল এড্রেস লিখুন।"
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

export default ContactInfoForm;
