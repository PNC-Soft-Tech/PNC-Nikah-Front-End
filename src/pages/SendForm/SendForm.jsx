import  { useState } from 'react';
import {  Colors } from '../../constants/colors'; 
function SendForm() {
  const items = [
    { label: "মেয়েদের চোখ ঢাকা নিকাব পড়াকে অনেকে বাড়াবাড়ি মনে করে। ইসলাম তো সহজ, আপনি এব্যাপারে কি মনে করেন?", gender:'male', htmlFor: 'chockhDahaka' },
    { label: "প্রচন্ড বৃষ্টি হচ্ছে, মসজিদ যদিও কাছে মোটামুটি। হয়ত ছাতাও আছে যাওয়ার। কিন্তু ইসলাম তো সহজ, এখানে তো রুখসত আছে। কিন্তু অনেক অতি উৎসাহী আছে যারা এসব ঝড়-বৃষ্টি উপেক্ষা করেও যায় মসজিদে। এরকম বাড়াবাড়ি যারা করে তাদের ব্যাপারে আপনার মন্তব্য কি??", gender:'male', htmlFor: 'mosjidBristi' },
    { label: "ছেলেদের ইউনিভার্সিটিতে পড়াশুনা করার ব্যাপারে আপনার মতামত কি?", gender:'male', htmlFor: 'maleAtUniv' },
    { label: "অমুক তার ছেলেকে ভার্সিটিতে ভর্তি হতে দিতে চায় না কারন ইসলামী পরিবেশ পাবে না। এরকম বাড়াবাড়ির ব্যাপারে আপনার মতামত কি?", gender:'male', htmlFor: 'startingUniv' },
    { label: "পর্দা করে অনলাইনে হিজাব নিকাবের ব্যাবসা তো হালাল।ভিডিও(মডেলিং) বানিয়ে তা দিয়ে একটা আউটসোর্সিং বা ব্যবসা করতে চাইলে আপনার থেকে কোনো হেল্প পেতে পারি? বা পারমিশন পেতে পারি?", gender:'male', htmlFor: 'onlineModeling' },
    { label: "ছেলেদের ছবি তোলাকে অনেকে অনর্থক মনে করে। আপনি কি বলেন এব্যাপারে??", gender:'male', htmlFor: 'malePhotoCapture' },
    { label: "অনেক দ্বীনদার মেয়ে ভার্সিটিতে পড়াশুনা করতে চায় এজন্য তাদের দ্বিনি পরিবেশ খুঁজে|শুরুতে জেনেশুনে মেয়েদের জন্য ভার্সিটিতে পড়তে চাওয়ার বিষয়ে আপনি কি মনে করেন??", gender:'male', htmlFor: 'malePhotoCapture' },
    { label: "আপনার নিজের বায়োডাটা বিস্তারিত লিখুন(বিশেষ কিছু জানাতে চাইলে তাও লিখুন)", gender:'all', htmlFor: 'bioInput' },
   
  ];

  const [bioValues, setBioValues] = useState({});

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setBioValues({ ...bioValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bioValues);
  };

  return (
    <div className="max-w-screen-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4" style={{color:Colors.titleText}}>নিচের ফর্ম পুরন করে আপনার বায়োডাটা শেয়ার করুন</h2>
      <h4 className="text-sm font-semibold text-gray-500 mb-4" >আপনি নিচে যে তথ্য দিবেন তা পাত্র/পাত্রীর সাথে শেয়ার করা হবে ইন শা আল্লাহ| আপনার বায়োডাটার ব্যাপারে সে ফিডব্যাক দিলে আপনাকে মোবাইলে এস এম এস করে জানিয়ে দেওয়া হবে এবং আপনি তা আপনার ড্যাশবোর্ড থেকে দেখতে পারবেন | 
      সে পজেটিভ  ফিডব্যাক দিলে বা পারমিশন দিলে আপনি ড্যাশবোর্ড থেকে বাকি পেমেন্ট করে অভিভাবক এর সাথে যোগাযোগ এর তথ্য  চূড়ান্তভাবে পাবেন, ইন শা আল্লাহ্‌
      </h4>
      <form onSubmit={handleSubmit}> 
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={item.htmlFor} className=" text-left text-gray-700 font-bold mb-2">
              {item.label}
            </label>
            <textarea style={{borderColor:Colors.titleText}}
              id={item.htmlFor}
              name={item.htmlFor}
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              rows="4"
              value={bioValues[item.htmlFor] || ''}
              onChange={handleTextareaChange}
            ></textarea>
          </div>
        ))}

        <div className="mb-4">
          <button
            type="submit"
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"    style={{
            background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
          }}
          >
            আমার বায়োডাটা শেয়ার করুন
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendForm;
