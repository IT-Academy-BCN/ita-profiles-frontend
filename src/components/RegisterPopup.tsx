import React from 'react';

type RegisterPopupProps = {
  onClose: () => void;
};

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose }) => {
  const handleRegister = () => {
    // Handle registration logic here
    onClose(); // Close the popup after registration
  };

  return (
    <div className="relative w-600 rounded-lg bg-white flex flex-col items-center p-20">
      <h2>Registration</h2>
      <form>
        <button
          className="absolute top-10 right-10 w-30 h-30 rounded-full bg-transparent border-none cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-between">
          <div className="mr-20">
            <input
              type="text"
              id="dni"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" DNI"
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" Username"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mr-20">
            <input
              type="password"
              id="password"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" Password"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" Email"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mr-20">
            <input
              type="text"
              id="specialization"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" Specialization"
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              className="w-313.563 h-61 p-4.563 px-6.563 py-5 px-7.563 justify-end items-center flex-shrink-0 rounded-12 border border-gray-600"
              placeholder=" Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="w-200 h-40 rounded-8 bg-purple-900 text-white text-base border-none cursor-pointer"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPopup;