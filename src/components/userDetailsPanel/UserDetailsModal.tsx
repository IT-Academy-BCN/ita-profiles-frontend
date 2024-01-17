import UserDetailsContent from './UserDetailsContent';

interface Props {
  handleIsPanelOpen: () => void;
}

const UserDetailsModal = ({ handleIsPanelOpen }: Props) => {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box overflow-y-auto bg-white">
        <UserDetailsContent handleIsPanelOpen={handleIsPanelOpen} />
      </div>
    </dialog>
  );
};

export default UserDetailsModal;
