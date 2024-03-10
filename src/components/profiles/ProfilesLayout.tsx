import { useState } from 'react';
import ProfilesList from './ProfilesList';
import ProfilesFiltersModal from '../profileFilters/ProfileFiltersModal';

const ProfilesLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold text-black-3 md:mb-14">Alumn@s</h3>
      {/* Filter button only seen in small screens */}
      <button
        type="button"
        className="border-gray-400 hover:bg-gray-100 rounded-lg border px-4 py-1 font-semibold md:hidden"
        onClick={handleOpenModal}
      >
        Filtrar
      </button>

      <ProfilesList />
      {openModal && <ProfilesFiltersModal handleOpenModal={handleOpenModal} />}
    </div>
  );
};
export default ProfilesLayout;
