import MenuNavbar from '../menuNavbar/MenuNavbar';
import UserNavbar from '../userNavBar/UserNavbar';
import StudentDetailsLayout from '../studentDetail/StudentDetailsLayout';
import StudentsLayout from '../students/StudentsLayout';
import StudentFiltersLayout from '../studentFilters/StudentFiltersLayout';

const Landing = () => {
  return (
    <div className="flex h-screen">
      <MenuNavbar />
      <div className="flex w-full flex-col gap-3 p-4 md:p-2 pb-8 md:pr-14">
        <UserNavbar />
        <div className="flex h-[90vh] gap-10">
          <div className="flex flex-1 w-auto h-full rounded-xl bg-white p-10">
            <StudentFiltersLayout />
            <StudentsLayout />
          </div>
          <StudentDetailsLayout />
        </div>
      </div>
    </div>
  );
};

export default Landing;
