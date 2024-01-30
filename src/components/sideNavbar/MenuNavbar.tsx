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
            className={`p-2 ${activeItem === item ? 'text-black border-l-4 border-primary' : 'text-gray-500'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MenuNavbar;
