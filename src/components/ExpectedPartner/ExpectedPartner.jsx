import BioContext from "../../contexts/BioContext";
import { useContext } from "react";
const ExpectedPartner = () => {
  const { bio } = useContext(BioContext);
  const expectedLifePartner = bio?.expectedLifePartner || null;
  const generalInfo = bio?.generalInfo || null;
  return (
    <div className="single-bio-expected-lifepartner-info border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">
        প্রত্যাশিত জীবনসঙ্গী
      </h5>
      <table className="table-auto w-full">
        <tbody>
          <tr className="border-b border-t">
            <td className="px-4 py-2 text-left  w-1/2">বয়স</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.age}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2"> গাত্রবর্ণ </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.color}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">উচ্চতা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.height}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">শিক্ষাগত যোগ্যতা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l break-all">
              {expectedLifePartner?.educational_qualifications}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">জেলা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l break-all">
              {expectedLifePartner?.zilla}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">বৈবাহিক অবস্থা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.marital_status}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">পেশা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l break-all">
              {expectedLifePartner?.occupation}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">অর্থনৈতিক অবস্থা</td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.economical_condition}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              জীবনসঙ্গীর যেসব বৈশিষ্ট্য বা গুণাবলী প্রত্যাশা করেন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l break-all">
              {expectedLifePartner?.expected_characteristics}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              আকিদা ও মাজহাব কিরকম প্রত্যাশা করেন?{" "}
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.aqidah_madhab}
            </td>
          </tr>
          {generalInfo?.gender === "মহিলা" ||
          generalInfo?.bio_type === "পাত্রীর বায়োডাটা" ? (
            <>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  ছাত্র বিয়ে করতে আগ্রহী?{" "}
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {expectedLifePartner?.isStudent === true ? "জি" : "না"}{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  মাসনা/সুলাসা/রুবায়ায় আগ্রহী?{" "}
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {expectedLifePartner?.isMasna === true ? "জি" : "না"}{" "}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  কমপক্ষে কত মাসিক ইনকাম চান (ইংরেজীতে শুধু সংখ্যা লিখুন)?{" "}
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {expectedLifePartner?.min_expected_income}{" "}
                </td>
              </tr>
            </>
          ) : (
            <>
              {" "}
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  তালাক-প্রাপ্তা বিয়ে করতে আগ্রহী?{" "}
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {expectedLifePartner?.isDivorced_Widow === true ? "জি" : "না"}{" "}
                </td>
              </tr>
            </>
          )}

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              সন্তানসহ বিয়ে করতে আগ্রহী?{" "}
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {expectedLifePartner?.isChild === true ? "জি" : "না"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpectedPartner;
