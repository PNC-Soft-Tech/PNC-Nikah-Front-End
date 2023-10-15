import "./MyPurchases.css";
import { Button } from "@material-tailwind/react";
import { FaEye, FaTrash } from "react-icons/fa";
const MyPurchases = () => {
  return (
    <div className="py-12 mx-auto ">
      <div className="">
        {/*<!-- End of Left Sidebar -->*/}
        <div className="col right-sidebar-main my-favs">
          <div className="my-favs-info border-t-2 w-auto rounded shadow">
            <h5 className="card-title text-center text-2xl my-3">
              আমার Purchases
            </h5>
            <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="border-b border-t">
                  <th className="px-4 py-2 text-center w-1/9">SL</th>
                  <th className="px-4 py-2 text-center w-1/9">বায়োডাটা নং</th>
                  <th className="px-4 py-2 text-center w-1/9">জন্ম তারিখ</th>
                  <th className="px-4 py-2 text-center w-1/9">ঠিকানা</th>
                  <th className="px-4 py-2 text-center w-1/9">টোটাল পেয়েছে</th>
                  <th className="px-4 py-2 text-center w-1/9">
                    অ্যাপ্রুভাল রেট
                  </th>
                  <th className="px-4 py-2 text-center w-1/9">রিজেকশন রেট</th>
                  <th className="px-4 py-2 text-center w-1/9">
                    পেইন্ডিং সংখ্যা
                  </th>
                  <th className="px-4 py-2 text-center w-1/9">অপশন</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center w-1/9 border-l">1</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">2345</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Jan 1998
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Barisal City Corporation,Barisal
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">23</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">56%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">44%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">2</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                  <Button  color="green" size="xs" className="mr-2">
            <FaEye size={12} />
          </Button>
          <Button color="red" size="xs">
            <FaTrash size={12} />
          </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center w-1/9 border-l">2</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">345</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Aug 1998
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Dhaka North City Corporation,Dhaka
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">39</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">66%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">34%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">7</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                  <Button  color="green" size="xs" className="mr-2">
            <FaEye size={12} />
          </Button>
          <Button color="red" size="xs">
            <FaTrash size={12} />
          </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center w-1/9 border-l">3</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">321</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Jan 1988
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">
                    Sylhet City Corporation,Sylhet
                  </td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">45</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">86%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">14%</td>
                  <td className="px-4 py-2 text-center w-1/9 border-l">0</td>
                  <td className="px-4 py-2 text-center flex w-1/9 border-l">
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

export default MyPurchases;
