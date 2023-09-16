import { useContext } from "react";
import BioContext from "../../contexts/BioContext";

const PersonalInfo = () => {
  const { bio } = useContext(BioContext);
  const personalInfo = bio?.personalInfo || null;
  const generalInfo = bio?.generalInfo || null;

  return (
    <div className="single-bio-personal-info border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">ব্যক্তিগত তথ্য</h5>
      <table className="table-auto w-full">
        <tbody>
          {generalInfo?.gender === "মহিলা" ||
          generalInfo?.bio_type === "পাত্রীর বায়োডাটা" ? (
            <>
              <tr className="border-b border-t">
                <td className="px-4 py-2 text-left  w-1/2">
                  ঘরের বাহিরে সাধারণত কি ধরণের পোষাক পরেন?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.outside_clothings}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  কবে থেকে নিকাব সহ পর্দা করছেন?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.porda_with_niqab_from}
                </td>
              </tr>
            </>
          ) : (
            <>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  সুন্নতি দাঁড়ি আছে (১ মুষ্টি)?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.isBeard === true ? "হ্যা" : "না"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  সুন্নতি দাঁড়ি কত বছর যাবত?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.from_beard}
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  টাখ্নুর উপর পোশাক পড়া হয় কবে থেকে?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.takhnu_from}
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  প্রতিদিন পাঁচ ওয়াক্ত নামাজ জামায়াতে পড়েন কি?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.isDailyFiveJamaat === true
                    ? "জি আলহামদুলিল্লাহ"
                    : "না"}
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-left  w-1/2">
                  প্রতিদিন পাঁচ ওয়াক্ত কবে থেকে নিয়মিত জামায়াতে পড়ছেন?
                </td>
                <td className="px-4 py-2 text-left  w-1/2 border-l">
                  {personalInfo?.daily_five_jamaat_from}
                </td>
              </tr>
            </>
          )}

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়েন কি? কবে থেকে পড়ছেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.isDailyFive === true ? "জি আলহামদুলিল্লাহ" : "না"},
              {personalInfo?.daily_five_from}
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              সাধারণত সপ্তাহে কত ওয়াক্ত নামায আপনার কাযা হয়?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.qadha_weekly}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              মাহরাম/নন-মাহরাম(অনলাইন-অফলাইন) মেনে চলেন কি?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.mahram_non_mahram}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.quran_tilawat}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              কোন ফিকহ অনুসরণ করেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.fiqh}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              কোন আকিদা অনুসরণ করেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {" "}
              {personalInfo?.aqidah}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              নাটক / সিনেমা / সিরিয়াল / গান এসব দেখেন বা শুনেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.natok_cinema}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              আপনার শারীরিক কোনো রোগ আছে?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.physical_problem}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              আপনার মানসিক কোনো রোগ আছে?{" "}
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.mental_problem}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.special_deeni_mehnot}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.mazar}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              আপনার পছন্দের অন্তত ৩ টি ইসলামি বই এর নাম লিখুন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.islamic_books}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.islamic_scholars}
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              কোনো নেশাদ্রব্য পান করেন?
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              {personalInfo?.isNeshaDrobbo === true
                ? "না,আলহামদুলিল্লাহ"
                : "হ্যাঁ "}
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-4 py-2 text-left  w-1/2">
              নিজের সম্পর্কে কিছু লিখুন
            </td>
            <td className="px-4 py-2 text-left  w-1/2 border-l">
              <p>{personalInfo?.about_me}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonalInfo;
