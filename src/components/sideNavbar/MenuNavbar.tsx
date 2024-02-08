import { useState } from 'react';
import itAcademyLogo from '../../assets/svg/itacademy.svg';

const MenuNavbar = () => {
  const [activeItem, setActiveItem] = useState('Perfiles');
  const menuItems = [
    'Perfiles',
    'Matching',
    'Proyectos',
    'Estadísticas',
    'Guías útiles',
  ];

  return (
    <nav className="hidden w-[188px] gap-[127px] pl-[28px] pt-[35px] md:flex md:flex-col">
      <div>
        <img src={itAcademyLogo} alt="itAcademy Logo" />
      </div>
      <div className="flex flex-col gap-[38px]">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`flex items-center ${
              activeItem === item ? 'text-black' : 'text-gray-500'
            }`}
          >
            {activeItem === item && (
              <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
            )}
            <p
              className={`font-poppins text-left text-sm font-semibold leading-4 tracking-tight ${
                activeItem === item ? 'text-black' : 'text-gray-500'
              }`}
            >
              {item}
            </p>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MenuNavbar;
