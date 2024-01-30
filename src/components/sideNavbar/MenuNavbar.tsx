import React, { useState } from 'react';
import itAcademyLogo from '../../assets/svg/itacademy.svg';

const MenuNavbar = () => {
  const [activeItem, setActiveItem] = useState('Perfiles');

  const menuItems = ['Perfiles', 'Matching', 'Proyectos', 'Estadísticas', 'Guías útiles'];

  return (
    <nav className="hidden w-64 items-center p-2 md:block">
      <div className="my-1 flex min-w-[144px] items-center justify-start">
        <img src={itAcademyLogo} alt="itAcademy Logo" className="h-full" />
      </div>
      <div className="mt-24 flex flex-col">
      {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setActiveItem(item)}
            className={`p-2 flex items-center ${activeItem === item ? 'text-black' : 'text-gray-500'}`}
          >
            {activeItem === item && (
              <div
                className="w-2 h-2 bg-primary rounded-full mr-2"
              />
            )}
            <p className={`font-poppins text-sm font-semibold leading-4 tracking-tight text-left ${activeItem === item ? 'text-black' : 'text-gray-500'}`}>{item}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MenuNavbar;
