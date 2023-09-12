function AddressInfo() {
  return (
    <div className="single-bio-address rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">ঠিকানা</h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 w-1/2">স্থায়ী ঠিকানা</td>
            <td className="px-4 py-2 w-1/2 border-l">
              <span>সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী, বাংলাদেশ</span>
              <br />
              <span>
                <b>এলাকার নাম: &nbsp;</b>
                ধানবান্ধি,নিমতলা; জে.সি. রোড, সিরাজগঞ্জ সদর
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">বর্তমান ঠিকানা</td>
            <td className="px-4 py-2 w-1/2 border-l">
              <span>সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী, বাংলাদেশ</span>
              <br />
              <span>
                <b>এলাকার নাম: &nbsp;</b>
                ধানবান্ধি,নিমতলা; জে.সি. রোড, সিরাজগঞ্জ সদর
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">কোথায় বড় হয়েছেন?</td>
            <td className="px-4 py-2 border-l">সিরাজগঞ্জ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddressInfo;
