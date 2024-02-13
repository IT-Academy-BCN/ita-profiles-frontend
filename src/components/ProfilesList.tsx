import profilesData from '../data/profiles';
import ProfileCard from './ProfileCard';
import { useAppSelector } from '../hooks/ReduxHooks';
import { fetchCall } from '../api/testcall';
import { useEffect, useState } from 'react';
// import { StudentList } from '../interfaces/interfaces';

const ProfilesList = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const [data, setData] = useState();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const mydata = await fetchCall();
        setData(mydata);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);
  console.log('data', data);

  return (
    <div
      className={`${
        isPanelOpen ? 'min-w-[350px] md:grid-cols-1' : 'lg:grid-cols-2'
      } mt-4 grid max-h-[85vh] grid-cols-1 gap-3 overflow-hidden overflow-y-auto md:max-h-[70vh]`}
    >
      {profilesData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default ProfilesList;
