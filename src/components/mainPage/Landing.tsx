import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import burgerMenu from '../../assets/svg/burgerMenu.svg';

const Landing = () => {
  return (
    <div className="flex ">
      <MenuNavbar />

      <div className="h-full w-full">
        {/* navbar visible on md screens */}
        <div className="hidden justify-end md:flex">
          <UserNavbar />
        </div>

        {/* White board --> */}
        <div className="min-h-screen bg-white p-4 md:mb-2 md:mr-12 md:min-h-[90vh] md:rounded-[15px]">
          <div className="flex justify-end gap-3 md:hidden">
            {/* navbar visible on small screens */}
            <div className="flex items-center justify-center  md:hidden">
              <UserNavbar />
            </div>
            <div className="flex cursor-pointer items-center justify-center ">
              <img src={burgerMenu} alt="burger menu" className="h-8 w-8 " />
            </div>
          </div>
          <div className="flex items-start p-6">
            <Filters />
            <Students />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
