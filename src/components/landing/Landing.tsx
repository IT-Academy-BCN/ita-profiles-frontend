import Filters from '../profileFilters/ProfileFiltersLayout';
import MenuNavbar from '../menuNavbar/MenuNavbar';
import ProfilesList from '../Profiles/ProfilesList';
import UserNavbar from '../userNavBar/UserNavbar';
import ProfileDetails from '../profile/ProfileDetails';

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
          {/* Profiles --> */}
          <div className="flex w-full gap-2 rounded-xl bg-white p-10">
            <Filters />
            <ProfilesList />
          </div>

          {/* Profile Details */}
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
};

export default Landing;
