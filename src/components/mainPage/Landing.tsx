import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import burgerMenu from '../../assets/svg/burgerMenu.svg';

const Landing = () => {
  return (
    <div className="flex w-full">
      <MenuNavbar />

      <div className="h-full w-full">
        <UserNavbar />

        {/* White board --> */}
        <div className="min-h-screen bg-white p-4 md:mb-2 md:mr-12 md:min-h-[90vh] md:rounded-[15px]">
          <div className="flex justify-end md:hidden">
            <div className="">
              {/* here goes userNavbar I think ... */}
              <img
                src={burgerMenu}
                alt="burger menu"
                className="h-8 w-8 cursor-pointer"
              />
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
