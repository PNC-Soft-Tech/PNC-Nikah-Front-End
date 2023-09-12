const ProfessionalInfo = () => {
  return (
    <div className="single-bio-ocupational-info rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">পেশাগত তথ্য</h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 w-1/2">পেশা</td>
            <td className="px-4 py-2 w-1/2 border-l">শিক্ষার্থী</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">পেশার বিস্তারিত বিবরণ</td>
            <td className="px-4 py-2 w-1/2 border-l">student</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">মাসিক আয়</td>
            <td className="px-4 py-2 border-l">00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfessionalInfo;
