import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

const MaritalInfo = () => {
  const { bio } = useContext(BioContext);
  const maritalInfo = bio?.maritalInfo || null;
  const generalInfo = bio?.generalInfo || null;
  return (
    <div className="single-bio-marital-info border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">
        বিবাহ সম্পর্কিত তথ্য
      </h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 text-left  w-1/2">
              অভিভাবক আপনার বিয়েতে রাজি কি না?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {maritalInfo?.isFamilyAgree === true
                ? " জি আলহামদুলিল্লাহ"
                : "না"}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              বিয়ের পুরো আয়োজন সুন্নতি নিয়মে করতে চান?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {maritalInfo?.isSunnotiBiya === true
                ? " জি আলহামদুলিল্লাহ"
                : "না"}
            </td>
          </tr>

          {generalInfo?.gender === "মহিলা" ||
          generalInfo?.bio_type === "পাত্রীর বায়োডাটা" ? (
            <>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  আপনি কি বিয়ের পর চাকরি করতে ইচ্ছুক?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  করপোরেট জব করার কোন ইচ্ছা নেই। তবে হালাল ভাবে কিছু করার ইচ্ছা
                  আছে(আলোচনা সাপেক্ষ)
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  বিয়ের পর পড়াশোনা চালিয়ে যেতে চান?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {maritalInfo?.permission_for_study === true
                    ? " জি আলহামদুলিল্লাহ"
                    : "না"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  তালাক হয়ে থাকলে কারণ উল্লেখ করুন
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {maritalInfo?.devorced_reason === true
                    ? " জি "
                    : "না আলহামদুলিল্লাহ"}
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  তালাক হয়ে থাকলে এবং সন্তান থাকলে সন্তান সম্পর্কে বিস্তারিত
                  উল্লেখ করুন
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {maritalInfo?.children_details}
                </td>
              </tr>
            </>
          ) : (
            <>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  আপনি কি বিয়ের পর বউকে চাকরি করতে দিতে ইচ্ছুক?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  কোন ইচ্ছা নেই(আলোচনা সাপেক্ষ)
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  বিয়ের পর আহলিয়াকে পড়াশোনা চালিয়ে যেতে দিতে চান?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  জি ইনশাআল্লাহ
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  বিয়ের পর থাকবেন কোথায়?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {maritalInfo?.after_marriage_where}
                </td>
              </tr>
            </>
          )}

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              বিয়েতে যৌতুক নিবেন বা দিবেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {" "}
              {maritalInfo?.isJoutuk === true ? " জি " : "কখনই না"}
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              কেন বিয়ে করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {maritalInfo?.why_marriage}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MaritalInfo;
