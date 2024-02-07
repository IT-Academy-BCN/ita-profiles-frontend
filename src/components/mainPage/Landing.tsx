import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="flex">
      <MenuNavbar />
      <div className="flex-1">
        {/* login nav to the up-right */}
        <div className="flex justify-end">
          <UserNavbar />
        </div>

        <main className="flex">
          {/* White board --> */}
          <div className="min-h-[90vh] w-full rounded-[15px] bg-white md:mr-8">
            <div className="relative flex gap-1 pb-2 pl-12 pt-12">
              <Filters />
              <Students />
            </div>
          </div>

          {/* Profile Details */}
          <UserDetails />
        </main>
      </div>
    </div>
  );
};

export default Landing;
