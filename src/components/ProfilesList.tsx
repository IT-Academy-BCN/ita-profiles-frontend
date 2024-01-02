import profilesData from '../data/profiles.json';
import ProfileCard from './ProfileCard';

const ProfilesList = () => {
  return (
    <div className="mt-2 grid grid-cols-1 gap-4 border border-blue-700 md:grid-cols-2">
      {profilesData.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default ProfilesList;
