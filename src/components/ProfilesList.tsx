import profilesData from '../data/profiles.json';
import ProfileCard from './ProfileCard';
import { useAppSelector } from '../hooks/ReduxHooks';

const ProfilesList = () => {
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  return (
    <div
      className={`${
        isPanelOpen ? 'min-w-[350px] md:grid-cols-1' : 'lg:grid-cols-2'
      } mt-4 grid max-h-[75vh] w-full grid-cols-1 gap-3 overflow-hidden overflow-y-auto`}
    >
      {profilesData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default ProfilesList;
