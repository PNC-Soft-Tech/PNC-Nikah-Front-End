
import {  Colors } from '../../constants/colors'; // Adjust the import path as needed


const DashBoard = () => {
  return (<div className="my-dashboard bg-white rounded-lg shadow-md p-4 border-t-2 mt-4 " style={{borderTopColor:Colors.titleText}}>
   <h1 className="text-xl font-semibold mb-4 text-center " style={{color:Colors.titleText}}>Dashboard</h1>
    <div className="grid grid-cols-3 gap-4">


  <div className="rounded-lg bg-white shadow-md border  p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l-2 2m0 0l2-2m-2 2h14m0 0H5m8 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
      </div>
      <h2 className="text-lg font-semibold text-center" style={{color:Colors.titleText}}>My Points: 200.23</h2>
    </div>
    <p className="text-gray-700">Your Current Points.Your Current PointsYour Current PointsYour Current PointsYour Current Points</p>
    <button className="mt-2 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full" style={{backgroundColor:Colors.pncPrimaryColor}} >
      Recharge Points
    </button>
  </div>

  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-center">Card Title 2</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>
  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2" >
      <div className="rounded-full  h-8 w-8 flex items-center justify-center text-white mr-2" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">Card Title 3</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>


  <div className="rounded-lg bg-white shadow-md border  p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l-2 2m0 0l2-2m-2 2h14m0 0H5m8 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
      </div>
      <h2 className="text-lg font-semibold text-center" style={{color:Colors.titleText}}>My Points: 200.23</h2>
    </div>
    <p className="text-gray-700">Your Current Points.Your Current PointsYour Current PointsYour Current PointsYour Current Points</p>
    <button className="mt-2 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full" style={{backgroundColor:Colors.pncPrimaryColor}} >
      Recharge Points
    </button>
  </div>

  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-center">Card Title 2</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>
  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2" >
      <div className="rounded-full  h-8 w-8 flex items-center justify-center text-white mr-2" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">Card Title 3</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>


  <div className="rounded-lg bg-white shadow-md border  p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l-2 2m0 0l2-2m-2 2h14m0 0H5m8 10h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
      </div>
      <h2 className="text-lg font-semibold text-center" style={{color:Colors.titleText}}>My Points: 200.23</h2>
    </div>
    <p className="text-gray-700">Your Current Points.Your Current PointsYour Current PointsYour Current PointsYour Current Points</p>
    <button className="mt-2 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full" style={{backgroundColor:Colors.pncPrimaryColor}} >
      Recharge Points
    </button>
  </div>

  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2">
      <div className="rounded-full bg-green-500 h-8 w-8 flex items-center justify-center text-white mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-center">Card Title 2</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>
  <div className="rounded-lg bg-white shadow-md border p-4" style={{borderColor:Colors.titleText}}>
    <div className="flex items-center justify-center mb-2" >
      <div className="rounded-full  h-8 w-8 flex items-center justify-center text-white mr-2" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-7h2v4h-2v-4z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">Card Title 3</h2>
    </div>
    <p className="text-gray-700">Subtitle text goes here.</p>
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full">
      Button
    </button>
  </div>




</div>

  </div>);
};

export default DashBoard;
