import { useEffect, useState } from "react";
import BioData from "../BioData/BioData";

const BioDatasGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("biodatas.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <div className="w-full mx-5  mt-5">
      <h1 className="text-3xl font-semibold text-gray-700 mb-2">
        বায়োডাটা সমূহ
      </h1>
      <p className="text-gray-500">২০০ টি বায়োডাটা পাওয়া গেছে </p>
      <div className="w-[200px] text-right ml-auto">
        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="নতুন">নতুন</option>
          <option value="পুরাতন">পুরাতন</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data?.length > 0 &&
          data.map((biodata, index) => {
            return <BioData key={index} biodata={biodata} />;
          })}
      </div>
    </div>
  );
};

export default BioDatasGrid;
