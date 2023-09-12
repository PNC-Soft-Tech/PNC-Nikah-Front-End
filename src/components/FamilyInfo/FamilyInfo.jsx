const FamilyInfo = () => {
  return (
    <div className="single-bio-family-info border-t-2 w-auto rounded shadow">
      <h5 className="card-title text-center text-2xl my-3">পারিবারিক তথ্য</h5>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-t">
            <td className="px-4 py-2 w-1/2">আপনার পিতা কি জীবিত?</td>
            <td className="px-4 py-2 w-1/2 border-l">জী, জীবিত</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">পিতার পেশার বিবরণ</td>
            <td className="px-4 py-2 w-1/2 border-l">
              সরকারী চাকরিজীবী,উপজেলা মৎস্য অধিদপ্তর কর্মকর্তা (অবসর প্রাপ্ত)
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">আপনার মাতা কি জীবিত?</td>
            <td className="px-4 py-2 w-1/2 border-l">জী, জীবিত</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">মাতার পেশার বিবরণ</td>
            <td className="px-4 py-2 w-1/2 border-l">গৃহিণী</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">আপনার কতজন ভাই আছে?</td>
            <td className="px-4 py-2 w-1/2 border-l">ভাই নেই</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">ভাইদের তথ্য</td>
            <td className="px-4 py-2 w-1/2 border-l">
              অনার্স দ্বিতীয় বর্ষ,অবিবাহিত,স্টুডেন্ট
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">আপনার কতজন বোন আছে?</td>
            <td className="px-4 py-2 w-1/2 border-l">১</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">বোনদের তথ্য</td>
            <td className="px-4 py-2 w-1/2 border-l">
              অনার্স প্রথম বর্ষ,অবিবাহিত,স্টুডেন্ট
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">চাচা মামাদের পেশা</td>
            <td className="px-4 py-2 w-1/2 border-l">
              চাচা ২জন। বড় চাচা মৃত। ছোট চাচা(চাকরিজীবী)
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">পারিবারিক অর্থনৈতিক অবস্থা</td>
            <td className="px-4 py-2 w-1/2 border-l">মধ্যবিত্ত</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">অর্থনৈতিক অবস্থার বর্ণনা</td>
            <td className="px-4 py-2 w-1/2 border-l">
              আলহামদুলিল্লাহ অর্থনৈতিক ভাবে মধ্যবিত্ত ও সামাজিক ভাবে সম্মানিত
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">পারিবারিক দ্বীনি পরিবেশ কেমন?</td>
            <td className="px-4 py-2 w-1/2 border-l">মোটামুটি দ্বীনি পরিবেশ</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 w-1/2">
              পরিবারে/বাসায় পর্দার পরিবেশ নিছিট করতে পারবেন?
            </td>
            <td className="px-4 py-2 w-1/2 border-l">ইনশাআল্লাহ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FamilyInfo;
