import { useState } from 'react';
import ProfilesList from '../ProfilesList';
import FiltersModal from '../filters/FiltersModal';

const Students = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-colortext mb-6 text-2xl font-bold">Alumn@s</h3>
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
