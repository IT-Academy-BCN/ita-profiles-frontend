import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginForm } from '../interfaces/interfaces';

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const { handleSubmit, register } = useForm<loginForm>();
  const handleLogin: SubmitHandler<loginForm> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data);
      console.log('El data de login =>', response.data);
      //token se devuelve solo cuando utilizamos email y password.
      // Imposible modificar los campos a dni y password.
      onClose();
    } catch (e) {
      console.log('el error =>', e);
    }
  };

  return (
    <div className="relative w-72 rounded-lg bg-white flex flex-col items-center p-4 md:p-8">
      <h2 className="text-lg text-black font-bold">Login</h2>
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
          placeholder="email por ahora."
          {...register('email')}
        />
        <input
          type="password"
          id="password"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Contraseña"
          {...register('password')}
        />
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-black cursor-pointer"
            style={{ textDecoration: 'underline' }}
          >
            Recordar/cambiar contraseña
          </a>
        </div>
        <button
          className="w-full h-12 rounded-lg bg-pink-500 text-white font-bold"
          onClick={handleSubmit(handleLogin)}
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <a
          href="#"
          className="text-black font-bold cursor-pointer"
          style={{ textDecoration: 'underline' }}
        >
          ¿No tienes cuenta? crear una
        </a>
      </div>
    </div>
  );
};

export default LoginPopup;
