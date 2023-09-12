const ContactInfo = () => {
  return (
    <div className="single-bio-contact-info rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">যোগাযোগ</h5>
      <div className="paid-contact-info">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b border-t">
              <td className="px-4 py-2 w-1/2">পাত্রীর নাম</td>
              <td className="px-4 py-2 w-1/2 border-l">Md. Anis Molla</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 w-1/2">অভিভাবকের মোবাইল নাম্বার</td>
              <td className="px-4 py-2 w-1/2 border-l">01328816000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 w-1/2">অভিভাবকের সাথে সম্পর্ক</td>
              <td className="px-4 py-2 border-l">মা</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-5">
          <button className="bio-report-btn bg-red-800 text-white py-2 px-4 rounded w-93">
            রিপোর্ট করুন
          </button>
        </div>
      </div>
      <div className="pnc-bio-hidden">
        <h4 className="text-center my-4">
          এই বায়োডাটাটি হাইড অবস্থায় আছে। অর্থাৎ এই মুহুর্তে তিনি কোনো প্রস্তাব
          পেতে আগ্রহী নয়। তাই এখন এই বায়োডাটার যোগাযোগ তথ্য দেখা যাবে না।
        </h4>
      </div>
      <div className="ask-contact-info">
        <h4 className="text-center my-4">
          সতর্কতা - বিয়ের সিদ্ধান্ত নেয়ার পূর্বে স্থানীয়ভাবে খোঁজ নিয়ে
          বায়োডাটার সমস্ত তথ্য যাচাই করবেন।
        </h4>
        <h2 className="text-center text-2xl my-5">
          এই বায়োডাটার অভিভাবকের যোগাযোগের তথ্য দেখতে আপনার ১টি কানেকশন খরচ
          হবে।
        </h2>
        <div className="flex justify-center">
          <button className="contact-bio-btn bg-blue-500 text-white py-2 px-4 mb-5 rounded w-93">
            যোগাযোগের তথ্য দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
