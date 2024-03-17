import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginForm } from '../../interfaces/interfaces';

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
    <div className="relative flex w-72 flex-col items-center rounded-lg bg-white p-4 md:p-8">
      <h2 className="text-lg font-bold text-black">Login</h2>
      <form className="flex flex-col space-y-4">
        <button
          className="absolute right-2 top-2 h-8 w-8 cursor-pointer rounded-full border-none bg-transparent"
          onClick={onClose}
        >
          ✕
        </button>
        <input
          type="text"
          id="dni"
          className="border-gray-300 w-full rounded-lg border p-2 focus:border-blue-300 focus:outline-none focus:ring"
          placeholder="email por ahora."
          {...register('email')}
        />
        <input
          type="password"
          id="password"
          className="border-gray-300 w-full rounded-lg border p-2 focus:border-blue-300 focus:outline-none focus:ring"
          placeholder="Contraseña"
          {...register('password')}
        />
        <div className="mt-4 text-center">
          <a
            href="#"
            className="cursor-pointer text-black"
            style={{ textDecoration: 'underline' }}
          >
            Recordar/cambiar contraseña
          </a>
        </div>
        <button
          className="h-12 w-full rounded-lg bg-pink-500 font-bold text-white"
          onClick={handleSubmit(handleLogin)}
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="cursor-pointer font-bold text-black"
          style={{ textDecoration: 'underline' }}
        >
          ¿No tienes cuenta? crear una
        </a>
      </div>
    </div>
  );
};

export default LoginPopup;
