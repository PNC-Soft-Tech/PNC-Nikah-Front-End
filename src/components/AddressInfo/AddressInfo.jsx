import React from "react";

function AddressInfo() {
  return (
    <div className="w-full mx-auto mt-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h5 className="text-xl font-semibold text-center mb-4">ঠিকানা</h5>
          <table className="w-full border-collapse border border-gray-200">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold">স্থায়ী ঠিকানা</td>
                <td>
                  <div className="font-normal">
                    <p>সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী, বাংলাদেশ</p>
                    <p>
                      <b>এলাকার নাম:</b> ধানবান্ধি,নিমতলা; জে.সি. রোড, সিরাজগঞ্জ
                      সদর
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold">বর্তমান ঠিকানা</td>
                <td>
                  <div className="font-normal">
                    <p>সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী, বাংলাদেশ</p>
                    <p>
                      <b>এলাকার নাম:</b> ধানবান্ধি,নিমতলা; জে.সি. রোড, সিরাজগঞ্জ
                      সদর
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="font-semibold">কোথায় বড় হয়েছেন?</td>
                <td className="font-normal">সিরাজগঞ্জ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
