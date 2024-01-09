import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="flex ">
      <MenuNavbar />

      <div className=" w-full">
        {/* vertical side navbar visible on >= md screens */}
        <div className="flex justify-end">
          <UserNavbar />
        </div>

        <div className="flex">
          {/* White board --> */}
          <div className=" max-h-[95vh] w-full bg-white p-4 md:mb-2 md:mr-12 md:rounded-[15px]">
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
