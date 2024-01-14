import itAcademyLogo from '../../assets/svg/itacademy.svg';

const MenuNavbar = () => {
  return (
    <nav className="hidden w-64 items-center p-2 md:block">
      <div className="my-1 flex min-w-[144px] items-center justify-start">
        <img src={itAcademyLogo} alt="itAcademy Logo" className="h-full" />
      </div>
      <div className="mt-24 flex flex-col">
        {/* Menu should be placed here
         * Margins or Padding should be placed here
         * h3 should be removed and component should be placed here maybe
         * Delete comment once this is fixed
         */}
        <h3 className="font-bold text-colortext">MenuNavbar ul</h3>
      </div>
    </nav>
  );
};

export default MenuNavbar;
