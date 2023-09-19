import "./MyPurchases.css";
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
                    <button className="text-blue-500 hover:text-blue-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 1v2m0 18v2m-9-9h2m18 0h-2m-9-9v2m0 18v-2M4 12h2m16-3.535-1.414-1.414-4.243 4.243 1.414 1.414 4.243-4.243z"
                        />
                      </svg>
                      View
                    </button>
                    <button className="text-red-500 hover:text-red-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Delete
                    </button>
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
                    <button className="text-blue-500 hover:text-blue-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 1v2m0 18v2m-9-9h2m18 0h-2m-9-9v2m0 18v-2M4 12h2m16-3.535-1.414-1.414-4.243 4.243 1.414 1.414 4.243-4.243z"
                        />
                      </svg>
                      View
                    </button>
                    <button className="text-red-500 hover:text-red-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Delete
                    </button>
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
                    <button className="text-blue-500 items-center flex hover:text-blue-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 1v2m0 18v2m-9-9h2m18 0h-2m-9-9v2m0 18v-2M4 12h2m16-3.535-1.414-1.414-4.243 4.243 1.414 1.414 4.243-4.243z"
                        />
                      </svg>
                      <span className="ml-2"> View</span>
                    </button>
                    <button className="text-red-500 flex hover:text-red-700 mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;
