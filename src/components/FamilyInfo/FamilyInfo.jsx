import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

const FamilyInfo = () => {
  const { bio } = useContext(BioContext);
  const familyStatus = bio?.familyStatus || null;
  return (
    <div className="single-bio-family-info border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">পারিবারিক তথ্য</h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 text-left  w-1/2">আপনার পিতা কি জীবিত?</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {" "}
              {familyStatus?.isFatherAlive === 1 ? "জী, জীবিত" : "মৃত"}{" "}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">পিতার পেশার বিবরণ</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.father_occupation}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">আপনার মাতা কি জীবিত?</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.isMotherAlive ? "জী, জীবিত" : "মৃত"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">মাতার পেশার বিবরণ</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.mother_occupation}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">আপনার কতজন ভাই আছে?</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.number_of_brothers}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">ভাইদের তথ্য</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.brother_info}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">আপনার কতজন বোন আছে?</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.number_of_sisters}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">বোনদের তথ্য</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.sister_info}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">চাচা মামাদের পেশা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.uncle_info}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              পারিবারিক অর্থনৈতিক অবস্থা
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.eco_condition_type}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              অর্থনৈতিক অবস্থার বর্ণনা
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.family_eco_condition}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              পারিবারিক দ্বীনি পরিবেশ কেমন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.family_deeni_info}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              পরিবারে/বাসায় পর্দার পরিবেশ নিছিট করতে পারবেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {familyStatus?.isPordaEnvironment === 1 ? "ইনশাআল্লাহ" : "না"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FamilyInfo;
