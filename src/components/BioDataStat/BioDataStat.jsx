import { Colors } from "../../constants/colors";

const BioDataStat = () => {
  return (
    <>
      <div
        className="single-bio-left-sidebar-stats card-left px-2 mx-[2px] rounded-md text-white shadow-md"
        style={{ backgroundColor: Colors.pncPrimaryColor }}
      >
        <h5 className="card-titlee text-lg text-center my-4 pt-5">STATS:</h5>
        <table className="w-full  mx-auto py-10">
          <thead>
            <tr className="border-b">
              <td className="px-4 text-left  py-2">Total Views</td>
              <td className="px-4 text-left  py-2">237</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 text-left  py-2">Total Pending:</td>
              <td className="px-4 text-left  py-2">2</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 text-left  py-2">Total Approved</td>
              <td className="px-4 text-left  py-2">29</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 text-left  py-2">Total Rejected</td>
              <td className="px-4 text-left  py-2">45</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 text-left  py-2">Approval Rate</td>
              <td className="px-4 text-left  py-2">36%</td>
            </tr>
            <tr>
              <td className="px-4 text-left  py-2">Rejection Rate</td>
              <td className="px-4 text-left  py-2">64%</td>
            </tr>
          </tbody>
        </table>
        <div className="h-5"></div>
      </div>

      <div className="h-4"></div>
      <div className="flex justify-center md:mb-0 mb-5">
        <button
          style={{ backgroundColor: Colors.pncPrimaryColor }}
          className="copy-biodata-link mx-auto text-white py-3 px-10 rounded-full"
        >
          Copy Biodata Link
        </button>
      </div>
    </>
  );
};

export default BioDataStat;
