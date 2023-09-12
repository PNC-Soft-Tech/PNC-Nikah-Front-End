const BioInfoButton = () => {
  return (
    <div style={{}} className="grid grid-cols-[40%,60%] gap-2">
      <div className="p-4">
        <button className="shortlist text-green-800 border-2 hover:bg-green-800 transition-all duration-500 ease-out first-letter:  hover:bg-custom-blue-dark border-green-800 hover:text-white py-2 px-7 rounded-full">
          Shortlist
        </button>
      </div>
      <div className="p-4">
        <button className="hover:bg-red-900 hover:bg-custom-blue-dark border-2 transition-all duration-500 ease-out border-red-900 text-red-900 hover:text-white py-2 px-7 rounded-full">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default BioInfoButton;
