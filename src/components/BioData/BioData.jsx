/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import female from "../../assets/icons/female.svg";
import male from "../../assets/icons/male.svg";
import { Colors } from "../../constants/colors";

const BioData = ({ biodata }) => {
  console.log(biodata);
  return (
    <div className="my-5 hover:shadow-2xl transition-all  duration-300 ease-in rounded-md border-2">
      <div
        style={{ backgroundColor: Colors.primary900 }}
        className="h-[200px] flex  flex-col justify-center rounded-t-md text-white"
      >
        <img
          className="w-16 h-16 mx-auto rounded-full "
          src={biodata?.gender === "female" ? female : male}
          alt=""
        />
        <h4 className="my-2"> বায়োডাটা নং </h4>
        <h3>{biodata.biodataid}</h3>
      </div>
      <div className="mx-2">
        <table className="min-w-full divide-y divide-gray-200 border-0 border-gray-300">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r border-b">
                জন্মসন
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                {biodata.birthday}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r  border-b">
                উচ্চতা{" "}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                <span>
                  {biodata.height.foot}&lsquo; {biodata.height.inch}&quot;
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-r border-b">
                গাত্রবর্ন{" "}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                {biodata.screencolor}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <Button className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl">
          {" "}
          সম্পূর্ন বায়োডাটা{" "}
        </Button>
      </div>
    </div>
  );
};

export default BioData;
