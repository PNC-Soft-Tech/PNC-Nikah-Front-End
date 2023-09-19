import "./MyReports.css";
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
                  <td className="px-4 py-2 text-center w-1/7 border-l">2</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReports;
