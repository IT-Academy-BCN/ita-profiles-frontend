import itAcademyLogo from '../../assets/svg/itacademy.svg';

const MenuNavbar = () => {
  return (
    <div className="hidden min-h-screen w-64 flex-col items-center p-2 md:flex">
      <div className="my-2 flex min-w-[144px] items-center justify-center">
        <img
          src={itAcademyLogo}
          alt="itAcademy Logo"
          className="h-full w-full  rounded-md"
        />
      </div>
      <div className="mt-24 flex flex-col">
        {/* Menu should be placed here
         * Margins or Padding should be placed here
         * h3 should be removed and component should be placed here maybe
         * Delete comment once this is fixed
         */}
        <h3 className="font-bold text-colortext">MenuNavbar ul</h3>
      </div>
    </div>
  );
};

export default MenuNavbar;
