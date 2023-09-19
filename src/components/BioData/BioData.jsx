/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import { Colors } from "../../constants/colors";
import { getDateMonthYear } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../constants/ScrolltoTop";

const BioData = ({ biodata }) => {
  const navigate = useNavigate();

  const bioDataHandler = () => {
    navigate(`/biodata/${biodata.user_id}`);
  };
  return (
    <div className="my-5 hover:shadow-2xl transition-all  duration-300 ease-in rounded-md border-2">
      <ScrollToTop />
      <div
        style={{
          backgroundColor: Colors.pncPrimaryColor,
        }}
        className="h-[200px] flex  flex-col justify-center rounded-t-md text-white"
      >
        <img
          className="w-16 h-16 mx-auto rounded-full "
          src={biodata?.gender === "মহিলা" ? female : male}
          alt=""
        />
        <h4 className="my-2"> বায়োডাটা নং </h4>
        <h3>{biodata.user_id}</h3>
      </div>
      <div className="mx-2 mt-4">
        <table className="min-w-full divide-y divide-gray-200 border-0 border-gray-300">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r border-t border-b">
                জন্মসন
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-t">
                {getDateMonthYear(biodata.date_of_birth)}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r  border-b">
                উচ্চতা{" "}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                <span>{biodata.height}</span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r border-b">
                গাত্রবর্ন{" "}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                {biodata.screen_color}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <Button
          onClick={bioDataHandler}
          className=" rounded-3xl"
          style={{
            background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
          }}
        >
          {" "}
          সম্পূর্ন বায়োডাটা{" "}
        </Button>
      </div>
    </div>
  );
};

export default BioData;
