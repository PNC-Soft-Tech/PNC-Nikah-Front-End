import "./MyReports.css";
import { Button } from "@material-tailwind/react";
import { FaEye, FaTrash } from "react-icons/fa";
const MyReports = () => {
  return (
    <div className=" py-12 mx-auto">
      <div className="">
        {/* <!-- End of Left Sidebar -->*/}
        <div className="col right-sidebar-main my-reports">
          <div className="my-reports-info border-t-2 w-auto rounded shadow">
            <h5 className="card-title text-center text-2xl my-3">
              রিপোর্ট সমূহ
            </h5>
                <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="border-b border-t">
                  <th className="px-4 py-2 text-center w-1/7">SL</th>
                  <th className="px-4 py-2 text-center w-1/7">রিপোর্ট আইডি</th>
                  <th className="px-4 py-2 text-center w-1/7">বায়োডাটা নং</th>
                  <th className="px-4 py-2 text-center w-1/7">স্ট্যাটাস</th>
                  <th className="px-4 py-2 text-center w-1/7">তারিখ</th>
                  <th className="px-4 py-2 text-center w-1/7">নতুন উত্তর</th>
                  <th className="px-4 py-2 text-center w-1/7">অপশন</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center w-1/7 border-l">1</td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                    শ্যামলা
                  </td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                    গাত্রবর্ণ
                  </td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                    শ্যামলা
                  </td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                    গাত্রবর্ণ
                  </td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                    শ্যামলা
                  </td>
                  <td className="px-4 py-2 text-center w-1/7 border-l">
                  <Button  color="green" size="xs" className="mr-2">
            <FaEye size={12} />
          </Button>
          <Button color="red" size="xs">
            <FaTrash size={12} />
          </Button>
                  
                  </td>
                </tr>

               
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReports;
