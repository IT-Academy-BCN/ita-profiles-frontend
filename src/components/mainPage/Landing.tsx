import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="grid min-h-screen grid-cols-8">
      <MenuNavbar />

      <div className="col-span-8 w-full md:col-span-7">
        <div className="w-full">
          <div className=" flex justify-end ">
            <UserNavbar />
          </div>

          <main className="flex">
            {/* White board --> */}
            <div className="w-full rounded-[15px] bg-white px-6 pb-2 pt-6 md:mr-8">
              <div className="relative flex gap-1 ">
                <Filters />
                <Students />
              </div>
            </div>

            {/* Profile Details */}
            <UserDetails />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Landing;
