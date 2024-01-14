import UserDetailsContent from './UserDetailsContent';

interface Props {
  handleIsPanelOpen: () => void;
}

const UserDetailsModal = ({ handleIsPanelOpen }: Props) => {
  return (
    <dialog id="userDetailModal" className="modal modal-open">
      <div className="modal-box">
        <UserDetailsContent handleIsPanelOpen={handleIsPanelOpen} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UserDetailsModal;
