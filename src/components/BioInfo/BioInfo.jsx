import female from "../../assets/icons/female.svg";
import { Colors } from "../../constants/colors";

function BioInfo() {
  return (
    <div
      style={{ backgroundColor: Colors.pncPrimaryColor }}
      className=" text-white p-4 rounded-lg shadow-lg w-full "
    >
      <img
        className="rounded-full h-24 w-24 mx-auto"
        src={female}
        alt="Person"
      />
   
      <div className="text-center">
        <h5 className="text-lg font-semibold">Biodata No. 10872</h5>
        <table className="table-auto w-full  mx-auto">
          <thead>
            <tr>
              <td className="px-4 text-left py-2">বায়োডাটার ধরন</td>
              <td className="px-4 text-left py-2">পাত্রীর বায়োডাটা</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 text-left py-2">বৈবাহিক অবস্থা:</td>
              <td className="px-4 text-left py-2">অবিবাহিত</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">জন্মসন</td>
              <td className="px-4 text-left py-2">April, 1998</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">উচ্চতা</td>
              <td className="px-4 text-left py-2">৫′ ৩″</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">গাত্রবর্ণ</td>
              <td className="px-4 text-left py-2">উজ্জ্বল শ্যামলা</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">ওজন</td>
              <td className="px-4 text-left py-2">৫৬ কেজি</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">রক্তের গ্রুপ</td>
              <td className="px-4 text-left py-2">A+</td>
            </tr>
            <tr>
              <td className="px-4 text-left py-2">জাতীয়তা</td>
              <td className="px-4 text-left py-2">বাংলাদেশী</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BioInfo;