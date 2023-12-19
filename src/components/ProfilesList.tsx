import profilesData from '../data/profiles.json';
import ProfileCard from './ProfileCard';

const ProfilesList = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profilesData.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ProfilesList;
