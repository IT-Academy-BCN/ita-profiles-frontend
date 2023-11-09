import React from "react";

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const handleLogin = () => {
    // Handle login logic here
    onClose(); // Close the popup after login
  };

  return (
    <div className="relative w-72 rounded-lg bg-white flex flex-col items-center p-4 md:p-8">
      <h2 className="text-lg font-bold">LOGIN</h2>
      <form className="flex flex-col space-y-4">
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-transparent border-none cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        <input
          type="text"
          id="dni"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="DNI"
        />
        <input
          type="password"
          id="password"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Contraseña"
        />
        <button
          className="w-full h-12 rounded-lg bg-pink-500 text-white font-bold"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPopup;