import "./Settings.css";
import { useState } from 'react';
import {  Colors } from '../../constants/colors'; 
function Settings() {
  const [isBiodataHidden, setIsBiodataHidden] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleToggleBiodata = () => {
    setIsBiodataHidden(!isBiodataHidden);
  };

  const handleDeleteAccount = () => {
    // Implement account deletion logic here
    alert('Account deleted successfully!');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Implement password change logic here
    if (newPassword === confirmNewPassword) {
      alert('Password changed successfully!');
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8  " >
      <div className="max-w-screen-md mx-auto bg-white p-6 rounded-lg shadow-md border-t-2" style={{borderTopColor:Colors.titleText}}>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6" style={{color:Colors.titleText}}>Account Settings</h1>

        <div className="grid grid-cols-2 gap-6 ">
          {/* Hide & Active Biodata Toggle */}
          <div>
            <h2 className="font-semibold text-sm md:text-xl lg:text-xl" style={{color:Colors.titleText}}>Hide & Active Biodata</h2>
            <div className="flex items-center mt-2">
              <label className="flex items-center cursor-pointer">
                <span className="mr-2">Hide Biodata</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isBiodataHidden}
                  onChange={handleToggleBiodata}
                />
              </label>
            </div>
          </div>
          {/* Delete Account Button */}
          <div>
            <h2 className="text-sm md:text-xl lg:text-xl font-semibold" style={{color:Colors.titleText}}>Delete Account</h2>
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 hover:bg-red-600 text-sm md:text-xl lg:text-xl text-white font-semibold py-2 px-4 rounded-full mt-2"
            >
              Delete Account
            </button>
          </div>
        </div>

        {/* Change Password Form */}
        <div className="mt-6">
          <h2 className="text-sm md:text-xl lg:text-xl font-semibold" style={{color:Colors.titleText}}>Change Password</h2>
          <form onSubmit={handleChangePassword}>
            <div className="mt-2">
              <label className=" text-sm md:text-xl lg:text-xl block text-gray-500 font-bold mb-2" htmlFor="password">
                Current Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" px-3 py-2 border border-blue-500 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label className=" text-sm md:text-xl lg:text-xl block text-gray-500 font-bold mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className=" px-3 py-2 border border-blue-500 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label className=" text-sm md:text-xl lg:text-xl block text-gray-500 font-bold mb-2" htmlFor="confirmNewPassword">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                className=" px-3 py-2 border border-blue-500 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>

            <button style={{backgroundColor:Colors.pncPrimaryColor}}
              type="submit"
              className="text-sm md:text-xl lg:text-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
