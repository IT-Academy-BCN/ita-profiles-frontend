import Filters from '../filters/Filters';
import MenuNavbar from '../sideNavbar/MenuNavbar';
import Students from '../students/Students';
import UserNavbar from './UserNavbar';

const Landing = () => {
  return (
    <div className="flex w-full">
      <MenuNavbar />

      <div className="h-full w-full ">
        <UserNavbar />
        <div className="mb-2 mr-12 min-h-[90vh] rounded-[15px] bg-white">
          <Filters />
          <Students />
        </div>
      </div>
    </div>
  );
};

export default Landing;
