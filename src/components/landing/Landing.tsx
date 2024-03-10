import MenuNavbar from '../menuNavbar/MenuNavbar';
import UserNavbar from '../userNavBar/UserNavbar';
import ProfileDetailsLayout from '../profileDetail/ProfileDetailsLayout';
import ProfilesLayout from '../profiles/ProfilesLayout';
import ProfileFiltersLayout from '../profileFilters/ProfileFiltersLayout';

const Landing = () => {
  return (
    <div className="flex">
      <MenuNavbar />
      <div className="flex w-full flex-col gap-3 p-2 pb-8 pr-14">
        <div className="flex justify-end">
          <UserNavbar />
        </div>
        <div className="flex">
          <div className="flex w-full gap-2 rounded-xl bg-white p-10">
            <ProfileFiltersLayout />
            <ProfilesLayout />
          </div>
          <ProfileDetailsLayout />
        </div>
      </div>
    </div>
  );
};

export default Landing;
