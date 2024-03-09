import Filters from '../filters/Filters';
import MenuNavbar from '../menuNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from '../userNavBar/UserNavbar';
import UserDetails from '../userDetailsPanel/UserDetails';

const Landing = () => {
  return (
    <div className="flex">
      <MenuNavbar />
      <div className="flex w-full flex-col gap-3 p-2 pb-8 pr-14">
        {/* login nav to the up-right */}
        <div className="flex justify-end">
          <UserNavbar />
        </div>

        <div className="flex">
          {/* White board --> */}
          <div className="flex w-full min-h-screen gap-2 rounded-xl bg-white p-10">
            <Filters />
            <Students />
          </div>

          {/* Profile Details */}
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default Landing;
