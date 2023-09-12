import female from "../../assets/icons/female.svg";

function BioInfo() {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
      <img
        className="rounded-full h-24 w-24 mx-auto"
        src={female}
        alt="Person"
      />
      <i className="bi bi-person"></i>
      <div className="text-center">
        <h5 className="text-lg font-semibold">Biodata No. 10872</h5>
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">বায়োডাটার ধরন</th>
              <th className="px-4 py-2">পাত্রীর বায়োডাটা</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">বৈবাহিক অবস্থা:</td>
              <td className="px-4 py-2">অবিবাহিত</td>
            </tr>
            <tr>
              <td className="px-4 py-2">জন্মসন</td>
              <td className="px-4 py-2">April, 1998</td>
            </tr>
            <tr>
              <td className="px-4 py-2">উচ্চতা</td>
              <td className="px-4 py-2">৫′ ৩″</td>
            </tr>
            <tr>
              <td className="px-4 py-2">গাত্রবর্ণ</td>
              <td className="px-4 py-2">উজ্জ্বল শ্যামলা</td>
            </tr>
            <tr>
              <td className="px-4 py-2">ওজন</td>
              <td className="px-4 py-2">৫৬ কেজি</td>
            </tr>
            <tr>
              <td className="px-4 py-2">রক্তের গ্রুপ</td>
              <td className="px-4 py-2">A+</td>
            </tr>
            <tr>
              <td className="px-4 py-2">জাতীয়তা</td>
              <td className="px-4 py-2">বাংলাদেশী</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BioInfo;
