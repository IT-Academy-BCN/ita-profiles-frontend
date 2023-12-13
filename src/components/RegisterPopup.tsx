import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { UserSchema } from '../schemes/schemas';

type RegisterPopupProps = {
  onClose: () => void;
  onOpenLoginPopup: () => void;
};

const RegisterPopup: React.FC<RegisterPopupProps> = ({
  onClose,
  onOpenLoginPopup,
}) => {
  type formSchema = z.infer<typeof UserSchema>;
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formSchema>({ resolver: zodResolver(UserSchema) });

  const sendRegister: SubmitHandler<formSchema> = async (data) => {
    try {
      if (isChecked) {
        //This creates a user in db.json.
        const response = await axios.post(
          'http://localhost:3000/users/register',
          data,
        );
        console.log('response de register =>', response.data);
        reset();
        onClose();
      } else {
        setCheckError(true);
      }
    } catch (error) {
      console.log(error);
    }
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
              {...register('dni')}
              type="text"
              id="dni"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="DNI o NIE"
            />
            {errors.dni && (
              <p className="text-red-500">{`${errors.dni?.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register('username')}
              type="text"
              id="username"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500">{`${errors.username?.message}`}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password?.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email?.message}`}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="password"
              {...register('confirmPassword')}
              id="confirmPassword"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword?.message}`}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register('specialization')}
              id="specialization"
              className="w-full p-2 md:p-4 px-4 md:px-6 py-4 md:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Specialization"
            />
            {errors.specialization && (
              <p className="text-red-500">{`${errors.specialization.message}`}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center space-x-8 p-4 md:p-5 ">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="acceptTerms"
                className="w-6 h-6"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="acceptTerms" className=" mr-2 text-sm">
                Acepto{' '}
                <span style={{ textDecoration: 'underline' }}>
                  términos legales
                </span>
              </label>
            </div>
            {checkError && (
              <p className={`${isChecked ? 'hidden' : 'text-red-500'}`}>
                Debes aceptar los términos
              </p>
            )}
          </div>
          <button
            className="w-102 mr-6 md:w-60 h-12 md:h-12 rounded-lg bg-pink-500 text-white text-base md:text-lg border-none cursor-pointer"
            onClick={handleSubmit(sendRegister)}
          >
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <a
          href="#"
          onClick={onOpenLoginPopup}
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
