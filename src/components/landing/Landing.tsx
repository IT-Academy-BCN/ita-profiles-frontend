import MenuNavbar from '../menuNavbar/MenuNavbar';
import UserNavbar from '../userNavBar/UserNavbar';
import StudentDetailsLayout from '../studentDetail/StudentDetailsLayout';
import StudentsLayout from '../students/StudentsLayout';
import StudentFiltersLayout from '../studentFilters/StudentFiltersLayout';

const Landing = () => {
  return (
    <div className="flex h-screen w-full">
      <MenuNavbar />
      <div className="flex w-full flex-col gap-3 p-2 pb-8 pr-14">
        <div className="flex justify-end">
          <UserNavbar />
        </div>
        <div className="flex h-full gap-10 ">
          <div className='flex w-full rounded-xl bg-white p-10'>
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
