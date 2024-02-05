import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="flex min-h-screen">
      <MenuNavbar />
      <div className="flex-1">
        <div className="w-full">
          <div className="flex justify-end ">
            <UserNavbar />
          </div>

          <main className="flex">
            {/* White board --> */}
            <div className="w-full rounded-[15px] bg-white p-6 md:mr-8">
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
