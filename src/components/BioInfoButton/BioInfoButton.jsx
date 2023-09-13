const BioInfoButton = () => {
  return (
    <div className="grid grid-cols-[40%,60%] gap-2 rounded-lg">
      <div className="p-4">
        <button className="shortlist text-white border-2 hover:bg-green-600 bg-green-800 transition-all duration-500 ease-out first-letter:  hover:bg-custom-blue-dark border-green-800  py-2 px-7 rounded-full">
          Shortlist
        </button>
      </div>
      <div className="p-4">
        <button className="bg-red-900 hover:bg-custom-blue-dark border-2 hover:bg-red-600 transition-all duration-500 ease-out border-red-900  text-white py-2 px-7 rounded-full">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default BioInfoButton;
