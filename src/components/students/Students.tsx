import ProfilesList from '../ProfilesList';
import UserDetails from '../userDetails/UserDetails';

const Students = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-colortext">Alumn@s</h3>
      <ProfilesList />
      <UserDetails />
    </div>
  );
};
export default Students;
