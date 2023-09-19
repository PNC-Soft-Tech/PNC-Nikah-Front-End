import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

function EducationInfo() {
  const { bio } = useContext(BioContext);
  const eductionInfo = bio?.educationQualification || null;

  return (
    <div className="single-bio-educational-qualification border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">শিক্ষাগত যোগ্যতা</h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 text-left  w-1/2">আপনার শিক্ষা মাধ্যম</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.education_medium}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              এস.এস.সি / দাখিল / সমমান পাসের সন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.ssc_year}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">বিভাগ</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.ssc_group}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">ফলাফল</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.ssc_result}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              এইচ.এস.সি / আলিম / সমমান পাসের সন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.after_ssc}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">বিভাগ</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.after_ssc_group}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">ফলাফল</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.after_ssc_result}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              স্নাতক / স্নাতক (সম্মান) / ফাজিল পড়াশোনার বিষয়
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.hons_sub}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              শিক্ষাপ্রতিষ্ঠানের নাম
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.hons_inst}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">পাসের সন</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.hons_year}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              অন্যান্য শিক্ষাগত যোগ্যতা{" "}
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.others_edu}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              কোনো দ্বীনি শিক্ষাগত যোগ্যতা
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {eductionInfo?.deeni_edu}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EducationInfo;
