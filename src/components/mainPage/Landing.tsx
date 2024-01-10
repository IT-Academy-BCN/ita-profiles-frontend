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
        <div className="flex justify-end">
          <UserNavbar />
        </div>

        <div className="flex">
          {/* White board --> */}
          <div className="min-h-screen w-full rounded-[15px] bg-white p-6 md:mb-2 md:mr-12 md:min-h-[85vh] lg:min-h-[90vh]">
            {/* >>>>>>>>>> Table p-6 gives me scroll...*/}
            <div className="relative flex gap-1 ">
              <Filters />
              {/* <button type="button" className="absolute right-4 top-4">
                Filtrar
              </button> */}
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
