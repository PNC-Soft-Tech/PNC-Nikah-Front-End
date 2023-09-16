import { useState } from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import {
  afterSscOptions,
  classType,
  deenStatusOptions,
  educationOptions,
  educationTypeOptions,
  group,
  hscOptions,
  result,
} from "./educationQualification.constant";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";

const EducationalQualificationForm = () => {
  const [eduType, setEduType] = useState("");
  const [status, setStatus] = useState("");
  const [maxEdu, setMaxEdu] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [othersEdu, setOthersEdu] = useState("");
  const [sscPassYear, setSscPassYear] = useState("");
  const [sscGroup, setSscGroup] = useState("");
  const [sscResult, setSscResult] = useState("");
  const [hscRunning, setHscRunning] = useState("");
  const [hscPassYear, setHscPassYear] = useState("");
  const [hscGroup, setHscGroup] = useState("");
  const [hscResult, setHscResult] = useState("");
  const [diplomaInst, setDiplomaInst] = useState("");
  const [diplomaSub, setDiplomaSub] = useState("");
  const [diplomaYear, setDiplomaYear] = useState("");
  const [diplomaPassYear, setDiplomaPassYear] = useState("");
  const [diplomaResult, setDiplomaResult] = useState("");
  const [afterSsc, setAfterSsc] = useState("");
  const [bscInst, setBscInst] = useState("");
  const [bscSub, setBscSub] = useState("");
  const [bscYear, setBscYear] = useState("");

  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [passYear, setPassYear] = useState("");
  const backButtonHandler = () => {
    if (userForm > 1) {
      setUserForm((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-5">
      <h3
        style={{ color: Colors.titleText }}
        className="text-2xl font-semibold mb-3"
      >
        শিক্ষাগত যোগ্যতা
      </h3>
      <hr />
      <form action="">
        <Select
          title="আপনার শিক্ষা মাধ্যম"
          value={eduType}
          setValue={setEduType}
          options={educationTypeOptions}
          required
        />
        {eduType && (
          <>
            <Select
              title=" সর্বোচ্চ শিক্ষাগত যোগ্যতা"
              value={maxEdu}
              setValue={setMaxEdu}
              options={educationOptions}
              required
            />

            {maxEdu === "এস.এস.সি'র নিচে" ? (
              <Select
                title="আপনি কোন ক্লাস পর্যন্ত পড়াশুনা করেছেন?"
                value={selectedClass}
                setValue={setSelectedClass}
                options={classType}
                required
              />
            ) : maxEdu === "এস.এস.সি" ? (
              <>
                {" "}
                <Input
                  title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
                  value={sscPassYear}
                  setValue={setSscPassYear}
                />
                <Select
                  title="বিভাগ"
                  value={sscGroup}
                  setValue={setSscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sscResult}
                  setValue={setSscResult}
                  options={result}
                  required
                />
                <Select
                  title=" এইচ.এস.সি / আলিম / সমমান কোন বর্ষে পড়ছেন ?"
                  value={hscRunning}
                  setValue={setHscRunning}
                  options={hscOptions}
                />
              </>
            ) : maxEdu === "এইচ.এস.সি" ? (
              <>
                {" "}
                <Input
                  title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
                  value={sscPassYear}
                  setValue={setSscPassYear}
                />
                <Select
                  title="বিভাগ"
                  value={sscGroup}
                  setValue={setSscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sscResult}
                  setValue={setSscResult}
                  options={result}
                  required
                />
                <Input
                  title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
                  value={hscPassYear}
                  setValue={setHscPassYear}
                />
                <Select
                  title="বিভাগ"
                  value={hscGroup}
                  setValue={setHscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={hscResult}
                  setValue={setHscResult}
                  options={result}
                  required
                />
              </>
            ) : maxEdu === "ডিপ্লোমা চলমান" ? (
              <>
                <Input
                  title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
                  value={sscPassYear}
                  setValue={setSscPassYear}
                />
                <Select
                  title="বিভাগ"
                  value={sscGroup}
                  setValue={setSscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sscResult}
                  setValue={setSscResult}
                  options={result}
                  required
                />

                <Input
                  title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
                  value={diplomaSub}
                  setValue={setDiplomaSub}
                  placeholder="ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                />

                <Input
                  title="শিক্ষাপ্রতিষ্ঠানের নাম"
                  value={diplomaInst}
                  setValue={setDiplomaInst}
                  placeholder="ঢাকা পলিটেকনিক ইনস্টিটিউট"
                />
                <Input
                  title="  এখন কোন বর্ষে পড়ছেন?"
                  value={diplomaYear}
                  setValue={setDiplomaYear}
                  placeholder=""
                />
              </>
            ) : maxEdu === "ডিপ্লোমা" ? (
              <>
                <Input
                  title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
                  value={sscPassYear}
                  setValue={setSscPassYear}
                />
                <Select
                  title="বিভাগ"
                  value={sscGroup}
                  setValue={setSscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sscResult}
                  setValue={setSscResult}
                  options={result}
                  required
                />

                <Input
                  title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
                  value={diplomaSub}
                  setValue={setDiplomaSub}
                  placeholder="ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                />

                <Input
                  title="শিক্ষাপ্রতিষ্ঠানের নাম"
                  value={diplomaInst}
                  setValue={setDiplomaInst}
                  placeholder="ঢাকা পলিটেকনিক ইনস্টিটিউট"
                />
                <Input
                  title="পাসের বছর "
                  value={diplomaPassYear}
                  setValue={setDiplomaPassYear}
                  placeholder="২০১৬"
                />
              </>
            ) : maxEdu === "স্নাতক চলমান" ? (
              <>
                <Input
                  title=" এস.এস.সি / দাখিল / সমমান পাসের সন "
                  value={sscPassYear}
                  setValue={setSscPassYear}
                  required
                />
                <Select
                  title="বিভাগ"
                  value={sscGroup}
                  setValue={setSscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sscResult}
                  setValue={setSscResult}
                  options={result}
                  required
                />
                <Select
                  title="SSC পরে কোন মাধ্যমে পড়াশুনা করেছেন? "
                  value={afterSsc}
                  setValue={setAfterSsc}
                  options={afterSscOptions}
                  required
                />
                <Input
                  title="এইচ.এস.সি / আলিম / সমমান পাসের সন "
                  value={hscPassYear}
                  setValue={setHscPassYear}
                  required
                />
                <Select
                  title="বিভাগ"
                  value={hscGroup}
                  setValue={setHscGroup}
                  options={group}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={hscResult}
                  setValue={setHscResult}
                  options={result}
                  required
                />{" "}
                {afterSsc === "ডিপ্লোমা" && (
                  <>
                    <Input
                      title="ডিপ্লোমা কোন বিষয়ে পড়েছেন?"
                      value={diplomaSub}
                      setValue={setDiplomaSub}
                      placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                      required
                    />
                    <Input
                      title=" শিক্ষাপ্রতিষ্ঠানের নাম"
                      value={diplomaInst}
                      setValue={setDiplomaInst}
                      placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                      required
                    />
                    <Input
                      title=" পাসের বছর  "
                      value={diplomaPassYear}
                      setValue={setDiplomaPassYear}
                      placeholder=""
                      required
                    />
                  </>
                )}
                <Input
                  title=" স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়"
                  value={bscSub}
                  setValue={setBscSub}
                  placeholder="বিএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                  required
                />
                <Input
                  title=" শিক্ষাপ্রতিষ্ঠানের নাম"
                  value={bscInst}
                  setValue={setBscInst}
                  placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                  required
                />
                <Input
                  title="কোন বর্ষে পড়ছেন? "
                  value={bscYear}
                  setValue={setBscYear}
                  placeholder=""
                  required
                />
              </>
            ) : (
              <></>
            )}
          </>
        )}

        <Textarea
          title="অন্যান্য শিক্ষাগত যোগ্যতা"
          value={othersEdu}
          setValue={setOthersEdu}
        />
        <Select
          title="দ্বীনি শিক্ষাগত পদ্ববীসমূহ"
          value={status}
          setValue={setStatus}
          options={deenStatusOptions}
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
            className=" text-xl rounded-3xl  px-5 text-white py-2 "
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

export default EducationalQualificationForm;
