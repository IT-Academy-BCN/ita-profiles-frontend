import { useState } from 'react';
import ProfilesList from '../ProfilesList';
import FiltersModal from '../filters/FiltersModal';

const Students = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="w-full pr-4">
      <div className="flex items-center justify-between md:mb-0 mb-12">
        <h3 className="text-2xl font-bold text-black-3 md:mb-6">Alumn@s</h3>
        {/* Filter button only seen in small screens */}
        <button
          type="button"
          className="rounded-lg border border-gray-400 px-4 py-1 font-semibold hover:bg-gray-100 md:hidden"
          onClick={handleOpenModal}
        >
          Filtrar
        </button>
      </div>

      <ProfilesList />
      {openModal && <FiltersModal handleOpenModal={handleOpenModal} />}
    </div>
  );
};
export default Students;
