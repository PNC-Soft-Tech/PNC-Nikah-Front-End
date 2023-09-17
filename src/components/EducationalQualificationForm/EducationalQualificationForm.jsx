/* eslint-disable react/prop-types */
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
  qawmiEducationOptions,
  qawmiResult,
  result,
} from "./educationQualification.constant";
import Textarea from "../Textarea/Textarea";
import { Colors } from "../../constants/colors";

const EducationalQualificationForm = ({ setUserForm, userForm }) => {
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
  const [afterSsc, setAfterSsc] = useState("");
  const [bscInst, setBscInst] = useState("");
  const [bscSub, setBscSub] = useState("");
  const [bscYear, setBscYear] = useState("");
  const [bscPassYear, setBscPassYear] = useState("");
  const [mscPassYear, setMscPassYear] = useState("");
  const [mscSub, setMscSub] = useState("");
  const [mscInst, setMscInst] = useState("");
  const [phdSub, setPhdSub] = useState("");
  const [phdInst, setPhdInst] = useState("");
  const [phdPassYear, setPhdPassYear] = useState("");
  const [ibtiInst, setIbtiInst] = useState("");
  const [ibtiPassYear, setIbtiPassYear] = useState("");
  const [ibtiResult, setIbtiResult] = useState("");
  const [mutawasInst, setMutawasInst] = useState("");
  const [mutawasResult, setMutawasResult] = useState("");
  const [mutawasPassYear, setMutawasPassYear] = useState("");
  const [sanabiyaInst, setSanaInst] = useState("");
  const [sanabiyaPassYear, setSanabiyaPassYear] = useState("");
  const [sanabiyaResult, setSanabiyaResult] = useState("");
  const [fozilatInst, setFozilatInst] = useState("");
  const [fozilatPassYear, setFozilatPassYear] = useState("");
  const [fozilatResult, setFozilatResult] = useState("");
  const [takmilInst, setTakmilInst] = useState("");
  const [takmilPassYear, setTakmilPassYear] = useState("");
  const [takmilResult, setTakmilResult] = useState("");
  const [takhassusInst, setTakhassusInst] = useState("");
  const [takhassusResult, setTakhassusResult] = useState("");
  const [takhassusPassYear, setTakhassusPassYear] = useState("");
  const [takhassusSub, setTakhassusSub] = useState("");
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
        {eduType === "জেনারেল" || eduType === "আলিয়া" ? (
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

                {afterSsc === "ডিপ্লোমা" ? (
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
                ) : (
                  <>
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
            ) : maxEdu === "স্নাতক" ? (
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

                {afterSsc === "ডিপ্লোমা" ? (
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
                ) : (
                  <>
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
                  title="পাসের সন "
                  value={bscPassYear}
                  setValue={setBscPassYear}
                  placeholder="২০১৬"
                  required
                />
              </>
            ) : maxEdu === "স্নাতকোত্তর" ? (
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

                {afterSsc === "ডিপ্লোমা" ? (
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
                ) : (
                  <>
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
                  title="পাসের সন "
                  value={bscPassYear}
                  setValue={setBscPassYear}
                  placeholder="২০১৬"
                  required
                />

                <Input
                  title="স্নাতকোত্তর / কামিল পড়াশোনার বিষয়"
                  value={mscSub}
                  setValue={setMscSub}
                  placeholder="এমএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                  required
                />

                <Input
                  title="শিক্ষাপ্রতিষ্ঠানের নাম"
                  value={mscInst}
                  setValue={setMscInst}
                  placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                  required
                />

                <Input
                  title="পাসের সন"
                  value={mscPassYear}
                  setValue={setMscPassYear}
                  placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                  required
                />
              </>
            ) : (
              maxEdu === "ডক্টরেট" && (
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

                  {afterSsc === "ডিপ্লোমা" ? (
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
                  ) : (
                    <>
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
                    title="পাসের সন "
                    value={bscPassYear}
                    setValue={setBscPassYear}
                    placeholder="২০১৬"
                    required
                  />

                  <Input
                    title="স্নাতকোত্তর / কামিল পড়াশোনার বিষয়"
                    value={mscSub}
                    setValue={setMscSub}
                    placeholder="এমএসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং"
                    required
                  />

                  <Input
                    title="শিক্ষাপ্রতিষ্ঠানের নাম"
                    value={mscInst}
                    setValue={setMscInst}
                    placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                    required
                  />

                  <Input
                    title="পাসের সন"
                    value={mscPassYear}
                    setValue={setMscPassYear}
                    placeholder="বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়"
                    required
                  />

                  <Input
                    title="ডক্টরেট অধ্যয়নের বিষয়"
                    value={phdSub}
                    setValue={setPhdSub}
                    placeholder=""
                    required
                  />

                  <Input
                    title="শিক্ষাপ্রতিষ্ঠানের নাম"
                    value={phdInst}
                    setValue={setPhdInst}
                    placeholder=""
                    required
                  />

                  <Input
                    title="পাসের সন"
                    value={phdPassYear}
                    setValue={setPhdPassYear}
                    placeholder=""
                    required
                  />
                </>
              )
            )}
          </>
        ) : eduType === "কওমি" ? (
          <>
            <Select
              title=" সর্বোচ্চ শিক্ষাগত যোগ্যতা"
              value={maxEdu}
              setValue={setMaxEdu}
              options={qawmiEducationOptions}
              required
            />

            {maxEdu === "প্রাথমিক দ্বীনি শিক্ষা" ? (
              <></>
            ) : maxEdu === "ইবতিদাইয়্যাহ" ? (
              <>
                {" "}
                <Input
                  title=" ইবতিদাইয়্যাহ কোন মাদ্রাসা থেকে পড়েছেন?"
                  value={ibtiInst}
                  required
                  setValue={setIbtiInst}
                />
                <Select
                  title="ফলাফল"
                  value={ibtiResult}
                  setValue={setIbtiResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={ibtiPassYear}
                  setValue={setIbtiPassYear}
                  required
                />
              </>
            ) : maxEdu === "মুতাওয়াসসিতাহ" ? (
              <>
                {" "}
                <Input
                  title="মুতাওয়াসসিতাহ কোন মাদ্রাসা থেকে পড়েছেন?"
                  value={mutawasInst}
                  setValue={setMutawasInst}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={mutawasResult}
                  setValue={setMutawasResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={mutawasPassYear}
                  setValue={setMutawasPassYear}
                  required
                />
              </>
            ) : maxEdu === "সানাবিয়া উলইয়া" ? (
              <>
                {" "}
                <Input
                  title="সানাবিয়া উলইয়া কোন মাদ্রাসা থেকে পড়েছেন?"
                  value={sanabiyaInst}
                  setValue={setSanaInst}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={sanabiyaResult}
                  setValue={setSanabiyaResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={sanabiyaPassYear}
                  setValue={setSanabiyaPassYear}
                  required
                />
              </>
            ) : maxEdu === "ফযীলত" ? (
              <>
                {" "}
                <Input
                  title="ফযীলত  কোন মাদ্রাসা থেকে পড়েছেন?"
                  value={fozilatInst}
                  setValue={setFozilatInst}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={fozilatResult}
                  setValue={setFozilatResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={fozilatPassYear}
                  setValue={setFozilatPassYear}
                  required
                />
              </>
            ) : maxEdu === "তাকমীল" ? (
              <>
                {" "}
                <Input
                  title="তাকমীল কোন মাদ্রাসা থেকে পড়েছেন? "
                  value={takmilInst}
                  setValue={setTakmilInst}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={takmilResult}
                  setValue={setTakmilResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={takmilPassYear}
                  setValue={setTakmilPassYear}
                  required
                />
              </>
            ) : maxEdu === "তাখাসসুস" ? (
              <>
                {" "}
                <Input
                  title="তাকমীল কোন মাদ্রাসা থেকে পড়েছেন? "
                  value={takmilInst}
                  setValue={setTakmilInst}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={takmilResult}
                  setValue={setTakmilResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={takmilPassYear}
                  setValue={setTakmilPassYear}
                  required
                />
                <Input
                  title="তাখাসসুস কোন মাদ্রাসা থেকে পড়েছেন? "
                  value={takhassusInst}
                  setValue={setTakhassusInst}
                  required
                />
                <Input
                  title=" তাখাসসুসের বিষয়"
                  value={takhassusSub}
                  setValue={setTakhassusSub}
                  required
                />
                <Select
                  title="ফলাফল"
                  value={takhassusResult}
                  setValue={setTakhassusResult}
                  options={qawmiResult}
                  required
                />
                <Input
                  title="পাসের সন"
                  value={takhassusPassYear}
                  setValue={setTakhassusPassYear}
                  required
                />
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
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
