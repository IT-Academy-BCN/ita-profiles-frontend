import { useState } from 'react';
import Lock from '../../assets/svg/lock-dynamic-color.svg';
import LoginPopup from '../LoginPopup';
import RegisterPopup from '../RegisterPopup';
import ArrowDown from'../../assets/svg/arrow-down.svg';
import burgerMenu from '../../assets/svg/burgerMenu.svg';

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
    <div className="mx-4 my-3 flex w-full justify-between md:mr-8 md:justify-end">
      <div className="flex cursor-pointer items-center justify-center md:hidden ">
        <img src={burgerMenu} alt="burger menu" className="h-8 w-8 " />
      </div>

      <div className="dropdown dropdown-end mx-4 rounded-lg bg-white font-medium text-base hover:bg-gray-300 md:rounded-md md:w-34 md:h-10 md:top-18 md:left-62">
      
        <div tabIndex={0} role="button" className="w-full px-3 py-2 text-[#808080]">
          <div className="flex items-center relative mx-0.1">
          <span className="text-[#808080]">ES</span>
          <img src={ArrowDown} alt="Vector" className="h-2 w-4 mt-0.5 ml-1" />
          </div>
        </div>
       
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className="text-[#808080]"><a>Español</a></li>
          <li className="text-[#808080]"><a>English</a></li>
        </ul>
     </div>
     

      <button
        className="flex items-center justify-center rounded-lg bg-white font-medium text-base text-gray-800 hover:bg-gray-300 md:rounded-md md:w-34 md:h-10 md:top-18 md:left-62"
        onClick={handleOpenRestrictedPopup}
      >
        <p className="w-full px-3 py-2 text-[#808080]">
          Login/registro
        </p>
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
