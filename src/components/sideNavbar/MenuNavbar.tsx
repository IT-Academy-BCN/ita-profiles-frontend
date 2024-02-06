import { useState } from 'react';
import itAcademyLogo from '../../assets/svg/itacademy.svg';

const MenuNavbar = () => {
  const [activeItem, setActiveItem] = useState('Perfiles');
  const menuItems = ['Perfiles', 'Matching', 'Proyectos', 'Estadísticas', 'Guías útiles'];

  return (
    <nav className="hidden md:flex md:flex-col w-48 pt-9 pl-7 gap-32">
      <div>
        <img src={itAcademyLogo} alt="itAcademy Logo"/>
      </div>
      <div className="flex flex-col gap-9">
      {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`flex items-center ${activeItem === item ? 'text-black' : 'text-gray-500'}`}
          >
            {activeItem === item && (
              <div
                className="w-2 h-2 bg-primary rounded-full mr-2"
              />
            )}
            <p className={`font-poppins text-sm font-semibold leading-4 tracking-tight text-left ${activeItem === item ? 'text-black' : 'text-gray-500'}`}>{item}</p>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MenuNavbar;
