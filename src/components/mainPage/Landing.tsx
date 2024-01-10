import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import burgerMenu from '../../assets/svg/burgerMenu.svg';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="flex ">
      <MenuNavbar />

      <div className=" w-full">
        {/* navbar visible on md screens */}
        <div className="hidden justify-end md:flex">
          <UserNavbar />
        </div>

        <div className="flex">
          {/* White board --> */}
          {/* What about mobile version ?¿ */}
          <div className=" max-h-[95vh] w-full bg-white p-4 md:mb-2 md:mr-12 md:rounded-[15px]">
            {/* MOBILE navbar. visible on small screens */}
            <div className="flex justify-end gap-3 md:hidden">
              <div className="flex items-center justify-center  md:hidden">
                <UserNavbar />
              </div>
              <div className="flex cursor-pointer items-center justify-center ">
                <img src={burgerMenu} alt="burger menu" className="h-8 w-8 " />
              </div>
            </div>
            {/* >>>>>>>>>> Table p-6 gives me scroll...*/}
            <div className="flex gap-1 p-6">
              <Filters />
              <Students />
            </div>
          </div>

          {/* Profile Details */}
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default Landing;
