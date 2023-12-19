import { useState } from 'react';
import Lock from '../../assets/svg/lock-dynamic-color.svg';
import LoginPopup from '../LoginPopup';
import RegisterPopup from '../RegisterPopup';

const UserNavbar = () => {
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
    <div className="my-4 mr-12 hidden  justify-end md:flex">
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleOpenRestrictedPopup}
      >
        Entrar
      </button>
      {isRestrictedPopupOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-72 flex-col items-center rounded-lg bg-white p-4">
            <button
              className="absolute right-2 top-2 h-8 w-8 cursor-pointer rounded-full border-none bg-transparent"
              onClick={handleCloseRestrictedPopup}
            >
              ✕
            </button>
            <img src={Lock} alt="Lock" className="mb-4 h-24 w-24" />
            <h2 className="mb-2 text-lg font-bold">Acceso restringido</h2>
            <p className="mb-6 text-base">
              Entra o regístrate para acceder al perfil
            </p>
            <div className="w-full">
              <button
                className="mb-2 h-12 w-full rounded-lg bg-pink-500 text-lg text-white"
                onClick={handleOpenRegisterPopup}
              >
                Soy candidato/a
              </button>
              <button
                className="h-12 w-full rounded-lg bg-pink-500 text-lg text-white"
                onClick={handleOpenLoginPopup}
              >
                ¿Tienes cuenta?
              </button>
            </div>
          </div>
        </div>
      )}
      {isRegisterPopupOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <RegisterPopup
            onClose={handleCloseRegisterPopup}
            onOpenLoginPopup={handleOpenLoginPopup}
          />
        </div>
      )}
      {isLoginPopupOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          {isLoginPopupOpen && <LoginPopup onClose={handleCloseLoginPopup} />}
        </div>
      )}
    </div>
  );
};

export default UserNavbar;
