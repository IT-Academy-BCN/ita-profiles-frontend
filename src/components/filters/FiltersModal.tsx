import FiltersContent from './FiltersContent';

interface Props {
  handleOpenModal: () => void;
}

const FiltersModal = ({ handleOpenModal }: Props) => {
  return (
    <dialog id="filtersModal" className="modal modal-open modal-bottom ">
      <div className="modal-box bg-white shadow-sm ">
        <FiltersContent />
        <div className="modal-action">
          <form method="dialog" className="flex w-full justify-center ">
            {/* if there is a button in form, it will close the modal */}
            <button className="font-semibold" onClick={handleOpenModal}>
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default FiltersModal;
