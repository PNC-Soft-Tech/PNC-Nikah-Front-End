/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cart from './Cart';
import { ScrollToTop } from '../../constants/ScrolltoTop';
import { Colors } from '../../constants/colors';

const DropdownForm = () => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [biodata, setBiodata] = useState('')
  const [maritalstatus, setMaritalStatus] = useState('')
  const [dob, setDob] = useState('')
  const [height, setHeight] = useState('')
  const [color, setColor] = useState('')
  const [weight, setWeight] = useState('40 kg')
  const [blood, setBlood] = useState('')
  const [nationality, setNationality] = useState('')


  const options1 = ['পাত্রের বায়োডাটা ', 'পাত্রীর বায়োডাটা  ',]; 
  const options2 = ['অবিবাহিত', 'বিবাহিত','ডিভোর্সড','বিধবা', 'বিপত্নীক '  ];
  const options3 = ['কালো', 'শ্যমলা','উজ্জ্বল শ্যামলা','ফর্সা','উজ্জ্বল ফর্সা '];
  const options4 = ['A+','A-', 'AB+','AB-','B+','B-','O+','O-'];
  const options5 = ['বাংলাদেশী', 'পাকিস্তানী','ভারতীয়','অন্যান্য '];
  const options6 = ['৪ ফুটের কম ',"৪'","৪'১'","৪'২'","৪'৩'","৪'৪'","৪'৫'", "৪'৬'", "৪'৭'", "৪'৮'", "৪'৯'","৫'","৫'১'","৫'২'","৫'৩'","৫'৪'","৫'৫'", "৫'৬'","৫'৭'","৫'৮'","৫'৯'","৬'","৬'২'","৬'৩'","৬'৪'","৬'৫'","৬'৫' ফুটের বেশি "];

  const handleOptionChange1 = (e) => {
    setBiodata(e.target.value);
  };

  const handleOptionChange2 = (e) => {
    setMaritalStatus(e.target.value);
  };
  const handleOptionChange3 = (e) => {
    setDob(e.target.value);
  };
  const handleOptionChange4 = (e) => {
    setHeight(e.target.value);
  };
  const handleOptionChange5 = (e) => {
    setColor(e.target.value);
  };
  const handleOptionChange6 = (e) => {
    setWeight(e.target.value);
  };
  const handleOptionChange7 = (e) => {
    setBlood(e.target.value);
  };
  const handleOptionChange8 = (e) => {
    setNationality(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting (you can handle form submission here)
    alert(`Selected Option: ${biodata || 'None'}`);
  };

  return (
    <div className="container mx-auto mt-5">
      <ScrollToTop />
      <h1 className="text-2xl text-start font-semibold mb-3">সাধারণ তথ্য</h1>
      <h1 className="text-2xl font-semibold mb-3 biodata-submit-form-title">সাধারণ তথ্য</h1>
      <div className='w-[100%] border-t-[1.8px] border-solid border-gray-300 mb-6 '></div>
      <form onSubmit={handleSubmit}>

    
        <Cart title={'বায়োডাটার ধরণ '} data={biodata} handleOptionChange={handleOptionChange1} options={options1} />

        <Cart title={'বৈবাহিক অবস্থা '} data={maritalstatus} handleOptionChange={handleOptionChange2} options={options2} />

        <Cart title={'জন্মসন '} data={dob} handleOptionChange={handleOptionChange3} options={''} />

        <Cart title={'উচ্চতা '} data={height} handleOptionChange={handleOptionChange4} options={options6} />

        <Cart title={'গাত্রবর্ণ '} data={color} handleOptionChange={handleOptionChange5} options={options3} />

        <Cart title={'ওজন '} data={weight} handleOptionChange={handleOptionChange6} options={''} />

        <Cart title={'রক্তের গ্রুপ '} data={blood} handleOptionChange={handleOptionChange7} options={options4} />

        <Cart title={'জাতীয়তা '} data={nationality} handleOptionChange={handleOptionChange8} options={options5} />

        <div className="mt-6 flex flex-row justify-evenly gap-8 ">
          <button
            type="submit"
            className={`h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-[${Colors.pncPrimaryColor}] mt-3 `}
          >
            Back
          </button>

          <button
            type="submit"
            className={`h-10 w-36 text-[20px] rounded-full p-1 text-[#ffff] self-center bg-[${Colors.pncPrimaryColor}] mt-3 `}
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default DropdownForm;
