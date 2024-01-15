import UserDetailsContent from './UserDetailsContent';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { toggleUserPanel } from '../../store/reducers/getUserDetail/apiGetUserDetail';
import UserDetailsModal from './UserDetailsModal';

const UserDetails = () => {
  // aqui cogemos el estado que viene por default "false".
  const isPanelOpen = useAppSelector(
    (state) => state.ShowUserReducer.isUserPanelOpen,
  );
  const dispatch = useAppDispatch();

  // aquí transformamos el estado a true o false con la action.
  const handleIsPanelOpen = () => {
    dispatch(toggleUserPanel());
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile && isPanelOpen ? (
        <>
          <UserDetailsModal handleIsPanelOpen={handleIsPanelOpen} />
        </>
      ) : (
        <div
          className={`${
            isPanelOpen ? 'block overflow-hidden overflow-y-auto' : 'hidden'
          } mr-2 max-h-[90vh] px-2 pt-4`}
        >
          <UserDetailsContent handleIsPanelOpen={handleIsPanelOpen} />
        </div>
      )}
    </>
  );
};

export default UserDetails;
