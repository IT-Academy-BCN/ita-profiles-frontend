import React, { useState } from 'react';
import Lock from './assets/svg/lock-dynamic-color.svg';
import LoginPopup from './components/LoginPopup';
import RegisterPopup from './components/RegisterPopup';

const App: React.FC = () => {
  const [isRestrictedPopupOpen, setIsRestrictedPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleOpenRestrictedPopup = () => {
    setIsRestrictedPopupOpen(true);
  };

  const handleCloseRestrictedPopup = () => {
    setIsRestrictedPopupOpen(false);
  };

  const handleOpenRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
    setIsRestrictedPopupOpen(false);
  };

  const handleCloseRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  const handleOpenLoginPopup = () => {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to ita profiles</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenRestrictedPopup}
      >
        Entrar
      </button>
      {isRestrictedPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-72 bg-white rounded-lg flex flex-col items-center p-4 relative">
            <button
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-transparent border-none cursor-pointer"
              onClick={handleCloseRestrictedPopup}
            >
              ✕
            </button>
            <img src={Lock} alt="Lock" className="w-24 h-24 mb-4" />
            <h2 className="text-lg font-bold mb-2">Acceso restringido</h2>
            <p className="text-base mb-6">
              Entra o regístrate para acceder al perfil
            </p>
            <div className="w-full">
              <button
                className="w-full h-12 rounded-lg bg-pink-500 text-white text-lg mb-2"
                onClick={handleOpenRegisterPopup}
              >
                Soy candidato/a
              </button>
              <button
                className="w-full h-12 rounded-lg bg-pink-500 text-white text-lg"
                onClick={handleOpenLoginPopup}
              >
                ¿Tienes cuenta?
              </button>
            </div>
          </div>
        </div>
      )}
      {isRegisterPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <RegisterPopup
            onClose={handleCloseRegisterPopup}
            onOpenLoginPopup={handleOpenLoginPopup}
          />
        </div>
      )}
      {isLoginPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          {isLoginPopupOpen && <LoginPopup onClose={handleCloseLoginPopup} />}
        </div>
      )}
    </div>
  );
};

export default App;
