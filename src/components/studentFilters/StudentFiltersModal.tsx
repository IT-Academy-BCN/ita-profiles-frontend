import StudentFiltersContent from './StudentFiltersContent';

interface Props {
  handleOpenModal: () => void;
}

const StudentsFiltersModal = ({ handleOpenModal }: Props) => {
  return (
    <dialog id="filtersModal" className="modal modal-open modal-bottom ">
      <div className="modal-box bg-white shadow-sm ">
        <StudentFiltersContent />
        <div className="modal-action">
          <form method="dialog" className="flex w-full justify-center ">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="border-gray-400 hover:bg-gray-100 w-full rounded-lg border px-4 py-1 font-semibold"
              onClick={handleOpenModal}
            >
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default StudentsFiltersModal;
