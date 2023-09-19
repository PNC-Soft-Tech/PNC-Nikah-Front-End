/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";

const MaritalInfoForm = ({ userForm, setUserForm }) => {
  const [wifeDeadInfo, setWifeDeadInfo] = useState("");
  const [whenHusbandDead, setWhenHusbandDead] = useState("");
  const [divorcedDescription, setDivorceDescription] = useState("");
  const [whyMariedAnother, setWhyMariedAnother] = useState("");
  const [whyMarry, setWhyMarry] = useState("");
  const [hopeForGift, setHopeForGift] = useState("");
  const [isWifeEducation, setIsWifeEducation] = useState("");
  const [isFamilyAgree, setIsFamilyAgree] = useState("");
  const [isRunningJob, setIsRunningJob] = useState("");
  const [isJob, setIsJob] = useState("");
  const [isRunningStudy, setIsRunningStudy] = useState("");
  const [isWifePorda, setIsWifePorda] = useState("");
  const [quantityWifeAndChildren, setqQuantityWifeAndChildren] = useState("");
  const [isWifeJob, setIsWifeJob] = useState("");
  const [afterMarryWhere, setAfterMarryWhere] = useState("");

  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div>
      <FormTitle title="বিবাহ সম্পর্কিত তথ্য" />
      <form action="">
        <Textarea
          title=" আপনার স্ত্রী কবে, কিভাবে মারা গিয়েছিলেন?"
          subtitle="কয় বছরের সংসার ছিল, সন্তান আছে কি না, থাকলে তাদের বয়স সহ বর্ণনা দিবেন।"
          value={wifeDeadInfo}
          setValue={setWifeDeadInfo}
          required
        />
        <Textarea
          title="আপনার স্বামী কবে, কিভাবে মারা গিয়েছিল?"
          subtitle="কয় বছরের সংসার ছিল, সন্তান আছে কি না, থাকলে তাদের বয়স সহ বর্ণনা দিবেন।"
          value={whenHusbandDead}
          setValue={setWhenHusbandDead}
          required
        />
        <Textarea
          title="  আপনার পূর্বের বিবাহ ও ডিভোর্সের তারিখ উল্লেখ করে ডিভোর্সের কারণ লিখুন"
          subtitle="সন্তান থাকলে তাদের বয়স ও কার দায়িত্বে আছে লিখবেন। এছাড়া অন্যান্য বিষয় থাকলে লিখবেন।"
          value={divorcedDescription}
          setValue={setDivorceDescription}
          required
        />

        <Textarea
          title=" বিবাহিত অবস্থায় আবার কেন বিয়ে করতে চাচ্ছেন? "
          subtitle="বর্তমান স্ত্রী আপনার নতুন বিয়েতে রাজি কি না এবং অন্যান্য বিষয়ে বিস্তারিত লিখবেন"
          value={whyMariedAnother}
          setValue={setWhyMariedAnother}
          required
        />

        <Textarea
          title="বর্তমানে আপনার কতজন স্ত্রী ও সন্তান আছে?"
          value={quantityWifeAndChildren}
          setValue={setqQuantityWifeAndChildren}
          required
        />
        <Input
          title="অভিভাবক আপনার বিয়েতে রাজি কি না?"
          required
          value={isFamilyAgree}
          setValue={setIsFamilyAgree}
        />
        <Input
          title="বিয়ের পর স্ত্রীকে পর্দায় রাখতে পারবেন?"
          required
          value={isWifePorda}
          setValue={setIsWifePorda}
        />

        <Input
          title="  বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান? "
          required
          value={isWifeEducation}
          setValue={setIsWifeEducation}
        />

        <Input
          title="বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?"
          required
          value={isWifeJob}
          setValue={setIsWifeJob}
        />
        <Input
          title=" আপনি কি বিয়ের পর চাকরি করতে ইচ্ছুক?"
          required
          value={isJob}
          setValue={setIsJob}
        />
        <Input
          title="পড়াশোনা চালিয়ে যেতে চান?  "
          required
          value={isRunningStudy}
          setValue={setIsRunningStudy}
        />

        <Input
          title="বিয়ের পর চাকরি চালিয়ে যেতে চান? "
          value={isRunningJob}
          setValue={setIsRunningJob}
          subtitle="কুরীজীবী না হলে ঘরটি ফাঁকা রাখুন।"
        />
        <Input
          title="বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন? "
          required
          value={afterMarryWhere}
          setValue={setAfterMarryWhere}
        />
        <Input
          title="আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে কোনো উপহার আশা করবেন কি না?"
          required
          value={hopeForGift}
          setValue={setHopeForGift}
        />

        <Textarea
          title="কেন বিয়ে করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?"
          value={whyMarry}
          setValue={setWhyMarry}
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
export default MaritalInfoForm;
