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
    <div className="relative w-120 rounded-lg bg-white flex flex-col items-center p-5 md:p-20">
      <h2 className="text-lg md:text-2xl font-bold">Registro</h2>
      <form className="flex flex-col space-y-4">
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-transparent border-none cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="dni"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="DNI o NIE"
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="password"
              id="password"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="specialization"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Specialization"
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex justify-centr items-center space-x-8 p-4 md:p-5 ">
          <input type="checkbox" id="acceptTerms" className="w-6 h-6" />
          <label htmlFor="acceptTerms" className="text-sm">
            Acepto <span style={{ textDecoration: 'underline' }}>términos legales</span>
          </label>
          <button
            className="w-102 mr-6 md:w-60 h-12 md:h-12 rounded-lg bg-pink-500 text-white text-base md:text-lg border-none cursor-pointer"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a
          href="#"
          className="text-black font-bold cursor-pointer"
          style={{ textDecoration: 'underline' }}
        >
          ¿Tienes cuenta? acceder
        </a>
      </div>
    </div>
  );
};

export default RegisterPopup;
